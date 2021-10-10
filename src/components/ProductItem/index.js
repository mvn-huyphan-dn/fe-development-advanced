import { Link } from "react-router-dom"

export default function ProductItem(props) {
  let { id, title, image, price, category } = props
  return (
    <li className='product-item flex-column col-large-4'>
      <Link to={`/products/${id}`}>
        <div className="div-image-container txt-center">
          <img src={image} alt={title} />
        </div>
        <p className='product-category'>#{category}</p>
        <h5 className='product-title'>{title}</h5>
      </Link>
      <h6 className='product-price'>$ {Number(price).toFixed(2)}</h6>
      <button className='btn btn-add-cart'>Add to Cart</button>
    </li>
  )
}
