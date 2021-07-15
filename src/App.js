import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function App() {
  const url = "https://reqres.in/img/faces/7-image.jpg";
  const name = "Michael Lawson";

  return (
    <div>
      <Avatar url={url} name={name} />
      <UserInfo name={name} />
    </div>
  );
}

export default App;
