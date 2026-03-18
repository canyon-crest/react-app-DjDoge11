import "./Contact.css"
import { useState } from 'react'

function Contact() {
  const [apiData, setApiData] = useState('');
  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setApiData(data.message); // "message" is the field of the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };


  const [catUrl, setCatUrl] = useState("");

  // 2. Define the function to fetch a new image
  const fetchCat = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      
      // The API returns an array, so we access the first item [0]
      setCatUrl(data[0].url); 
    } catch (error) {
      console.error("Error fetching the cat image:", error);
    }
  }

  
    return (
      <div id="cntct">
        <h1>Contact Us</h1>
        <p>Learn more about how to contact our company here.</p>
        <p>We are very hard to contact at the momemet, but the store works perfectly well!</p>
        <p>We are out of town, and therefore you can't contact us at the moment</p>
        <p>Instead, here is a dog or cat picture!</p>
        <button onClick={fetchDogImage}>Get Dog!</button>
        {apiData && <img src={apiData} alt="Random Dog" />}
        <button onClick={fetchCat} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Cat!
      </button>

      <div style={{ marginTop: '20px' }}>
        {catUrl && (
          <img 
            src={catUrl} 
            alt="A cute cat" 
            style={{ maxWidth: '100%', borderRadius: '10px' }} 
          />
        )}
      </div>
      </div>
    );
}
export default Contact