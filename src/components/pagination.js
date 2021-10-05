export default function Pagination(props) {
  let { pagination, handlePageChange } = props;
  let { page, total, per_page } = pagination;
  let totalPages = Math.ceil(total / per_page)
  let pageNumbers = []
  if (totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  let pageNumberData = pageNumbers.map(e => {
    let pageClass = page === e ? 'page-active' : null
    return (
      <span
        key={`pagi-${e}`}
        className={`pagination-number ${pageClass}`}
        onClick={page === e? null : () => handlePageChange('page', e)}
      >{e}</span>
    )
  })

  return (
    <div className='pagination'>
      <button
        className='btn btn-pagi-navigation'
        onClick={() => handlePageChange(`page`, page - 1)}
        disabled={page === 1}
      >Previous</button>
      <>
        {totalPages ?
          pageNumberData
          : null
        }
      </>
      <button
        className='btn btn-pagi-navigation'
        onClick={() => handlePageChange(`page`, page + 1)}
        disabled={page === totalPages}
      >Next</button>
    </div>
  )
}
