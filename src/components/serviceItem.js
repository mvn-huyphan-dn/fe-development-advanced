export default function ServiceItem(props) {
  return (
    <li key={props.id} className="service-item flex col-3 col-large-3 col-medium-6 col-small-12">
      <i className={props.icon}></i>
      <div className="service-info">
        <h3 className="service-title">{props.title}</h3>
        <p className="service-description">{props.description}</p>
      </div>
    </li>
  )
}
