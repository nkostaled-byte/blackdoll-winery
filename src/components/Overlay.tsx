// src/components/Overlay.tsx
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IconClose } from './icons';

interface Props {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  wide?: boolean;
}

/**
 * Accessible modal primitive: focus trap, Esc, scroll-lock,
 * enter/exit on opacity + scale(0.96) — modals stay centred.
 */
export default function Overlay({ open, onClose, label, children, wide = true }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>('[data-autofocus]')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panel) {
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      restoreRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={label}>
      <button
        aria-label="Close dialog"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/85 backdrop-blur-[2px] animate-[backdrop-in_250ms_var(--ease-out)]"
      />
      <div
        ref={panelRef}
        className={`relative max-h-[92dvh] w-full overflow-y-auto border border-gold/25 bg-coal shadow-glow animate-[panel-in_250ms_var(--ease-out)] ${
          wide ? 'sm:max-w-4xl' : 'sm:max-w-xl'
        }`}
      >
        <button
          data-autofocus
          onClick={onClose}
          className="absolute right-4 top-4 z-20 border border-gold/30 bg-ink/70 p-2.5 text-cream/80 transition-colors duration-200 hover:text-gold-bright"
          aria-label="Close"
        >
          <IconClose className="h-4 w-4" />
        </button>
        {children}
      </div>
      <style>{`
        @keyframes backdrop-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes panel-in { from { opacity: 0; transform: scale(0.96) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          [role="dialog"] * { animation-duration: 1ms !important; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
