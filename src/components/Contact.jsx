const Contact = ({ content = {} }) => {
  // Default values to prevent errors if content is undefined
  const {
    title = 'Visit Us',
    address = '30 Union Street, Hereford, HR1 1BT',
    phone = '01432 123456',
    email = 'quickspicetrails@gmail.com',
    hours = 'Mon-Sun 8AM-10PM'
  } = content;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Come visit us at our convenient location in Hereford
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-spice-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-spice-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700 text-lg">{address}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-spice-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-spice-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700 text-lg">{phone}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-spice-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-spice-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700 text-lg">{email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Opening Hours</h3>
              <div className="space-y-4">
                {hours.split('\n').map((time, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{time}</span>
                  </div>
                ))}
              </div>
              
              {/* Google Maps Link */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h4>
                <a 
                  href="https://www.google.com/maps?q=Spice+trails+30+Union+St+Hereford+HR1+2BT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 group"
                >
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 group-hover:text-spice-green mx-auto mb-2 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                    </svg>
                    <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200">Click to open in Google Maps</p>
                    <p className="text-sm text-gray-400 mt-1">30 Union Street, Hereford, HR1 1BT</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
