import Card from "./Card";

const CardContent = () => {
  return (
    <div className="card-content">
      <Card
        contact={{
          heading: "First Service",
          body: "This is the body of the first service card",
          button: "Book an appointment for the first service",
        }}
      />
      <Card
        contact={{
          heading: "Second Service",
          body: "This is the body of the second service card",
          button: "Book an appointment for the second service",
        }}
      />
      <Card
        contact={{
          heading: "Third Service",
          body: "This is the body of the Third service card",
          button: "Book an appointment for the Third service",
        }}
      />
    </div>
  );
};

export default CardContent;
