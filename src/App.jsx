import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [content] = useState({
    hero: {
      subtitle: 'Your Local Indian Grocery Store',
      description: 'Discover authentic Indian spices, fresh produce, and more at our family-owned store in Hereford.',
      location: 'Hereford, UK'
    },
    about: {
      title: 'About Spice Trails',
      description: 'Welcome to Spice Trails, your one-stop shop for authentic Indian groceries and ingredients. We take pride in bringing you the finest selection of spices, fresh produce, and specialty items to bring the authentic taste of India to your kitchen.'
    },
    contact: {
      title: 'Visit Us',
      address: '30 Union Street, Hereford, HR1 1BT',
      phone: '01432 123456',
      email: 'quickspicetrails@gmail.com',
      hours: 'Mon-Sun 8AM-10PM'
    },
    footer: {
      copyright: '© 2023 Spice Trails. All rights reserved.'
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