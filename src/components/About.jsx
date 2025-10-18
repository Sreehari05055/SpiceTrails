const About = ({ content = {} }) => {
  // Default values to prevent errors if content is undefined
  const { 
    title = 'About Us', 
    description = 'Learn more about our story and what makes us special.',
    features = [
      'Quality Products',
      'Fresh Ingredients',
      'Authentic Taste',
      'Friendly Service'
    ]
  } = content;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-spice-green bg-opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-spice-yellow bg-opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-spice-green to-spice-dark-green bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          {/* Features Grid - Only show if features exist */}
          {features && features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-spice-green to-spice-dark-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-spice-green transition-colors duration-300">
                    {feature}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-spice-green to-spice-dark-green rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
