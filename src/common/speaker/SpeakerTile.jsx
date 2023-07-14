import "./SpeakerTile.css";
export const SpeakerTile = ({ speaker }) => {
  return (
    <div className="speaker_container">
      <img
        src={speaker?.image}
        alt="speakerImage"
        width="60px"
        height="60px"
        className="img"
      />
      <h4>{speaker?.name}</h4>
      <p>{speaker?.designation}</p>
    </div>
  );
};
