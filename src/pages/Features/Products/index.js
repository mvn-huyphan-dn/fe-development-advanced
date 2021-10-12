import { useState, useEffect } from "react"
import { Loading, SectionTitle } from "../../../components"
import ProductItem from "../../../components/ProductItem"
import { url } from "../../../core/constants"

export default function Products() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    // const paramsString = queryString.stringify(filters)
    // fetch(`${url}?${paramsString}`)
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json)
        // setPagination({
        //   page: json.page,
        //   total: json.total,
        //   per_page: json.per_page
        // })
        return (() => {
          setProducts([])
        })
      })
  }, [])

  let productList = products.map(e => {
    return (
      <ProductItem key={e.id} {...e} />
    )
  })

  return (
    <>
      <section className='section-products'>
        <div className='container flex-column flex-center'>
          <SectionTitle
            title={'Product List'}
          />
          {products.length === 0 ?
            <div className='flex-center' style={{ 'minHeight': '75vh' }}>
              <Loading />
            </div>
            :
            <ul className='product-list row'>
              {productList}
            </ul>
          }
        </div>
      </section>
    </>
  )
}
