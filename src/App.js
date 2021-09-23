import './App.css';

function App() {
  let publicFolder = process.env.PUBLIC_URL + './assets/';
  let categoryDB = [
    {
      id: 1,
      name: 'Img Category 1',
      src: publicFolder + './images/cat-bn-01.jpg',
      altText: 'Img Category 1'
    },
    {
      id: 2,
      name: 'Img Category 2',
      src: publicFolder + './images/cat-bn-02.jpg',
      altText: 'Img Category 2'
    },
    {
      id: 3,
      name: 'Img Category 3',
      src: publicFolder + './images/cat-bn-03.jpg',
      altText: 'Img Category 3'
    },
    {
      id: 4,
      name: 'Img Category 4',
      src: publicFolder + './images/cat-bn-04.jpg',
      altText: 'Img Category 4'
    }
  ]

  let galleryDB = [
    {
      id: 1,
      src: publicFolder + './images/bg-pin-01.jpg',
      position: ['position-19-67']
    },
    {
      id: 2,
      src: publicFolder + './images/bg-pin-02.jpg',
      position: ['position-50-50', 'position-33-90']
    },
    {
      id: 3,
      src: publicFolder + './images/bg-pin-03.jpg',
      position: ['position-80-78']
    },
    {
      id: 4,
      src: publicFolder + './images/bg-pin-04.jpg',
      position: ['position-50-50']
    },
    {
      id: 5,
      src: publicFolder + './images/bg-pin-01.jpg',
      position: ['position-19-67']
    },
    {
      id: 6,
      src: publicFolder + './images/bg-pin-02.jpg',
      position: ['position-50-50', 'position-33-90']
    },
    {
      id: 7,
      src: publicFolder + './images/bg-pin-03.jpg',
      position: ['position-80-78']
    },
    {
      id: 8,
      src: publicFolder + './images/bg-pin-04.jpg',
      position: ['position-50-50']
    },
    {
      id: 9,
      src: publicFolder + './images/bg-pin-01.jpg',
      position: ['position-19-67']
    },
    {
      id: 10,
      src: publicFolder + './images/bg-pin-02.jpg',
      position: ['position-50-50', 'position-33-90']
    },
    {
      id: 11,
      src: publicFolder + './images/bg-pin-03.jpg',
      position: ['position-80-78']
    },
    {
      id: 12,
      src: publicFolder + './images/bg-pin-04.jpg',
      position: ['position-50-50']
    }
  ]

  let blogDB = [
    {
      id: 1,
      title: 'Spring - Summer Trending 2020',
      imgUrl: publicFolder + "./images/blog-01.jpg",
      author: 'admin',
      time: 'April 6, 2020',
      description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
      altText: 'blog img'
    },
    {
      id: 2,
      title: 'The Easiest Way to Break Out on Top',
      imgUrl: publicFolder + "./images/blog-02.jpg",
      author: 'admin',
      time: 'April 6, 2020',
      description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
      altText: 'blog img'
    },
    {
      id: 3,
      title: 'Style for couple in Weeding season',
      imgUrl: publicFolder + "./images/blog-03.jpg",
      author: 'admin',
      time: 'April 6, 2020',
      description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
      altText: 'blog img'
    }
  ]

  let carouselDB = [
    {
      id: 1,
      imgUrl: publicFolder + "./images/ins1_1.jpg",
      altText: 'carousel img',
      position: ['position-39-39']
    },
    {
      id: 2,
      imgUrl: publicFolder + "./images/ins1_2.jpg",
      altText: 'carousel img',
      position: ['position-50-50']
    },
    {
      id: 3,
      imgUrl: publicFolder + "./images/ins1_4.jpg",
      altText: 'carousel img',
      position: ['position-32-67', 'position-98-44']
    },
    {
      id: 4,
      imgUrl: publicFolder + "./images/ins1_5.jpg",
      altText: 'carousel img',
      position: ['position-28-79']
    },
    {
      id: 5,
      imgUrl: publicFolder + "./images/ins1_6.jpg",
      altText: 'carousel img',
      position: ['position-48-66']
    },
    {
      id: 6,
      imgUrl: publicFolder + "./images/ins1_8.jpg",
      altText: 'carousel img',
      position: ['position-60-42']
    }
  ]

  let serviceDB = [
    {
      id: 1,
      icon: 'fas fa-car',
      title: 'FREE SHIPPING',
      description: 'Free shipping on all US order or order above $100'
    },
    {
      id: 2,
      icon: 'far fa-life-ring',
      title: 'SUPPORT 24/7',
      description: 'Contact us 24 hours a day, 7 days a week'
    },
    {
      id: 3,
      icon: 'fas fa-redo-alt',
      title: '30 DAYS RETURN',
      description: 'Simply return it within 30 days for an exchange.'
    },
    {
      id: 4,
      icon: 'fas fa-user-shield',
      title: '100% PAYMENT SECURE',
      description: 'We ensure secure payment with PEV'
    }
  ]

  let categoriesData = categoryDB.map((e) => {
    return (
      <li key={e.id} className="category-item col-3 col-medium-3 col-small-12">
        <a href={App} className="category-img">
          <div className="div-image-container">
            <img key={e.name} src={e.src} alt={e.altText} />
          </div>
        </a>
        <a href={App} className="category-name btn btn-round">Footwear</a>
      </li>
    )
  })

  let galleriesData = galleryDB.map((e) => {
    return (
      <li key={e.id} className="gallery-item col-3 col-large-3 col-medium-4 col-small-6">
        <div className="div-image-container">
          <img src={e.src} alt="gallery item img" />
        </div>
        {e.position.map((a, index) => {
          let tempClass = `btn btn-circle ${a}`
          return (
            <span className={tempClass}>{index + 1}</span>
          )
        })}
      </li>
    )
  })

  let carouselData = carouselDB.map((e) => {
    return (
      <li key={e.id} className="carousel-item col-2 col-large-2 col-medium-3 col-small-6">
        <div className="div-image-container">
          <img src={e.imgUrl} alt={e.altText} />
        </div>
        {e.position.map((a, index) => {
          let tempClass = `btn btn-circle ${a}`
          return (
            <span className={tempClass}>{index + 1}</span>
          )
        })}
      </li>
    )
  })

  let blogsData = blogDB.map((e) => {
    return (
      <li key={e.id} className="blog-item col-4 col-medium-4 col-small-12">
        <a href={App} className="blog-img">
          <div className="div-image-container">
            <img src={e.imgUrl} alt={e.altText} />
          </div>
        </a>
        <div className="blog-content">
          <h4><a href={App} className="blog-title">{e.title}</a></h4>
          <p className="blog-info">
            By <span className="blog-author text-bold">{e.author}</span> on <span className="blog-time text-bold">{e.time}</span>
          </p>
          <p className="blog-description">{e.description}</p>
        </div>
      </li>
    )
  })

  let serviceData = serviceDB.map((e) => {
    return (
      <li key={e.id} className="service-item flex col-3 col-large-3 col-medium-6 col-small-12">
        <i className={e.icon}></i>
        <div className="service-info">
          <h3 className="service-title">{e.title}</h3>
          <p className="service-description">{e.description}</p>
        </div>
      </li>
    )
  })

  return (
    <div className="App">

      <div className="header-banner">
        <div className="container-full">
          <a href={App} className="header-banner__link">
            <button className="btn btn-close-temp">
              <i className="icon icon-dash"></i>
              <span>close</span>
            </button>
            <div className="header-banner__text">
              Today deal sale off <strong>70%</strong>. End in <strong>127 days <time>08:17:45</time></strong>.
              Hurry up <i className="fas fa-arrow-right"></i>
            </div>
            <button className="btn btn-close">
              <i className="icon icon-dash"></i>
              <span>close</span>
            </button>
          </a>
        </div>
      </div>

      <header className="page-header">
        <div className="header-top">
          <div className="container-full flex txt-center row">
            <ul className="contact-info flex col-large-4 col-small-12">
              <li className="flex-start">
                <i className="fas fa-phone-alt"></i>
                +01 23456789
              </li>
              <li className="flex-start">
                <i className="far fa-envelope"></i>
                <a href={App} className="header-top__link">Kalles@domain.com</a>
              </li>
            </ul>
            <div className="header-top__text col-large-4 col-small-12">
              Summer sale discount off <span className="header-top__discount text-red">50%</span>!
              <a href={App}> Shop now</a>
            </div>
            {/* <!-- autodropdown not select element --> */}
            <ul className="list-currency col-large-4 col-small-12">
              {/* <!-- <li><a href={App}><i className="flag flag-aud">AUD</i></a></li>
                    <li><a href={App}><i className="flag flag-cad">CAD</i></a></li>
                    <li><a href={App}><i className="flag flag-dkk">DKK</i></a></li>
                    <li><a href={App}><i className="flag flag-eur">EUR</i></a></li>
                    <li><a href={App}><i className="flag flag-gbp">GBP</i></a></li>
                    <li><a href={App}><i className="flag flag-hkd">HKD</i></a></li>
                    <li><a href={App}><i className="flag flag-jpy">JPY</i></a></li>
                    <li><a href={App}><i className="flag flag-nzd">NZD</i></a></li>
                    <li><a href={App}><i className="flag flag-sgd">SGD</i></a></li>
                    <li><a href={App}><i className="flag flag-usd">USD</i></a></li> --> */}
            </ul>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container-full">
            <div className="header-bottom__wrapper flex row">
              <div className="btn mobile-nav flex-start col-small-4"><i className="fas fa-bars"></i></div>
              <a className="header-logo flex-start col-large-2 col-small-4" href={App}>
                <img src={publicFolder + './images/kalles.svg'} alt="Kalles logo" />
              </a>
              <nav className="header-nav col-large-8">
                <ul className="header-menu flex-center">
                  <li><a href={App} className="flex-center">Demo</a></li>
                  <li><a href={App} className="flex-center">Shop
                    {/* <span className="span-badge">New</span> */}
                  </a></li>
                  <li><a href={App} className="flex-center">Product</a></li>
                  <li><a href={App} className="flex-center">Sale
                    {/* <span className="span-badge">Sale</span> */}
                  </a></li>
                  <li><a href={App} className="flex-center">Portfolio</a></li>
                  <li><a href={App} className="flex-center">Lookbook</a></li>
                  <li><a href={App} className="flex-center">Blog</a></li>
                </ul>
              </nav>
              <ul className="header-action flex-end col-large-2 col-small-4">
                <li className="flex-center"><a href={App}><i className="fas fa-search"></i></a></li>
                <li className="action-user flex-center"><a href={App}><i className="far fa-user"></i></a></li>
                <li className="action-fav flex-center"><a href={App}><i className="far fa-heart"></i>
                  {/* <!-- <span className="span-counter">3</span> --> */}
                </a>
                </li>
                <li className="flex-center"><a href={App}><i className="fas fa-shopping-cart"></i>
                  {/* <!-- <span className="span-counter">5</span> --> */}
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="page-main">

        <section className="section-banner">
          <a href={App}>
            <img src={publicFolder + './images/loobook.jpg'} alt="banner img" />
          </a>
          <div className="banner-content flex-column txt-center">
            <h1 className="banner-title">CLEARANCE SALE OFF TO 70%</h1>
            <h2 className="banner-sub-title">Spring Collection 2021</h2>
            <a href={App} className="btn btn-outline">Shop Now</a>
          </div>
        </section>

        <section className="section-category">
          <div className="container-full">
            <ul className="category-list row">
              {categoriesData}
            </ul>
          </div>
        </section>

        <section className="section-promotion">
          <div className="container">
            <ul className="promotion-list row">
              <li className="promotion-item promotion-item-left col-4 col-medium-4 col-small-12">
                <a href={App}>
                  <img src={publicFolder + "./images/bn-01.jpeg"} alt="promotion img" />
                </a>
                <div className="promotion-content">
                  <h5>VIEW COLLECTIONS</h5>
                  <h2>LOOKBOOK</h2>
                  <p>your world of fashion in numbers</p>
                </div>
              </li>

              <li className="promotion-item col-4 col-medium-4 col-small-12">
                <a href={App}>
                  <img src={publicFolder + "./images/pr-big-24.jpg"} alt="promotion img" />
                </a>
                <div className="promotion-item-top">
                  <i className="far fa-heart"></i>
                  <span className="discount-percent-tag flex-center">-34%</span>
                </div>
                <div className="promotion-item-middle">
                  <ul className="promotion-action flex-column">
                    <li>
                      <a href={App} className="btn btn-quick-view">
                        <i className="icon icon-eye"></i>
                        <span>Quick View</span>
                      </a>
                    </li>
                    <li>
                      <a href={App} className="btn btn-quick-shop">
                        <i className="icon icon-cart"></i>
                        <span>Quick Shop</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="promotion-item-bottom">
                  <div className="promotion-item-product">
                    <h3 className="promotion-product-name">
                      <a href={App}>
                        La Boheme Rose Gold
                      </a>
                    </h3>
                    <h4 className="promotion-product-price"><s className="base-price">$60.00</s> <span
                      className="discount-price span-red">$40.00</span></h4>
                    <ul className="radio-list list-color">
                      <li className="radio-list-color">
                        <span className="radio-item radio-color-pink"></span>
                      </li>
                      <li>
                        <span className="radio-item radio-color-black"></span>
                      </li>
                    </ul>
                  </div>
                  <ul className="time-counter flex-center txt-center">
                    <li className="time-counter-item">
                      <span className="time-number flex-column flex-end">128</span>
                      <span className="time-unit flex-column flex-start">days</span>
                    </li>
                    <li className="time-counter-item">
                      <span className="time-number flex-column flex-end">12</span>
                      <span className="time-unit flex-column flex-start">hr</span>
                    </li>
                    <li className="time-counter-item">
                      <span className="time-number flex-column flex-end">47</span>
                      <span className="time-unit flex-column flex-start">min</span>
                    </li>
                    <li className="time-counter-item">
                      <span className="time-number flex-column flex-end">55</span>
                      <span className="time-unit flex-column flex-start">sc</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="promotion-item promotion-item-right col-4 col-medium-4 col-small-12">
                <a href={App}>
                  <img src={publicFolder + "./images/pr-big-26.jpg"} alt="promotion img" />
                </a>
                <div className="promotion-content flex-column txt-center">
                  <h3>MEN COLLECTION</h3>
                  <h4>SALE 70%</h4>
                  <a href={App} className="btn btn-outline">Shop Now</a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section-instagram-gallery">
          <h2 className="section-title flex-center"><span className="section-title__span">INSTAGRAM SHOP</span></h2>
          <p className="section-description txt-center">Make your instagram shop</p>
          <ul className="gallery-item-list row">
            {galleriesData}
          </ul>
        </section>

        <section className="section-blog">
          <div className="container">
            <h2 className="section-title flex-center"><span className="section-title__span">LASTS FROM BLOG</span></h2>
            <p className="section-description txt-center">The freshest and most exciting news</p>
            <ul className="blog-list row">
              {blogsData}
            </ul>
          </div>
        </section>

        <section className="section-instagram-carousel">
          <h2 className="section-title flex-center">
            <span className="section-title__span txt-center">@ FOLLOW US ON INSTAGRAM</span>
          </h2>
          <ul className="carousel-list row">
            {carouselData}
          </ul>
          <div className="carousel-btn-action">
            <button className="btn btn-pre">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="btn btn-next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </section>

        <section className="section-service">
          <div className="container">
            <ul className="service-list row">
              {serviceData}
            </ul>
          </div>
        </section>

      </main>

      <footer className="page-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="footer-top-col col-3 col-large-3 col-medium-6 col-small-12">
                <a href={App} className="footer-logo">
                  <img src={publicFolder + './images/kalles.svg'} alt="Kalles logo" />
                </a>
                <ul className="contact-list">
                  <li className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>184 Main Rd E, St Albans <br />
                      <span className="span-pd-30">VIC 3021, Australia</span> </span>
                  </li>
                  <li className="contact-item">
                    <i className="far fa-envelope"></i>
                    <span> <a href={App}>contact@company.com</a></span>
                  </li>
                  <li className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <span>+001 2233 456</span>
                  </li>
                </ul>
                <ul className="social-list flex">
                  <li className="social-item">
                    <a href={App}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href={App}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href={App}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href={App}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a href={App}>
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-top-col col-2 col-large-2 col-medium-6 col-small-12">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-top-link-list">
                  <li>
                    <a href={App}>Men</a>
                  </li>
                  <li>
                    <a href={App}>Women</a>
                  </li>
                  <li>
                    <a href={App}>Accessories</a>
                  </li>
                  <li>
                    <a href={App}>Shoes</a>
                  </li>
                  <li>
                    <a href={App}>Denim</a>
                  </li>
                  <li>
                    <a href={App}>Dress</a>
                  </li>
                </ul>
              </div>

              <div className="footer-top-col col-2 col-large-2 col-medium-6 col-small-12">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-top-link-list">
                  <li>
                    <a href={App}>About Us</a>
                  </li>
                  <li>
                    <a href={App}>Contact Us</a>
                  </li>
                  <li>
                    <a href={App}>Term & Conditions</a>
                  </li>
                  <li>
                    <a href={App}>Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href={App}>Shipping & Delivery</a>
                  </li>
                  <li>
                    <a href={App}>Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-top-col col-2 col-large-2 col-medium-6 col-small-12">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="footer-top-link-list">
                  <li>
                    <a href={App}>Store Location</a>
                  </li>
                  <li>
                    <a href={App}>Latest News</a>
                  </li>
                  <li>
                    <a href={App}>My Account</a>
                  </li>
                  <li>
                    <a href={App}>Size Guide</a>
                  </li>
                  <li>
                    <a href={App}>FAQs 2</a>
                  </li>
                  <li>
                    <a href={App}>FAQs</a>
                  </li>
                </ul>
              </div>

              <div className="footer-top-col col-3 col-large-3 col-medium-6 col-small-12">
                <h3 className="footer-title">Newsletter Signup</h3>
                <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                <form action="#" className="form-newsletter flex">
                  <input type="email" className="col-small-7" name="email" id="email" placeholder="Your Email Address" />
                  <button className="btn btn-submit col-small-5" type="submit">Subscribe</button>
                </form>
                <ul className="payment-list flex">
                  <li className="payment-item">
                    <a href={App}>
                      <i className="fab fa-cc-visa"></i>
                    </a>
                  </li>
                  <li className="payment-item">
                    <a href={App}>
                      <i className="fab fa-cc-paypal"></i>
                    </a>
                  </li>
                  <li className="payment-item">
                    <a href={App}>
                      <i className="fab fa-cc-mastercard"></i>
                    </a>
                  </li>
                  <li className="payment-item">
                    <a href={App}>
                      <i className="fab fa-cc-amex"></i>
                    </a>
                  </li>
                  <li className="payment-item">
                    <a href={App}>
                      <i className="fab fa-cc-discover"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="copyright col-large-6 col-small-12">
                Copyright © 2021 <span className="text-cyan">Kalles</span> all rights reserved. Powered by <a href={App}>The4</a>
              </p>

              <ul className="footer-bottom-link-list flex-end col-large-6 col-small-12">
                <li><a href={App}>Shop</a></li>
                <li><a href={App}>About Us</a></li>
                <li><a href={App}>Contact</a></li>
                <li><a href={App}>Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
