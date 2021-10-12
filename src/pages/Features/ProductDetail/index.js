import { useEffect, useState } from "react";
import { url } from "../../../core/constants";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components";

import { useSelector, useDispatch } from "react-redux"
import { handleFavorite } from "../../../features/favorite/favoriteSlice";

export default function ProductDetail() {
  let params = useParams();

  const [product, setProduct] = useState({})
  const favorite = useSelector((state) => state.favorite.favoriteIds)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${url}/${params.productId}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json)
      })
  }, [params])

  return (
    <>
      {Object.keys(product).length === 0 || !product ?
        <div className='flex-center' style={{ 'minHeight': '75vh' }}>
          <Loading />
        </div>
        :
        <section className='section-product-detail flex-center'>
          <div className="container-full">
            <div className="card">
              <div className="row">
                <div className="col-large-4 card-left">
                  <div className="product-img-container">
                    <img src={product.image} alt="Product Img" />
                    {favorite.includes(product.id) ?
                      <i
                        className="las la-heart la-2x icon-heart-fill fav-item-btn"
                        onClick={() => dispatch(handleFavorite(product.id))}></i>
                      :
                      <i
                        className="lar la-heart la-2x icon-heart fav-item-btn"
                        onClick={() => dispatch(handleFavorite(product.id))}></i>
                    }
                  </div>
                </div>
                <div className="col-large-8">
                  <div className="card-body flex-column">
                    <p className="product-category">#{product.category}</p>
                    <h2 className="product-name">{product.title}</h2>
                    <h5 className='product-pr flex-space-between'>
                      <span className="product-price">${Number(product.price).toFixed(2)}</span>
                      <span className="product-review">({product.rating.rate}<i className="las la-star la-lx"></i>, {product.rating.count} reviews)</span>
                    </h5>
                    <p className="product-description">{product.description}</p>
                    <div className='btn-group flex-space-between'>
                      <button className='btn btn-round btn-buy-now'>Buy Now</button>
                      <button className='btn btn-round btn-add-to-cart'>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}
