import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Hero = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-green-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-32 bg-spice-green"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-spice-yellow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Left Side - Brand Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                {/* Logo */}
                <div className="flex items-center mb-8">
                  <img 
                    src="/Spice Trails RGB -1.png" 
                    alt="Spice Trails Logo" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <span className="text-2xl font-bold text-spice-green">SPICE TRAILS</span>
                </div>
                
                {/* Main Title */}
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-gray-800">SPICE</span><br/>
                  <span className="text-spice-green">TRAILS</span>
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-2xl font-light text-gray-600 mb-6">
                  {content.subtitle}
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {content.description}
                </p>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-8">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                  </svg>
                  <span className="text-lg">{content.location}</span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.google.com/maps?q=Spicetrails+30+Union+St+Hereford+HR1+2BT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-spice-green text-spice-green hover:bg-spice-green hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-center"
                  >
                    Visit Us Today
                  </a>
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-6 mt-6 pl-2">
                  <a 
                    href={content.socialLinks?.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-spice-green transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a 
                    href={content.socialLinks?.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-spice-green transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a 
                    href={content.socialLinks?.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-spice-green transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Side - Product Categories Mosaic */}
              <div className="bg-gradient-to-br from-gray-50 via-green-50 to-yellow-50 p-8 lg:p-12 relative overflow-hidden">
                {/* Enhanced Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-spice-green to-spice-dark-green opacity-5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-spice-yellow to-orange-300 opacity-5 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">What We Offer</h3>
                  <p className="text-gray-600 text-sm">Fresh products for your everyday needs</p>
                </div>
                
                <div className="relative z-10 grid grid-cols-3 gap-3 h-full">
                  {/* Spices & Herbs - Red Quarter Circle */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-tl-full h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🌶️</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Spices</p>
                  </div>

                  {/* Fresh Produce - Light Green Rounded Square */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🥬</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Produce</p>
                  </div>

                  {/* Meat & Seafood - Yellow Rounded Square */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🥩</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Meat</p>
                  </div>

                  {/* Household - Light Green Rounded Square */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🏠</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Household</p>
                  </div>

                  {/* Snacks & Beverages - Blue Circle */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-full h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🥤</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Beverages</p>
                  </div>

                  {/* Dairy - Light Yellow Rounded Square */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🥛</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Dairy</p>
                  </div>

                  {/* Bakery - Orange Circle */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-full h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🍞</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Bakery</p>
                  </div>

                  {/* Frozen Foods - Light Blue Rounded Square */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">❄️</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Frozen</p>
                  </div>

                  {/* Fish & Seafood - Pink Circle */}
                  <div className="col-span-1 row-span-1 group">
                    <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-full h-28 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🐟</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center font-medium">Fish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
