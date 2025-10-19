import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ content = {} }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container-custom px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Spice Trails RGB -1.png" 
                alt="Spice Trails Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold text-white">Spice Trails</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for authentic global groceries in Hereford
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="text-gray-400 hover:text-spice-green text-sm transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="text-gray-400 hover:text-spice-green text-sm transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="text-gray-400 hover:text-spice-green text-sm transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps?q=Spicetrails+30+Union+St+Hereford+HR1+2BT" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-spice-green text-sm transition-colors duration-200"
                >
                  Find Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4 text-base">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-spice-green mt-1 mr-2 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps?q=Spicetrails+30+Union+St+Hereford+HR1+2BT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-spice-green text-sm"
                >
                  30 Union Street, Hereford, HR1 2BT
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-spice-green mr-2" />
                <a href="tel:01432123456" className="text-gray-400 hover:text-spice-green text-sm">+447741139030</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-spice-green mr-2" />
                <a href="mailto:quickspicetrails@gmail.com" className="text-gray-400 hover:text-spice-green text-sm">quickspicetrails@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-spice-green mr-2" />
                <span className="text-gray-400 text-sm">Mon-Sun: 8AM - 10PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-medium mb-4 text-base">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/61579647209202/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-spice-green transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/spice_trails_ltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-spice-green transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/447741139030" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-spice-green transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Spice Trails. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
