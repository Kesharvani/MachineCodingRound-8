import { EventTile } from "../../common/eventTile/EventTile";
import { useMeetup } from "../../context/CreateContext";
import { ACTION_TYPE } from "../../utils/constant";
import "./MeetupListingPage.css";
export const MeetupListingPage = () => {
  const { state, dispatch } = useMeetup();
  const filteredBySearchTerm =
    state.searchTerm !== ""
      ? state.meetups?.filter(
          (item) =>
            item.title.toUpperCase().includes(state.searchTerm.toUpperCase()) ||
            item?.eventTags.includes(state?.searchTerm)
        )
      : state.meetups;

  const filteredByCategory =
    state.eventType === "both"
      ? filteredBySearchTerm
      : filteredBySearchTerm?.filter((item) => {
          return item?.eventType === state.eventType;
        });
  return (
    <div>
      <div className="header">
        <h1>MeetUp Event</h1>
        <select
          name="eventtype"
          id="eventtype"
          onChange={(e) =>
            dispatch({ type: ACTION_TYPE.EVENTTYPE, payload: e.target.value })
          }
        >
          <option value="">Select Event Type</option>
          <option value="both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div className="eventTile_container">
        {filteredByCategory?.map((item) => {
          return <EventTile item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
