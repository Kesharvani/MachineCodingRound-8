import "./EventTile.css";
import { useNavigate } from "react-router-dom";
import { EventTag } from "../eventTag/EventTag";

export const EventTile = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="event_tile_container"
        onClick={() => navigate(`/${item.id}`)}
      >
        <img
          src={item?.eventThumbnail}
          alt="eventthumbnail"
          width="200px"
          height="180px"
        />
        <div className="tag_container">
          <EventTag item={item?.eventType} />
        </div>
      </div>
      <div>
        <p>{item?.eventStartTime}</p>
        <h3 className="title">{item?.title}</h3>
      </div>
    </div>
  );
};
