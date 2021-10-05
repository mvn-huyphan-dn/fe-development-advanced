import { Header, Footer } from "./layout";
import MainTimer from "./layout/mainTimer";

function TimerPage(props) {
  let { publicFolder } = props;

  return (
    <>
      <Header
        publicFolder={publicFolder} />
        
      {/* <Main
        categoryDB={categoryDB}
        galleryDB={galleryDB}
        blogDB={blogDB}
        carouselDB={carouselDB}
        serviceDB={serviceDB}
        publicFolder={publicFolder} /> */}
      
      <MainTimer publicFolder={publicFolder} />

      <Footer publicFolder={publicFolder} />
    </>
  )
}

export default TimerPage;
