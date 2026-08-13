import { FormEvent, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import QualitySection from './components/QualitySection';
import WineCollection from './components/WineCollection';
import StorySection from './components/StorySection';
import Gallery from './components/Gallery';
import Logo from './components/Logo';
import { SITE, waLink } from './data/site';
import { subscribeNewsletter } from './lib/integrations';

function VisitSection() {
  return (
    <section id="visit" className="border-t border-gold/15 bg-coal py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="eyebrow">Visit & Contact</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-cream sm:text-5xl">Come raise a glass.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-cream/65">For orders, enquiries and visits, get in touch with Blackdoll Winery. Replace the placeholder contact details below with the winery's verified details before launch.</p>
          <a href={waLink('Hello Blackdoll Winery! I would like to enquire about your wines.')} target="_blank" rel="noreferrer" className="btn-gold mt-9 inline-flex">
            <span className="btn-fill" aria-hidden="true" /><span className="btn-label">Chat on WhatsApp</span>
          </a>
        </div>
        <div className="grid gap-5 border border-gold/15 bg-soot/60 p-7 sm:grid-cols-2">
          <div><p className="eyebrow">Phone</p><a className="mt-2 block text-sm text-cream hover:text-gold-bright" href={SITE.phoneHref}>{SITE.phoneDisplay}</a></div>
          <div><p className="eyebrow">Email</p><a className="mt-2 block break-all text-sm text-cream hover:text-gold-bright" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
          <div><p className="eyebrow">Location</p><p className="mt-2 text-sm text-cream/75">{SITE.location}</p></div>
          <div><p className="eyebrow">Hours</p><p className="mt-2 text-sm text-cream/75">{SITE.hours}</p></div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('');
    try {
      await subscribeNewsletter(email);
    } catch {
      setStatus('Newsletter connection is not live yet.');
    }
  };
  return (
    <section className="border-y border-gold/20 bg-[#1a1610] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div><p className="font-display text-2xl text-gold-bright">Stay in the loop</p><p className="mt-2 text-sm text-cream/60">New wines, events and special releases.</p></div>
        <form onSubmit={submit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="min-w-0 flex-1 border border-gold/25 bg-ink px-5 py-3 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-gold" />
          <button className="btn-gold" type="submit"><span className="btn-fill" aria-hidden="true" /><span className="btn-label">Subscribe</span></button>
        </form>
      </div>
      {status && <p className="mx-auto mt-4 max-w-7xl px-5 text-xs text-gold-bright sm:px-8">{status}</p>}
    </section>
  );
}

function Footer() {
  return <footer className="bg-ink pt-14">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-12 sm:px-8 md:grid-cols-3">
      <div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-cream/50">Premium wines made with passion, dedication and a touch of elegance.</p></div>
      <div><p className="eyebrow mb-4">Explore</p><div className="grid grid-cols-2 gap-3 text-sm text-cream/65"><a href="#story" className="hover:text-gold-bright">Our Story</a><a href="#wines" className="hover:text-gold-bright">Our Wines</a><a href="#gallery" className="hover:text-gold-bright">Gallery</a><a href="#visit" className="hover:text-gold-bright">Contact</a></div></div>
      <div><p className="eyebrow mb-4">Contact</p><a href={SITE.phoneHref} className="block text-sm text-cream/65 hover:text-gold-bright">{SITE.phoneDisplay}</a><a href={`mailto:${SITE.email}`} className="mt-2 block break-all text-sm text-cream/65 hover:text-gold-bright">{SITE.email}</a></div>
    </div>
    <div className="border-t border-gold/10 py-5"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-[10px] uppercase tracking-caps text-cream/35 sm:px-8 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Blackdoll Winery</span><span>Crafted in South Africa</span></div></div>
  </footer>;
}

export default function App() {
  return <>
    <Navbar />
    <main id="main">
      <Hero />
      <IntroSection />
      <QualitySection />
      <WineCollection />
      <StorySection />
      <Gallery />
      <VisitSection />
      <Newsletter />
    </main>
    <Footer />
  </>;
}
