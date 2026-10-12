import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Menu, MapPin, Clock3, Mail, X, ShieldCheck, Sparkles } from 'lucide-react';

const whatsappNumber = '27812863529';
const serviceGroups = [
  {
    id: 'sensual',
    title: 'Sensual Massages',
    intro: 'A more indulgent kind of escape, in a setting that feels entirely your own.',
    image: `${import.meta.env.BASE_URL}brand/sensual-massage.jpeg`,
    imageAlt: 'Sensual massage experience in a warmly lit setting',
    offers: [
      ['Quick Fix', 'R199'],
      ['Sugar And Spice', 'R300'],
      ['Enticing Massage', 'R600'],
      ['Sinful Massage', 'R800'],
      ['Couples Sensual', 'R1500'],
    ],
  },
  {
    id: 'professional',
    title: 'Professional Massage',
    intro: 'A considered pause to unwind, reset and settle into stillness.',
    image: `${import.meta.env.BASE_URL}brand/professional-massage.jpeg`,
    imageAlt: 'Professional massage in a calm spa setting',
    offers: [
      ['Aromatherapy Professional Massage', 'R400'],
      ['Couples Professional', 'R1200'],
      ['Outcalls', 'R1500'],
    ],
  },
  {
    id: 'fantasies',
    title: 'Explore Your Inner Fantasies',
    intro: 'A discreet invitation to explore something a little different.',
    image: `${import.meta.env.BASE_URL}brand/fantasies.jpeg`,
    imageAlt: 'A private, intimate fantasy experience',
    offers: [['The Royal 4 Hands Fantasy', 'R1200']],
  },
];

function bookingLink(service?: string) {
  const message = service
    ? `Hello Aroma Heaven Spa, I would like to enquire about ${service}. Please let me know how I may request a booking.`
    : 'Hello Aroma Heaven Spa, I would like to enquire about requesting a booking. Please share the available options.';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const title = 'Aroma Heaven Spa | Umhlanga';
    const description = 'A private, upmarket Umhlanga sanctuary. Fully licensed, fully discreet. Enquire about a massage by WhatsApp.';
    document.title = title;
    const setMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:type"]', 'property', 'website');
    setMeta('meta[property="og:image"]', 'property', `${import.meta.env.BASE_URL}brand/logo.png`);
    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);
    setMeta('meta[name="theme-color"]', 'name', '#171516');
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topline"><span>UMHLANGA · SOUTH AFRICA</span><span>EVERY DAY, 8 AM–9 PM</span></div>
      <header className="site-header">
        <a href="#home" className="brand-lockup" aria-label="Aroma Heaven Spa home">
          <img src={`${import.meta.env.BASE_URL}brand/logo.png`} alt="Aroma Heaven Spa — A Natural Breeze Of Relaxation" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} data-testid="button-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#experience" onClick={closeMenu}>The experience</a>
          <a href="#treatments" onClick={closeMenu}>Treatments</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-book" href={bookingLink()} target="_blank" rel="noreferrer" data-testid="link-book-header" onClick={closeMenu}>Enquire on WhatsApp <ArrowRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}brand/professional-massage.jpeg")` }} role="img" aria-label="A moment of calm during a professional massage" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><span /> YOUR PRIVATE UMHLANGA SANCTUARY</div>
          <h1>A softer pace.<br /><em>A private escape.</em></h1>
          <p>Step away from the everyday and into a space made for relaxation, tranquility and complete discretion.</p>
          <div className="hero-actions">
            <a className="button button-pink" href={bookingLink()} target="_blank" rel="noreferrer" data-testid="link-book-hero">Make an enquiry <ArrowRight size={17} /></a>
            <a className="text-link" href="#treatments">Explore treatments <ArrowDown size={15} /></a>
          </div>
          <div className="hero-note"><ShieldCheck size={16} /><span>Fully licensed. Fully discreet.</span></div>
        </div>
        <div className="hero-vertical">A NATURAL BREEZE OF RELAXATION</div>
        <a href="#experience" className="scroll-cue" aria-label="Scroll to discover"><span /> SCROLL TO DISCOVER</a>
      </section>

      <section className="intro-section" id="experience">
        <div className="intro-index">01 <i /></div>
        <div className="intro-copy">
          <div className="eyebrow eyebrow-dark">A WELCOME PAUSE</div>
          <h2>Leave the outside<br />world <em>at the door.</em></h2>
        </div>
        <div className="intro-aside">
          <p>At Aroma Heaven Spa, relaxation is personal. Find a moment of calm in an upmarket space where your comfort, privacy and peace of mind come first.</p>
          <div className="intro-signoff"><Sparkles size={17} /> A Natural Breeze Of Relaxation</div>
        </div>
      </section>

      <section className="promise-band" aria-label="Our approach">
        <div className="promise-item"><span className="promise-number">01</span><div><strong>Fully licensed</strong><small>Care with confidence</small></div></div>
        <div className="promise-item"><span className="promise-number">02</span><div><strong>Fully discreet</strong><small>Your privacy comes first</small></div></div>
        <div className="promise-item"><span className="promise-number">03</span><div><strong>Clean & considered</strong><small>Hygiene matters, always</small></div></div>
        <div className="promise-item"><span className="promise-number">04</span><div><strong>Upmarket sanctuary</strong><small>Room to unwind</small></div></div>
      </section>

      <section className="treatments-section" id="treatments">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-dark">FIND YOUR MOMENT</div>
            <h2>Time, set aside <em>for you.</em></h2>
          </div>
          <p>Explore our treatments, then send us a private enquiry. We’ll be happy to help with your request.</p>
        </div>
        <div className="treatment-list">
          {serviceGroups.map((group, index) => (
            <article className="treatment-card" key={group.id} id={`treatment-${group.id}`}>
              <div className="treatment-image-wrap">
                <img className="treatment-image" src={group.image} alt={group.imageAlt} loading="lazy" />
                <span className="treatment-index">0{index + 1}</span>
              </div>
              <div className="treatment-content">
                <div className="treatment-heading"><span className="eyebrow eyebrow-dark">THE COLLECTION</span><h3>{group.title}</h3><p>{group.intro}</p></div>
                <div className="offer-list">
                  {group.offers.map(([name, price]) => (
                    <div className="offer-row" key={name}>
                      <span className="offer-name">{name}</span>
                      <span className="offer-price">{price}</span>
                      <a className="offer-link" href={bookingLink(name)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${name}`} data-testid={`link-enquire-${group.id}-${name.toLowerCase().replaceAll(' ', '-')}`}><ArrowRight size={17} /></a>
                    </div>
                  ))}
                </div>
                <a className="collection-cta" href={bookingLink(group.title)} target="_blank" rel="noreferrer" data-testid={`link-enquire-category-${group.id}`}>Enquire about this collection <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="price-note">Prices shown as listed. Enquiries are requests only; availability and arrangements are confirmed personally.</p>
      </section>

      <section className="discretion-section">
        <div className="discretion-image" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}brand/fantasies.jpeg")` }} role="img" aria-label="A discreet and intimate spa setting" />
        <div className="discretion-copy">
          <div className="eyebrow">YOUR COMFORT, ALWAYS</div>
          <h2>Good care begins<br />with <em>feeling at ease.</em></h2>
          <p>From a clean, considered space to a discreet welcome, every detail is here to help you settle in and find your own quiet.</p>
          <a className="button button-outline-light" href={bookingLink()} target="_blank" rel="noreferrer" data-testid="link-book-discreet">Start a private enquiry <ArrowRight size={16} /></a>
        </div>
        <div className="discretion-mark">AH<span>·</span></div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-left">
          <div className="eyebrow eyebrow-dark">A LITTLE CLOSER</div>
          <h2>Find your way<br /><em>to tranquility.</em></h2>
          <p>We look forward to welcoming you to our Umhlanga sanctuary.</p>
          <a className="button button-dark" href={bookingLink()} target="_blank" rel="noreferrer" data-testid="link-book-visit">Enquire before you visit <ArrowRight size={16} /></a>
        </div>
        <div className="visit-details">
          <div className="detail-row"><span className="detail-icon"><MapPin size={18} /></span><div><small>VISIT US</small><address>Shop 13, 18 Zenith Drive<br />Umhlanga, 4319</address></div></div>
          <div className="detail-row"><span className="detail-icon"><Clock3 size={18} /></span><div><small>OPEN EVERY DAY</small><p>8 am–9 pm</p></div></div>
          <div className="detail-row"><span className="detail-icon"><Mail size={18} /></span><div><small>EMAIL</small><a href="mailto:aromaheaven69@gmail.com" data-testid="link-email">aromaheaven69@gmail.com</a></div></div>
        </div>
        <div className="map-panel">
          <div className="map-grid" />
          <div className="map-pin"><MapPin size={20} /></div>
          <span className="map-label">ZENITH DRIVE</span>
          <span className="map-place">UMHLANGA</span>
          <a className="map-directions" href="https://www.google.com/maps/search/?api=1&query=Shop+13%2C+18+Zenith+Drive%2C+Umhlanga%2C+4319" target="_blank" rel="noreferrer" data-testid="link-directions">Get directions <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="closing-section">
        <img src={`${import.meta.env.BASE_URL}brand/logo.png`} alt="Aroma Heaven Spa — A Natural Breeze Of Relaxation" loading="lazy" />
        <p>Some moments are just for you.</p>
        <a className="button button-pink" href={bookingLink()} target="_blank" rel="noreferrer" data-testid="link-book-footer">Begin with a private enquiry <ArrowRight size={16} /></a>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} AROMA HEAVEN SPA</span>
        <span>UMHLANGA · SOUTH AFRICA</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
      <a className="mobile-book" href={bookingLink()} target="_blank" rel="noreferrer" data-testid="link-book-mobile">Enquire on WhatsApp <ArrowRight size={17} /></a>
    </main>
  );
}

export default App;
