import { HeaderBanner } from "../components";
import { Header, Footer, Main } from "./layout";

function HomePage(props) {
  let { publicFolder, categoryDB, galleryDB, blogDB, carouselDB, serviceDB } = props;
  return (
    <>
      <HeaderBanner />
      <Header
        publicFolder={publicFolder} />
        
      <Main
        categoryDB={categoryDB}
        galleryDB={galleryDB}
        blogDB={blogDB}
        carouselDB={carouselDB}
        serviceDB={serviceDB}
        publicFolder={publicFolder} />

      <Footer publicFolder={publicFolder} />
    </>
  )
}

export default HomePage;
