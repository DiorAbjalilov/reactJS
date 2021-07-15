function Avatar({ name, url }) {
  return (
    <div>
      <img width="128" height="128" src={url} alt={name} />
    </div>
  );
}

export default Avatar;
