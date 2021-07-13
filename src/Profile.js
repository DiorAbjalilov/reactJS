import ProfileCard from "./ProfileCard";
import "./Profile.css";

function Profile({ users }) {
  const profil = users.map((user) => {
    return <ProfileCard user={user} />;
  });

  return <div className="App">{profil}</div>;
}

export default Profile;
