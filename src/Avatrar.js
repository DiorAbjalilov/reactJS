import "./Avatar.css";

function Avatar({ url, name }) {
  return (
    <img
      className="profile-avatar"
      width="128"
      height="128"
      alt={name}
      src={url}
    />
  );
}
export default Avatar;
