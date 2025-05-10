
import SocialShare from '../components/SocialShare';
import React, { useState } from 'react';
import './About.css';
// import SocialShare from '../components/SocialShare';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const About = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const chooseItems = [
    {
      title: "Expertise",
      content: "Our team of experienced and knowledgeable guides is dedicated to ensuring that you have a memorable and spiritual experience."
    },
    {
      title: "Customized Packages",
      content: "We tailor our packages to meet the unique requirements of each individual, ensuring that your journey is both spiritually enriching and hassle-free."
    },
    {
      title: "Affordable Prices",
      content: "We believe in providing value for your money. Our packages are designed to be accessible to all, regardless of your budget."
    },
    {
      title: "Quality Services",
      content: "We prioritize quality in everything we do. Our commitment to excellence ensures that your journey is not only spiritual but also memorable."
    },
    {
      title: "Customer Satisfaction",
      content: "Your satisfaction is our top priority. We strive to exceed your expectations and make your pilgrimage experience a memorable one."
    },
    {
      title: "Trusted Network",
      content: "Strong partnerships with reliable service providers to ensure quality and comfort."
    }
  ];

  return (
    <div className="about-container">
      <div className="about">
        <div className="about-top">
          <h1 className="">
         About Us
          </h1>
        </div>
        <div className="abt-content">
          {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
          <div className="abt-info">
            <h2>Welcome to our Hajj and Umrah tour Services !</h2>
            <p>
            Your Trusted Partner in Spiritual Journeys Since 2001  </p>
            <p>
            Welcome to Mirza Haj and Umrah Tours, a distinguished travel agency based in Thane, Maharashtra, with a legacy of over two decades in facilitating sacred pilgrimages. Since our inception in 2001, we have been dedicated to providing seamless and spiritually enriching experiences for pilgrims embarking on Hajj, Umrah, and Ziyarat journeys. 
            </p>
            <div className="about-top">
          <h1 className="">
            Our mission
          </h1>
        </div>
        <p>Our <b>mission</b>  is to offer comprehensive and affordable pilgrimage packages that cater to the diverse needs of our clients. We strive to ensure that every aspect of your journey—from visa processing and flight bookings to comfortable accommodations and guided tours—is handled with the utmost professionalism and care.</p>
        <div className="about-top">
          <h1 className="">
            Why Choose Us?

          </h1>
        </div>
        <div className="choose">
          {chooseItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-button ${expandedItem === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <b>{item.title}</b>
                <KeyboardArrowDownIcon 
                  className={`arrow-icon ${expandedItem === index ? 'rotated' : ''}`}
                />
              </button>
              <div className={`accordion-content ${expandedItem === index ? 'show' : ''}`}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
        


          </div>
         
        </div>
        <div className="btns">
          <SocialShare />
        </div>
      </div>
    </div>
  );
}

export default About;
