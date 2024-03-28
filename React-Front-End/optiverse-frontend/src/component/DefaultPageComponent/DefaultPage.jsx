import React from 'react'

const DefaultPage = () => {
    return (
        <div className="optiverse">
          <header>
            <div className="logo">Optiverse</div>
            <p>A safe, anonymous space for mental health discussions.</p>
          </header>
    
          <section className="app-preview">
            {/* Add your app preview images here */}
            <img src="app-preview1.png" alt="App Preview 1" />
            <img src="app-preview2.png" alt="App Preview 2" />
          </section>
    
          <section className="partners">
            {/* Map through partners data and display logos */}
            {partners.map(partner => (
              <img src={partner.logo} alt={partner.name} />
            ))}
          </section>
    
          <section className="testimonials">
            {/* Map through testimonials/press releases data displaying them in card format */}
            {testimonials.map(testimonial => (
              <div className="testimonial-card">
                <h3>{testimonial.title}</h3>
                <p>{testimonial.content}</p>
                <a href={testimonial.link}>Read More</a>
              </div>
            ))}
          </section>
    
          <footer>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <p>© 2024 Optiverse</p>
          </footer>
        </div>
      );
    };
    

export default DefaultPage