import React, { useState } from 'react';

// Component for individual portfolio items
const PortfolioItem = ({ imageSrc, previewLink, detailsLink, title, category }) => (
  <div className={`col-lg-4 col-md-6 portfolio-item ${category}`}>
    <div className="portfolio-wrap">
      <figure>
        <img src={imageSrc} className="img-fluid" alt="works profile" />
        <a href={previewLink} data-lightbox="portfolio" data-title={title} className="link-preview" title="Preview">
          <i className="fa fa-eye"></i>
        </a>
        <a href={detailsLink} className="link-details" title="More Details" target='_blanks'>
          <i className="fa fa-link"></i>
        </a>
        <h4 className="portfolio-title">
          {title} <span>{category}</span>
        </h4>
      </figure>
    </div>
  </div>
);

// Component for portfolio filter buttons
const PortfolioFilters = ({ onFilterChange, currentFilter }) => (
  <ul id="portfolio-flters">
    <li 
      data-filter="*" 
      onClick={() => onFilterChange('*')} 
      className={currentFilter === '*' ? 'filter-active' : ''}
    >
      All
    </li>
    <li 
      data-filter=".aem-site" 
      onClick={() => onFilterChange('aem-site')} 
      className={currentFilter === 'aem-site' ? 'filter-active' : ''}
    >
      AEM Site
    </li>
    <li 
      data-filter=".react" 
      onClick={() => onFilterChange('react')} 
      className={currentFilter === 'react' ? 'filter-active' : ''}
    >
      React
    </li>
    <li 
      data-filter=".wordpress" 
      onClick={() => onFilterChange('wordpress')} 
      className={currentFilter === 'wordpress' ? 'filter-active' : ''}
    >
      Wordpress
    </li>
    <li 
      data-filter=".shopify" 
      onClick={() => onFilterChange('shopify')} 
      className={currentFilter === 'shopify' ? 'filter-active' : ''}
    >
      Shopify
    </li>
  </ul>
);

// Main Portfolio component
const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  // Sample data for portfolio items
  const portfolioItems = [
    { imageSrc: 'assets/img/fablane-hair.png', previewLink: 'assets/img/fablane-hair.png', detailsLink: 'https://fablanehair.com/', title: 'FABLANE HAIR', category: 'shopify' },
    { imageSrc: 'assets/img/iconnect.png', previewLink: 'assets/img/iconnect.png', detailsLink: 'https://i-connectresources.com/', title: 'i-connectresources- Innovative Process Automation Solutions', category: 'wordpress' },
    { imageSrc: 'assets/img/kididdo.png', previewLink: 'assets/img/kididdo.png', detailsLink: 'https://kididdousa.com/', title: 'Kididdo Toys', category: 'shopify' },
    { imageSrc: 'assets/img/knorr.png', previewLink: 'assets/img/knorr.png', detailsLink: 'https://www.knorr.in/home.html', title: 'Restaurant like flavours at home', category: 'aem-site' },
    { imageSrc: 'assets/img/lavishbylilly.png', previewLink: 'assets/img/lavishbylilly.png', detailsLink: 'https://lavishbylilly.com/', title: 'The Flawless Collection', category: 'wordpress' },
    { imageSrc: 'assets/img/lifebuoy.png', previewLink: 'assets/img/lifebuoy.png', detailsLink: 'https://www.lifebuoy.in/home.html', title: 'lifebuoy Home', category: 'aem-site' },
    { imageSrc: 'assets/img/lux.png', previewLink: 'assets/img/lux.png', detailsLink: 'https://www.lux.com/in/home.html', title: 'Fragrant Bar Soap', category: 'aem-site' },
    { imageSrc: 'assets/img/magnum.png', previewLink: 'assets/img/magnum.png', detailsLink: 'https://www.magnumicecream.com/in/home.html', title: 'Magnum Home', category: 'aem-site' },
    { imageSrc: 'assets/img/map-academy.png', previewLink: 'assets/img/map-academy.png', detailsLink: 'https://mapacademy.io/', title: 'Resource on the History', category: 'wordpress' },
    { imageSrc: 'assets/img/map-india.png', previewLink: 'assets/img/map-india.png', detailsLink: 'https://map-india.org/', title: 'The Museum of Art', category: 'wordpress' },
    { imageSrc: 'assets/img/mk-global.png', previewLink: 'assets/img/mk-global.png', detailsLink: 'http://www.mkglobalfood.com/', title: 'MK Global Food', category: 'wordpress' },
    { imageSrc: 'assets/img/pest-bird.png', previewLink: 'assets/img/pest-bird.png', detailsLink: 'https://pestbirdmanagement.com/', title: 'Pest Bird Management', category: 'wordpress' },
    { imageSrc: 'assets/img/ponds.png', previewLink: 'assets/img/ponds.png', detailsLink: 'https://www.ponds.com/id/home.html', title: 'PONDs Indonesia', category: 'aem-site' },
    { imageSrc: 'assets/img/r1-newsmonkey.png', previewLink: 'assets/img/r1-newsmonkey.png', detailsLink: '/', title: 'News App', category: 'react' },
    { imageSrc: 'assets/img/streetsicecream.png', previewLink: 'assets/img/streetsicecream.png', detailsLink: 'https://www.streetsicecream.com.au/home.html', title: 'Building a happier world with Streets', category: 'aem-site' },
    { imageSrc: 'assets/img/textutil.png', previewLink: 'assets/img/textutil.png', detailsLink: '/', title: 'Words Utility', category: 'react' },
    { imageSrc: 'assets/img/unity.png', previewLink: 'assets/img/unity.png', detailsLink: 'https://unityforequality.org/', title: 'Unity For Equality', category: 'wordpress' },
    { imageSrc: 'assets/img/vaseline-ca-en.png', previewLink: 'assets/img/vaseline-ca-en.png', detailsLink: 'https://www.vaseline.com/ca/en/home.html', title: 'Skincare Products', category: 'aem-site' },
  ];

  // Filter items based on the selected filter
  const filteredItems = filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">My Portfolio</h3>
        </header>
        <div className="row">
          <div className="col-lg-12">
            <PortfolioFilters onFilterChange={setFilter} currentFilter={filter}  />
          </div>
        </div>
        <div className="row portfolio-container">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              imageSrc={item.imageSrc}
              previewLink={item.previewLink}
              detailsLink={item.detailsLink}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
