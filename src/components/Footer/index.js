import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className='page-footer'>
      <div className="container-full  flex-center">
        <p className="copyright">
          Copyright © 2021 <span>MLVN</span> all rights reserved. Powered by <Link to=''>HNP VN.DN</Link>
        </p>
      </div>
    </footer>
  )
}
