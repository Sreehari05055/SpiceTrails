import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [content] = useState({
    hero: {
      subtitle: 'Fresh Finds Daily',
      description: 'Discover premium spices, fresh produce, and specialty groceries at our family-owned store in Hereford, bringing authentic global flavors straight to your kitchen.',
      location: 'Hereford, UK',
      socialLinks: {
        facebook: 'https://facebook.com/61579647209202/',
        instagram: 'https://instagram.com/spice_trails_ltd',
        whatsapp: 'https://wa.me/447741139030'
      }
    },
    about: {
      title: 'About Spice Trails',
      description: 'Welcome to Spice Trails, your one-stop shop for authentic global groceries. We take pride in bringing you the finest selection of spices, fresh produce, and specialty items from around the world, so you can experience diverse flavors and traditions right in your kitchen.'
    },
    contact: {
      title: 'Visit Us',
      address: '30 Union Street, Hereford, HR1 2BT',
      phone: '+447741139030',
      email: 'quickspicetrails@gmail.com',
      hours: 'Mon-Sun 8AM-10PM'
    },
    footer: {
      copyright: '© 2025 Spice Trails. All rights reserved.'
    }
  })

  return (
    <div className="min-h-screen bg-white">
      <Hero content={content.hero} />
      <About content={content.about} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </div>
  )
}

export default App