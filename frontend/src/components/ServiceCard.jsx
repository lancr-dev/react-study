import '../styles/service-card.css';

function ServiceCard({ title, description }) {
  return (
    <article className='service-card'>
      <h2>{title}</h2>

      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
