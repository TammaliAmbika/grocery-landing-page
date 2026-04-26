import React from 'react';

const PhoneMockup = () => {
  return (
    <section className="mockup-container">
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="dynamic-island"></div>
          
          <div className="app-content-scroll">
            
            <div className="app-product-card">
              <img 
                src="https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&w=300&q=80" 
                alt="Fig and Olive Crackers" 
                className="main-product-img" 
              />
            </div>

            <h2 className="app-title">Fig and Olive Crackers, Fig<br/>and Olive</h2>
            <p className="app-subtitle">Lesley Stowe</p>
            
            <div className="score-row">
              <div className="score-badge">
                 <div className="score-main">
                    <div className="red-dot"></div>
                    <span className="score-number">46</span><span className="score-total">/100</span>
                 </div>
                 <div className="score-text">Avoid</div>
              </div>
              <div className="score-icons">
                 <button className="bare-icon-btn">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                 </button>
                 <button className="bare-icon-btn">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>
                 </button>
              </div>
            </div>

            <div className="breakdown-card">
              <div className="breakdown-header">
                <svg width="18" height="18" viewBox="0 0 24 24" style={{ marginRight: '2px', marginTop: '-1px' }}>
                  <defs>
                    <radialGradient id="pimentoGrad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#9cc94e" />
                      <stop offset="60%" stopColor="#649e29" />
                      <stop offset="100%" stopColor="#3c6511" />
                    </radialGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10" fill="url(#pimentoGrad)" />
                  <circle cx="8" cy="8" r="2.8" fill="#e01838" />
                  <ellipse cx="11" cy="4.5" rx="4" ry="1.5" fill="#d0f09d" transform="rotate(-30 11 4.5)" opacity="0.8" />
                </svg>
                <span className="breakdown-title">Oliver Says:</span>
              </div>
              <p className="breakdown-text">
                "This product's low score mainly comes from the processed sugars, like Honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."
              </p>
            </div>
            
            <div style={{ padding: '0 1.5rem', marginTop: '1.5rem' }}>
               <h3 style={{ fontSize: '0.9rem', fontWeight: '700' }}>Breakdown</h3>
               <div style={{ height: '40px', background: '#f8fafc', borderRadius: '8px', marginTop: '8px' }}></div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhoneMockup;
