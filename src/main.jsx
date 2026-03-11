import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './nav.jsx'
import Card from './card.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Nav />
    <Card name="Food" description="Are you hungry? I know you're hungry" />
    <Card name="Water" description="Hydrate or Diedrate" />
    <Card name="Dehydrated Water" description="'Just add water'" />
    <Footer /> */}
    <App />
  </StrictMode>,
)
