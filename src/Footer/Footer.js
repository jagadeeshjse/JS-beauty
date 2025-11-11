import React from 'react';
// import GoogleMapReact from 'google-map-react';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (!email) return alert('Please enter an email address to subscribe');
    // Simple subscribe action - open mailto for now
    window.open(`mailto:info@jsbeauty.com?subject=Subscribe&body=Please subscribe ${email}`);
    e.target.reset();
  };

  return (
    <footer className="footer">
      <hr className="hr-toggle" />
      <div className="footer-inner container">
        <div className="map-wrap">
          <div className="map-embed">
            <iframe
              title="JS Beauty Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.2985129448184!2d83.40481157370868!3d18.104000981769104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be53d40da9bf9%3A0x2cf140cc5f7525fc!2sJS%20Beauty%20Parlour%20and%20Boutique!5e0!3m2!1sen!2sin!4v1721012605475!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-columns">
          <div className="col contact-col">
            <h3>JS Beauty Parlour & Boutique</h3>
            <p>Address: Near Main Market, City — Contact for exact directions.</p>
            <p>Hours: Mon–Sat 09:00 – 19:00</p>
            <p>
              <strong>Chat on WhatsApp:</strong>{' '}
              <a href="https://wa.me/+918331843306" target="_blank" rel="noreferrer">+91 90523 01212</a>
            </p>
            <p>
              <strong>Call:</strong>{' '}
              <a href="tel:+919052301212">+91 90523 01212</a>
            </p>
            <div className="social-links" aria-hidden>
              <button className="social-btn" aria-label="Instagram" title="Instagram">IG</button>
              <button className="social-btn" aria-label="Facebook" title="Facebook">FB</button>
              <button className="social-btn" aria-label="YouTube" title="YouTube">YT</button>
            </div>
          </div>

          <div className="col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/Beauty">Beauty Services</a></li>
              <li><a href="/Boutique">Boutique</a></li>
              <li><a href="#appointment">Book Appointment</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>

          <div className="col newsletter-col">
            <h4>Subscribe</h4>
            <p>Get offers and updates via email.</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input name="email" type="email" placeholder="you@domain.com" aria-label="email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <small>© {new Date().getFullYear()} JS Beauty Parlour & Boutique — All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
