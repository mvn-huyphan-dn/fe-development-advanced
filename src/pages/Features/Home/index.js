import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/andy-holmes-fWn5B2aKjYA-unsplash.jpg"

export default function Home() {
  return (
    <>
      <section className='section-banner'>
        <img src={bannerImg} alt="banner img" />

        <Link to='/products'>
          <button className='btn btn-round'>Go to Products</button>
        </Link>
      </section>
    </>
  )
}
