import "./EventTag.css";
export const EventTag = ({ item, nameclass }) => {
  return <div className={`tag ${nameclass}`}>{item}</div>;
};
