import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventClassName = isActive ? 'event-image-active' : ''

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item-container">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img
          className={`event-image ${eventClassName}`}
          src={imageUrl}
          alt="event"
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
