const Card = ({ contact }) => {
  console.log(contact);
  return (
    <div className="card">
      <h3>{contact.heading}</h3>
      <p>{contact.body}</p>
      <button>{contact.button}</button>
    </div>
  );
};

export default Card;
