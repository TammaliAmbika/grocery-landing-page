import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="trust-indicator">
        <div className="avatars">
          <div className="avatar">
            <img src="https://i.pravatar.cc/100?img=1" alt="Avatar 1" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/100?img=2" alt="Avatar 2" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/100?img=3" alt="Avatar 3" />
          </div>
          <div className="avatar">
            <img src="https://i.pravatar.cc/100?img=4" alt="Avatar 4" />
          </div>
          <div className="avatar">3k+</div>
        </div>
        <span className="trust-text">Trusted by thousands of healthy families</span>
      </div>

      <h1>The Safest Way to<br/>Shop for Groceries</h1>
      
      <p>
        Use the Olive Food Scanner App to Instantly Eliminate<br/>
        Harmful Ingredients from Your Family's Diet and Get<br/>
        Expert-Backed Food Insights
      </p>

      <div className="hero-actions">
        <button className="btn-apple">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 2.01.12 3.42.98 4.26 2.35-3.32 1.83-2.73 6.64.44 7.91-1.01 2.45-2.24 3.76-3.28 2.71zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          Download for iOS
        </button>
        <a href="#" className="link-action">
          Join the Olive Community
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
