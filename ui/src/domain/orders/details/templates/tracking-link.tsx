export const TrackingLink = ({ trackingLink }) => {
  if (trackingLink.url) {
    return (
      <a style={{ textDecoration: "none" }} target="_blank" href={trackingLink.url} rel="noreferrer">
        <div className="text-orange-60 ml-2">{trackingLink.tracking_number} </div>
      </a>
    );
  } else {
    return <span className="text-orange-60 ml-2">{trackingLink.tracking_number} </span>;
  }
};
