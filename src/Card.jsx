import './Card.css';

const Card = ({ image, title, description, url }) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url}>Read more</a>
      </div>
    </div>
  );
};

export default Card;
