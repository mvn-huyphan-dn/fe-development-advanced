import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { handleFavorite } from "../../features/favorite/favoriteSlice"

export default function ProductItem(props) {
  let { id, title, image, price, category } = props

  const favorite = useSelector((state) => state.favorite.favoriteIds)
  const dispatch = useDispatch()

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
      <div className='btn-group flex-center'>
        <button className='btn btn-add-cart'>Add to Cart</button>
        {favorite.includes(id) ?
          <i
            className="las la-heart la-2x icon-heart-fill fav-item-btn"
            onClick={() => dispatch(handleFavorite(id))}></i>
          :
          <i
            className="lar la-heart la-2x icon-heart fav-item-btn"
            onClick={() => dispatch(handleFavorite(id))}></i>
        }
      </div>
    </li>
  )
}
