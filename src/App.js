import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { MeetupListingPage } from "./pages/meetupListingPage/MeetupListingPage";
import { EventDetailPage } from "./pages/eventDetailPage/EventDetailPage";
import { useMeetup } from "./context/CreateContext";
import { ACTION_TYPE } from "./utils/constant";
export default function App() {
  const { state, dispatch } = useMeetup();
  const onSearchHandler = (e) => {
    dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value });
  };
  return (
    <>
      <div className="header">
        <h3 className="company">Meetup</h3>
        <input
          type="search"
          placeholder="Search by title and tags"
          onChange={onSearchHandler}
        />
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<MeetupListingPage />} />
        <Route path="/:id" element={<EventDetailPage />} />
      </Routes>
    </>
  );
}
