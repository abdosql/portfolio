const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Creating responsive and dynamic websites using modern technologies.' },
    { id: 2, title: 'Backend Development', description: 'Building robust server-side applications with Symfony and PHP.' },
    { id: 3, title: 'API Development', description: 'Designing and implementing RESTful APIs using API Platform.' },
    { id: 4, title: 'Database Design', description: 'Creating efficient and scalable database structures for web applications.' },
    { id: 5, title: 'Full Stack Development', description: 'Developing end-to-end solutions with both frontend and backend expertise.' },
    { id: 6, title: 'AI Integration', description: 'Incorporating AI technologies into web applications for enhanced functionality.' },
  ]

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-white/90 dark:bg-[#121212]/90 z-0"></div>
      <div className="relative z-10 container mx-auto py-12 px-4">
        <h1 className="h1 mb-8 text-center xl:text-left">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-gray-100/80 dark:bg-[#1e1e1e]/80 p-6 rounded-lg">
              <h3 className="h3 mb-4 text-[rgb(255,59,63)]">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services