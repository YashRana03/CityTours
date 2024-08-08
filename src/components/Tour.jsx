/* eslint-disable react/prop-types */

// Tour component
export default function Tour(props) {
  // Tour is created using the data passed in from the parent App component
  return (
    <div className="tour">
      <img
        src={`/${props.info.image}`}
        alt="picture of London"
        className="tour-img"
      />
      <div className="information">
        <h3 className="country">
          <i className="fa-solid fa-location-dot ">&nbsp;&nbsp;</i>
          {props.info.country}
        </h3>
        <h1 className="city">{props.info.city}</h1>
        <h5 className="dates">{props.info.dates}</h5>
        <p className="description">{props.info.description}</p>
      </div>
    </div>
  );
}
