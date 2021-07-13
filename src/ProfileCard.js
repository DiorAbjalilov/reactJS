import Avatar from "./Avatrar";
import UserProfile from "./UserProfile";
import "./ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <div className="profile">
      <Avatar name={`${user.first_name} ${user.last_name}`} url={user.avatar} />
      <UserProfile
        name={`${user.first_name} ${user.last_name}`}
        email={user.email}
      />
    </div>
  );
}

export default ProfileCard;
