import ServiceCard from '../components/ServiceCard';
import '../styles/services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Delivery',
      description:
        'Fast and reliable delivery service for customers across the city.',
    },
    {
      id: 2,
      title: 'Installation',
      description:
        'Professional installation services provided by experienced technicians.',
    },
    {
      id: 3,
      title: 'Maintenance',
      description:
        'Routine maintenance to keep your products operating efficiently.',
    },
    {
      id: 4,
      title: 'Consultation',
      description:
        'Expert recommendations to help you choose the best solution.',
    },
    {
      id: 5,
      title: 'Customer Support',
      description:
        'Friendly support available to answer questions and resolve issues.',
    },
    {
      id: 6,
      title: 'Warranty',
      description: 'Comprehensive warranty services for eligible products.',
    },
  ];

  return (
    <main>
      <section className='services'>
        <div className='services-header'>
          <h1>Our Services</h1>

          <p>
            These cards are rendered dynamically using JavaScript's
            <strong> map()</strong> method.
          </p>
        </div>

        <div className='services-grid'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
