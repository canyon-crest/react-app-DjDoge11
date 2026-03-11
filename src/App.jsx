import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav.jsx'
import Card from './card.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

function App() {
  const [page, setPage] = useState("home");

  return (
    < >
      <Nav setPage={setPage}/>
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {page === "home" && 
        <div> 
            <Card name="Food" description="Are you hungry? I know you're hungry" />  
            <Card name="Water" description="Hydrate or Diedrate" />
            <Card name="Dehydrated Water" description="'Just add water'" />  
        </div>
      }
      <Footer />
    </>
  )
}

export default App
