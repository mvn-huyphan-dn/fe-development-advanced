import { Header, Footer } from "./layout";
import MainForm from "./layout/mainForm";

function FormPage(props) {
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
        publicFolder={publicFolder} />  */}

      <MainForm />

      <Footer publicFolder={publicFolder} />
    </>
  )
}

export default FormPage;
