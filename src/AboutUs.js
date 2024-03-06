import React, {useState, useEffect}from 'react';
import './AboutUs.css';
import basketBallCourt from './assests/basketBallCourt.jpg';
import classPic from './/assests/class.jpg';
import computerLab from './/assests/computerLab.jpg';
import cycleStand from './/assests/cycleStand.jpg';
import lib1 from ".//assests/lib1.jpg";
import shuttle from ".//assests/shuttle.jpg";
import lab2 from ".//assests/lab2.jpg";

import playArea from './assests/playArea.jpg';
import scienceLab from './assests/scienceLab.jpg';
import vedicMaths1 from './assests/vm.jpeg';
import vedicMaths2 from './assests/vm2.jpeg';
import iit1 from './assests/iit2.png';
import iit2 from './assests/itt1.jpeg';
import a2 from "./assests/a2.jpeg";
import a3 from "./assests/a3.jpeg";
import a4 from "./assests/a4.jpeg";
import g1 from './assests/DSC_0326.jpg';
import g3 from './assests/DSC_0344.jpg';
import g4 from './assests/DSC_0350.jpg';
import g5 from './assests/DSC_0354.jpg';
import g6 from './assests/DSC_0370.jpg';
import g7 from './assests/DSC_0409.jpg';
function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: basketBallCourt, alt: 'Basketball Court', label: 'Basketball Court' },
    { src: classPic, alt: 'Classroom', label: 'Basketball Court' },
    { src: computerLab, alt: 'Computer Lab', label: 'Basketball Court' },
    { src: cycleStand, alt: 'Cycle Stand', label: 'Basketball Court' },
    { src: playArea, alt: 'Play Area', label: 'Basketball Court' },
    { src: lib1, alt: 'Library', label: 'Library' },
    { src: g1, alt: 'Play Area', label: 'Shuttle Court' },
    { src: lab2, alt: 'Lab Area', label: 'Lab Court' },
    { src: scienceLab, alt: 'Science Lab', label: 'Basketball Court' }, // Add other images similarly
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % (images.length - 2);
      setCurrentSlide(nextSlide);
    }, 3000); // Change slide every 3 seconds (adjust this value as needed)

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);


  const showImages = images.slice(currentSlide, currentSlide + 4);
  return (
    <div className="about-us-container">
      <div className="our-infrastructure">
        <h2><u><b>OUR INFRASTRUCTURE</b></u></h2>
        {/* Carousel of images for infrastructure */}
        <div className="image-carousel">
          {showImages.map((image, index) => (
          <div key={index} className="image-container">
            <div className="image-container2">
              <img
                src={image.src}
                className="image-zoom " alt='Images'
              />
            </div>
          </div>
        ))}
         
        </div>
      </div>
      <div className="extra-curricular-activities">
      <h2 style={{ textAlign: 'center' }}><u><b>EXTRA CURRICULAR ACTIVITIES</b></u></h2>
      <div className='border-event'>

<h2 style={{marginBottom: "20px"}}><u><b>SPORTS EVENTS - VICTORY SPECTACLES</b></u></h2>



<div className="activity-images-sports ">
  <img src={g7} alt="Abacus 1" />
  <img src={g3} alt="Abacus 1" />
  <img src={g4} alt="Abacus 2" />
  <img src={g5} alt="Abacus 1" />
  <img src={g6} alt="Abacus 2" />
  <img src={shuttle} alt="Abacus 1" />
</div>
</div>
<div className='border-event'>
<h2 style={{marginBottom: "20px"}}><u><b>ABACUS - EMPOWERING EXCELLENCE</b></u></h2>
<div className="abacus">
  <p>
    The ABACUS, an ancient calculation tool, transforms mathematical learning by utilizing beads or counters on rods to perform arithmetic operations swiftly. It fosters mental math skills, enhancing calculation speed and accuracy by visualizing numerical concepts. ABACUS training covers addition, subtraction, multiplication, and division, cultivating a strong foundation in mathematics. This tool empowers learners to perform complex calculations mentally, fostering numerical fluency and problem-solving abilities at an accelerated pace.
  </p>
</div>
{/* Centre-aligned images for Abacus */}
<div className="activity-images image-container2 ">
<img src={a2} alt="Vedic Maths 2" className="image-zoom" />
  <img src={a3} alt="Vedic Maths 2" className="image-zoom" />
  <img src={a4} alt="Vedic Maths 2" className="image-zoom" />
</div>
</div>
<div className='border-event'>
      <h2 style={{marginBottom: "20px"}}><u><b>IIT FOUNDATION - INNOVATING TOMORROW</b></u></h2>
<div className="iit-foundation">
  <p>
    The IIT foundation program, designed for students from class 6 to class 9, serves as a robust bridge between school education and competitive exams. With a keen focus on fundamental concepts in mathematics, science, and technology, this initiative nurtures analytical thinking and problem-solving skills. The program meticulously tracks students' progress, closely evaluating their performance in school and state-level examinations. As an encouragement, it awards prizes to recognize and motivate young achievers, fostering a culture of academic excellence and innovation.
  </p>
</div>
{/* Centre-aligned images for IIT Foundation */}
<div className="activity-images image-container2 ">
     <img src={iit2} alt="IIT Foundation 2" className="image-zoom" />
  <img src={iit1} alt="IIT Foundation 1" className="image-zoom" />
 
</div>
</div>

<div className='border-event'>
<h2 style={{marginBottom: "20px"}}><u><b>VEDIC MATHS - ANCIENT WISDOM, MODERN SOLUTIONS</b></u></h2>
<div className="vedic-maths">
  <p>
    Vedic Maths, stemming from ancient Indian methods, revolutionizes mathematical calculations by employing sutras and sub-sutras for rapid mental arithmetic. These techniques encompass diverse operations like multiplication, division, and roots, offering quicker alternatives to traditional methods. Vedic Maths enhances numerical agility, empowering individuals with confidence and efficiency in solving complex mathematical problems.
  </p>
</div>
{/* Centre-aligned images for Vedic Maths */}
<div className="activity-images image-container2 ">
  <img src={vedicMaths1} alt="Vedic Maths 1" className="image-zoom" />
  <img src={vedicMaths2} alt="Vedic Maths 2" className="image-zoom" />
</div>
</div>




      </div>
    </div>
  );
}

export default AboutUs;
