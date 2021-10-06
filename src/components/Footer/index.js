import {
  FooterTopCol2,
  PaymentItem,
  SocialItem
} from "../../components"

function Footer(props) {
  let { publicFolder } = props
  let socialDB = [
    {
      id: 1,
      url: "#0",
      icon: "fab fa-facebook-f"
    },
    {
      id: 2,
      url: "#0",
      icon: "fab fa-twitter"
    },
    {
      id: 3,
      url: "#0",
      icon: "fab fa-instagram"
    },
    {
      id: 4,
      url: "#0",
      icon: "fab fa-linkedin-in"
    },
    {
      id: 5,
      url: "#0",
      icon: "fab fa-pinterest-p"
    }
  ]

  let paymentDB = [
    {
      id: 1,
      url: "#0",
      icon: "fab fa-cc-visa"
    },
    {
      id: 2,
      url: "#0",
      icon: "fab fa-cc-paypal"
    },
    {
      id: 3,
      url: "#0",
      icon: "fab fa-cc-mastercard"
    },
    {
      id: 4,
      url: "#0",
      icon: "fab fa-cc-amex"
    },
    {
      id: 5,
      url: "#0",
      icon: "fab fa-cc-discover"
    }
  ]

  let footerTopCol2DB = [
    {
      id: 1,
      title: 'Categories',
      item: [
        {
          id: 1,
          url: "#0",
          name: 'Men'
        },
        {
          id: 2,
          url: "#0",
          name: 'Women'
        },
        {
          id: 3,
          url: "#0",
          name: 'Accessories'
        },
        {
          id: 4,
          url: "#0",
          name: 'Shoes'
        },
        {
          id: 5,
          url: "#0",
          name: 'Denim'
        },
        {
          id: 6,
          url: "#0",
          name: 'Dress'
        }
      ]
    },
    {
      id: 2,
      title: 'Information',
      item: [
        {
          id: 1,
          url: "#0",
          name: 'About Us'
        },
        {
          id: 2,
          url: "#0",
          name: 'Contact Us'
        },
        {
          id: 3,
          url: "#0",
          name: 'Term & Conditions'
        },
        {
          id: 4,
          url: "#0",
          name: 'Returns & Exchanges'
        },
        {
          id: 5,
          url: "#0",
          name: 'Shipping & Delivery'
        },
        {
          id: 6,
          url: "#0",
          name: 'Privacy Policy'
        }
      ]
    },
    {
      id: 3,
      title: 'Useful Links',
      item: [
        {
          id: 1,
          url: "#0",
          name: 'Store Location'
        },
        {
          id: 2,
          url: "#0",
          name: 'Latest News'
        },
        {
          id: 3,
          url: "#0",
          name: 'My Account'
        },
        {
          id: 4,
          url: "#0",
          name: 'Size Guide'
        },
        {
          id: 5,
          url: "#0",
          name: 'FAQs 2'
        },
        {
          id: 6,
          url: "#0",
          name: 'FAQs'
        }
      ]
    }
  ]

  let socialData = socialDB.map((e) => {
    return (
      <SocialItem key={e.id} e={e} />
    )
  })

  let paymentData = paymentDB.map((e) => {
    return (
      <PaymentItem key={e.id} e={e} />
    )
  })

  return (
    <footer className="page-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-top-col col-3 col-large-3 col-medium-6 col-small-12">
              <a href="#0" className="footer-logo">
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
                  <span> <a href="#0">contact@company.com</a></span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <span>+001 2233 456</span>
                </li>
              </ul>
              <ul className="social-list flex">
                {socialData}
              </ul>
            </div>

            {footerTopCol2DB.map((e) => {
              return (
                <FooterTopCol2 key={e.id} data={e} />
              )
            })}

            <div className="footer-top-col col-3 col-large-3 col-medium-6 col-small-12">
              <h3 className="footer-title">Newsletter Signup</h3>
              <p>Subscribe to our newsletter and get 10% off your first purchase</p>
              <form action="#" className="form-newsletter flex">
                <input type="email" className="col-small-7" name="email" id="email" placeholder="Your Email Address" />
                <button className="btn btn-submit col-small-5" type="submit">Subscribe</button>
              </form>
              <ul className="payment-list flex">
                {paymentData}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="copyright col-large-6 col-small-12">
              Copyright © 2021 <span className="text-cyan">Kalles</span> all rights reserved. Powered by <a href="#0">The4</a>
            </p>

            <ul className="footer-bottom-link-list flex-end col-large-6 col-small-12">
              <li><a href="#0">Shop</a></li>
              <li><a href="#0">About Us</a></li>
              <li><a href="#0">Contact</a></li>
              <li><a href="#0">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
