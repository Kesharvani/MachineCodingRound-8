import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMeetup } from "../../context/CreateContext";
import "./EventDetailPage.css";
import { EventTag } from "../../common/eventTag/EventTag";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";
import { SpeakerTile } from "../../common/speaker/SpeakerTile";
export const EventDetailPage = () => {
  const { state } = useMeetup();
  const { id } = useParams();
  const singleEvent = state.meetups?.find((item) => item.id === id);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="detailpage_container">
      <div className="left_container">
        <div>
          <h1>{singleEvent?.title}</h1>
          <p>Hosted By:</p>
          <h4>{singleEvent?.hostedBy}</h4>
        </div>
        <img
          src={singleEvent?.eventThumbnail}
          alt="thumbnail"
          height="400px"
          width="380px"
        />
        <div>
          <h2>Details:</h2>
          <p>{singleEvent?.eventDescription}</p>
        </div>
        <div>
          <h2>Additional Information:</h2>
          <div className="additional_column">
            {singleEvent?.additionalInformation?.dressCode ? (
              <div className="additional_row">
                <h4>DressCode</h4>
                <p>{singleEvent?.additionalInformation?.dressCode}</p>
              </div>
            ) : (
              ""
            )}
            {singleEvent?.additionalInformation?.dressCode ? (
              <div className="additional_row">
                <h4>Age Restrictions</h4>
                <p>{singleEvent?.additionalInformation?.ageRestrictions}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <h2>Event Tags:</h2>
          <div className="red_container">
            {singleEvent?.eventTags?.map((item) => {
              return <EventTag item={item} nameclass="red" key={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="right_container">
        <div className="venue_container">
          <div className="veneu_row">
            <BiTimeFive />
            <p>
              {singleEvent?.eventStartTime} to {singleEvent?.eventEndTime}
            </p>
          </div>
          <div className="veneu_row">
            <CiLocationOn />
            <p>{singleEvent?.location}</p>
          </div>
          <div className="veneu_row">
            {singleEvent?.isPaid && <BiRupee />}
            {singleEvent?.isPaid && <p>{singleEvent?.price}</p>}
          </div>
        </div>
        <div className="speakers_container">
          <h2 style={{ margin: "0px", marginBottom: "1rem" }}>
            Speakers({singleEvent?.speakers.length})
          </h2>
          <div className="speacker_main_container">
            {singleEvent?.speakers.length > 0 &&
              singleEvent?.speakers?.map((speaker) => {
                return <SpeakerTile speaker={speaker} key={speaker.name} />;
              })}
          </div>
        </div>
        <button className="btn" onClick={openModal}>
          RSVP
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <AiOutlineCloseCircle
            onClick={closeModal}
            className="closebtn"
            size={32}
          >
            close
          </AiOutlineCloseCircle>
          <form>
            <h2>Complete Your RSVP</h2>
            <p className="para">Fill in your person Information</p>
            <div className="user_row_field">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="user_row_field">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            {singleEvent?.isPaid ? (
              <p className="paymentpara">
                *You have to make the payment at the venue
              </p>
            ) : (
              ""
            )}
            {}
            <button className="redbtn">RSVP</button>
          </form>
        </Modal>
      </div>
    </div>
  );
};
