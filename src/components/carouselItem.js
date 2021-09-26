export default function CarouselItem(props) {
  return (
    <li key={props.id} className="carousel-item col-2 col-large-2 col-medium-3 col-small-6">
      <div className="div-image-container">
        <img src={props.imgUrl} alt={props.altText} />
      </div>
      {props.position.map((a, index) => {
        let tempClass = `btn btn-circle ${a}`
        return (
          <span key={index} className={tempClass}>{index + 1}</span>
        )
      })}
    </li>
  )
}
