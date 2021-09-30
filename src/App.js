import './App.css';
import FormPage from './pages/formPage';
// import HomePage from './pages/homepage';

function App() {
  let publicFolder = process.env.PUBLIC_URL + './assets/'
  // let categoryDB = [
  //   {
  //     id: 1,
  //     name: 'Img Category 1',
  //     src: publicFolder + './images/cat-bn-01.jpg',
  //     altText: 'Img Category 1'
  //   },
  //   {
  //     id: 2,
  //     name: 'Img Category 2',
  //     src: publicFolder + './images/cat-bn-02.jpg',
  //     altText: 'Img Category 2'
  //   },
  //   {
  //     id: 3,
  //     name: 'Img Category 3',
  //     src: publicFolder + './images/cat-bn-03.jpg',
  //     altText: 'Img Category 3'
  //   },
  //   {
  //     id: 4,
  //     name: 'Img Category 4',
  //     src: publicFolder + './images/cat-bn-04.jpg',
  //     altText: 'Img Category 4'
  //   }
  // ]

  // let galleryDB = [
  //   {
  //     id: 1,
  //     src: publicFolder + './images/bg-pin-01.jpg',
  //     position: ['position-19-67']
  //   },
  //   {
  //     id: 2,
  //     src: publicFolder + './images/bg-pin-02.jpg',
  //     position: ['position-50-50', 'position-33-90']
  //   },
  //   {
  //     id: 3,
  //     src: publicFolder + './images/bg-pin-03.jpg',
  //     position: ['position-80-78']
  //   },
  //   {
  //     id: 4,
  //     src: publicFolder + './images/bg-pin-04.jpg',
  //     position: ['position-50-50']
  //   },
  //   {
  //     id: 5,
  //     src: publicFolder + './images/bg-pin-01.jpg',
  //     position: ['position-19-67']
  //   },
  //   {
  //     id: 6,
  //     src: publicFolder + './images/bg-pin-02.jpg',
  //     position: ['position-50-50', 'position-33-90']
  //   },
  //   {
  //     id: 7,
  //     src: publicFolder + './images/bg-pin-03.jpg',
  //     position: ['position-80-78']
  //   },
  //   {
  //     id: 8,
  //     src: publicFolder + './images/bg-pin-04.jpg',
  //     position: ['position-50-50']
  //   },
  //   {
  //     id: 9,
  //     src: publicFolder + './images/bg-pin-01.jpg',
  //     position: ['position-19-67']
  //   },
  //   {
  //     id: 10,
  //     src: publicFolder + './images/bg-pin-02.jpg',
  //     position: ['position-50-50', 'position-33-90']
  //   },
  //   {
  //     id: 11,
  //     src: publicFolder + './images/bg-pin-03.jpg',
  //     position: ['position-80-78']
  //   },
  //   {
  //     id: 12,
  //     src: publicFolder + './images/bg-pin-04.jpg',
  //     position: ['position-50-50']
  //   }
  // ]

  // let blogDB = [
  //   {
  //     id: 1,
  //     title: 'Spring - Summer Trending 2020',
  //     imgUrl: publicFolder + "./images/blog-01.jpg",
  //     author: 'admin',
  //     time: 'April 6, 2020',
  //     description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
  //     altText: 'blog img'
  //   },
  //   {
  //     id: 2,
  //     title: 'The Easiest Way to Break Out on Top',
  //     imgUrl: publicFolder + "./images/blog-02.jpg",
  //     author: 'admin',
  //     time: 'April 6, 2020',
  //     description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
  //     altText: 'blog img'
  //   },
  //   {
  //     id: 3,
  //     title: 'Style for couple in Weeding season',
  //     imgUrl: publicFolder + "./images/blog-03.jpg",
  //     author: 'admin',
  //     time: 'April 6, 2020',
  //     description: 'Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...',
  //     altText: 'blog img'
  //   }
  // ]

  // let carouselDB = [
  //   {
  //     id: 1,
  //     imgUrl: publicFolder + "./images/ins1_1.jpg",
  //     altText: 'carousel img',
  //     position: ['position-39-39']
  //   },
  //   {
  //     id: 2,
  //     imgUrl: publicFolder + "./images/ins1_2.jpg",
  //     altText: 'carousel img',
  //     position: ['position-50-50']
  //   },
  //   {
  //     id: 3,
  //     imgUrl: publicFolder + "./images/ins1_4.jpg",
  //     altText: 'carousel img',
  //     position: ['position-32-67', 'position-98-44']
  //   },
  //   {
  //     id: 4,
  //     imgUrl: publicFolder + "./images/ins1_5.jpg",
  //     altText: 'carousel img',
  //     position: ['position-28-79']
  //   },
  //   {
  //     id: 5,
  //     imgUrl: publicFolder + "./images/ins1_6.jpg",
  //     altText: 'carousel img',
  //     position: ['position-48-66']
  //   },
  //   {
  //     id: 6,
  //     imgUrl: publicFolder + "./images/ins1_8.jpg",
  //     altText: 'carousel img',
  //     position: ['position-60-42']
  //   }
  // ]

  // let serviceDB = [
  //   {
  //     id: 1,
  //     icon: 'fas fa-car',
  //     title: 'FREE SHIPPING',
  //     description: 'Free shipping on all US order or order above $100'
  //   },
  //   {
  //     id: 2,
  //     icon: 'far fa-life-ring',
  //     title: 'SUPPORT 24/7',
  //     description: 'Contact us 24 hours a day, 7 days a week'
  //   },
  //   {
  //     id: 3,
  //     icon: 'fas fa-redo-alt',
  //     title: '30 DAYS RETURN',
  //     description: 'Simply return it within 30 days for an exchange.'
  //   },
  //   {
  //     id: 4,
  //     icon: 'fas fa-user-shield',
  //     title: '100% PAYMENT SECURE',
  //     description: 'We ensure secure payment with PEV'
  //   }
  // ]

  return (
    <div className="App">

      {/* <HomePage
        publicFolder={publicFolder}
        categoryDB={categoryDB}
        galleryDB={galleryDB}
        blogDB={blogDB}
        carouselDB={carouselDB}
        serviceDB={serviceDB} /> */}

      <FormPage
        publicFolder={publicFolder}
      />

    </div>
  );
}

export default App;
