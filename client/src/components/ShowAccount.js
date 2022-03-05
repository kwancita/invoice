import "./show.css";

function ShowAccount({ currentUser, onClick }) {
  const { name, email, phone_number, address, company, logo } = currentUser;
  return (
    <div className="s-div">
      <div className="s-left">
        <img src={logo} alt="" className="s-logo" />
      </div>
      <div className="s-right">
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phone_number}</p>
        <button className="s-btn" onClick={(e) => onClick(e)}>Edit</button>
      </div>
    </div>
  );
}

export default ShowAccount;
