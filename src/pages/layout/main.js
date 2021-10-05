import {
  BlogItem,
  CarouselItem,
  CategoryItem,
  GalleryItem,
  ServiceItem,
  SectionTitle
} from "../../components"

function Main(props) {
  let { categoryDB,
    galleryDB,
    blogDB,
    carouselDB,
    serviceDB,
    publicFolder } = props

  let categoriesData = categoryDB.map((e) => {
    return (
      <CategoryItem key={e.id} e={e} />
    )
  })

  let galleriesData = galleryDB.map((e) => {
    return (
      <GalleryItem key={e.id} e={e} />
    )
  })

  let carouselData = carouselDB.map((e) => {
    return (
      <CarouselItem key={e.id} {...e} />
    )
  })

  let blogsData = blogDB.map((e) => {
    return (
      <BlogItem key={e.id} e={e} />
    )
  })

  let serviceData = serviceDB.map((e) => {
    return (
      <ServiceItem key={e.id} {...e} />
    )
  })

  return (
    <main className="page-main">

      <section className="section-banner">
        <a href="#0">
          <img src={publicFolder + './images/loobook.jpg'} alt="banner img" />
        </a>
        <div className="banner-content flex-column txt-center">
          <h1 className="banner-title">CLEARANCE SALE OFF TO 70%</h1>
          <h2 className="banner-sub-title">Spring Collection 2021</h2>
          <a href="#0" className="btn btn-outline">Shop Now</a>
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
              <a href="#0">
                <img src={publicFolder + "./images/bn-01.jpeg"} alt="promotion img" />
              </a>
              <div className="promotion-content">
                <h5>VIEW COLLECTIONS</h5>
                <h2>LOOKBOOK</h2>
                <p>your world of fashion in numbers</p>
              </div>
            </li>

            <li className="promotion-item col-4 col-medium-4 col-small-12">
              <a href="#0">
                <img src={publicFolder + "./images/pr-big-24.jpg"} alt="promotion img" />
              </a>
              <div className="promotion-item-top">
                <i className="far fa-heart"></i>
                <span className="discount-percent-tag flex-center">-34%</span>
              </div>
              <div className="promotion-item-middle">
                <ul className="promotion-action flex-column">
                  <li>
                    <a href="#0" className="btn btn-quick-view">
                      <i className="icon icon-eye"></i>
                      <span>Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="btn btn-quick-shop">
                      <i className="icon icon-cart"></i>
                      <span>Quick Shop</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="promotion-item-bottom">
                <div className="promotion-item-product">
                  <h3 className="promotion-product-name">
                    <a href="#0">
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
              <a href="#0">
                <img src={publicFolder + "./images/pr-big-26.jpg"} alt="promotion img" />
              </a>
              <div className="promotion-content flex-column txt-center">
                <h3>MEN COLLECTION</h3>
                <h4>SALE 70%</h4>
                <a href="#0" className="btn btn-outline">Shop Now</a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-instagram-gallery">
        <SectionTitle
          title={'INSTAGRAM SHOP'}
          description={'Make your instagram shop'} />
        <ul className="gallery-item-list row">
          {galleriesData}
        </ul>
      </section>

      <section className="section-blog">
        <div className="container">
          <SectionTitle
            title={'LASTS FROM BLOG'}
            description={'The freshest and most exciting news'} />
          <ul className="blog-list row">
            {blogsData}
          </ul>
        </div>
      </section>

      <section className="section-instagram-carousel">
        <SectionTitle
          title={'@ FOLLOW US ON INSTAGRAM'} />
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
  )
}

export default Main;
