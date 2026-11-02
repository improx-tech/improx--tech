function ServiceCard({ icon, title, description }) {
  return (
    <article className="card service-card reveal">
      <i className={`fa-solid ${icon}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
