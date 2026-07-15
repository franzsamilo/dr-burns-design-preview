/* eslint-disable @next/next/no-img-element */
export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <img src="/assets/img/logo-white.png" alt="Jeffrey S. Burns DDS" />
            <p>
              Full-arch dental implants and the DreamSmile&trade;, plus complete
              general and cosmetic care, serving New Market, Harrisonburg,
              Winchester, and the Shenandoah Valley.
            </p>
            <div className="ft-social">
              <a
                href="https://www.facebook.com/JeffreySBurnsDDS/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jeffreys.burnsdds/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.5 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.6.3-1.3.5-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.3-.6-.5-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.6-.3 1.3-.5 2.3-.5C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.8 7a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="ft-col">
            <h4>Services</h4>
            <a href="/dental-implants">Dental Implants</a>
            <a href="/general-dentistry">General Dentistry</a>
            <a href="/cosmetic-dentistry">Cosmetic Dentistry</a>
            <a href="/dentures">Dentures</a>
          </div>
          <div className="ft-col">
            <h4>Practice</h4>
            <a href="/our-team">Meet the Doctor</a>
            <a href="#protocol">The Burns Protocol</a>
            <a href="#results">Patient Stories</a>
            <a href="/resources">Patient Resources</a>
          </div>
          <div className="ft-col ft-contact">
            <h4>Visit</h4>
            <div>
              <b>540-740-8937</b>
            </div>
            <div>
              9626 South Congress St<br />New Market, VA 22844
            </div>
            <div>
              <a href="#consult" style={{ color: "var(--cyan)" }}>
                Book a consultation
              </a>
            </div>
            <img
              className="ft-map"
              src="/assets/img/map.jpg"
              alt="Map showing the office location at 9626 South Congress St in New Market, Virginia"
            />
          </div>
        </div>
        <div className="ft-areas">
          Proudly serving Shenandoah County, Page County, and Rockingham County,
          including Harrisonburg, Winchester, Woodstock, Luray, Timberville,
          Broadway, Mount Jackson, Stanley, Quicksburg, Basye, Edinburg, Elkton,
          and Bridgewater, VA.
        </div>
        <div className="ft-bottom">
          <span>&copy; 2026 Jeffrey S. Burns D.D.S. &nbsp;/&nbsp; DreamSmile&trade;</span>
          <span>
            <a href="#">Privacy Policy</a> &nbsp; <a href="#top">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
