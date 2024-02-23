import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';


function Gallery() {
  const [selectedYear, setSelectedYear] = useState('2022');
  const [imageUrls, setImageUrls] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const eventMapper = {
    X_MAS_DAY: 'Christmas Celebrations',
    TEACHERS_DAY: 'Teachers Day Celebrations',
    SPORTS_DAY: 'Other Events',
    CHILDRENS_DAY: 'Childrens Day Celebrations',
    FETE_DAY: 'FETE Day Celebrations',
    PONGAL_DAY: 'Pongal Celebrations',
    SCIENCE_EXPO: 'Inspire Science Fare Pictures',
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://jwivwybinj.execute-api.ap-south-1.amazonaws.com/get_programs_for_year?year=${selectedYear}`);
        setImageUrls(response.data.data || {});
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedEvent(null);
  };
 
  const handleViewAll = async (eventName) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://t70fafpx43.execute-api.ap-south-1.amazonaws.com/fetch_images_for_event?year=${selectedYear}&event=${eventName}`);
      setImageUrls({ ...imageUrls, [eventName]: response.data || [] });
      setSelectedEvent(eventName);
    } catch (error) {
      console.error('Error fetching images for event:', error);
    } finally {
      setLoading(false);
    }
    
  };
  
  const filteredEventSections = Object.entries(imageUrls).filter(([eventName, images]) => Array.isArray(images) && images.length > 0);

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="year-container">
        <label htmlFor="year-dropdown">
        <h2>Year:&nbsp;&nbsp;&nbsp;</h2>

        </label>
        <select id="year-dropdown" className="year-dropdown" onChange={handleYearChange} value={selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>

      {loading ? (
        <div className="loader" style={{ backgroundColor: '#DC0143' }}></div>
      ) : filteredEventSections.length > 0 ? (
        filteredEventSections.map(([eventName, images]) => (
          <div key={eventName} className="event-section" style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '0px' }}>
            <div className="event-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="event-heading" style={{ margin: '5px 0' }}>{eventMapper[eventName]}</h2>
              {Array.isArray(images) && images.length > 0 && (
                <button className="view-all-button" onClick={() => handleViewAll(eventName)}>
                  View All
                </button>
              )}
            </div>
    <div className="image-carousel">
  {(selectedEvent === eventName ? imageUrls[selectedEvent] : images || []).map((imageUrl, index) => (
    <div key={index} className="image-container6">
      <img
        src={imageUrl}
        alt={`Gallery ${index}`}
        className="event-image"
      />
    </div>
  ))}
</div>
          </div>
        ))
      ) : (
        <div className="no-images-message">
          <p>No images available for the selected year.</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;