import React from 'react';
import Slider from 'react-slick';
import '../Style/Slider.css'
// import './CourseCarousel.css'; // For styling buttons

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-25px', zIndex: '1' }} // Adjust position
      onClick={onClick}
    >
      <button className="carousel-prev">&#10094;</button>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-25px', zIndex: '1' }} // Adjust position
      onClick={onClick}
    >
      <button className="carousel-next">&#10095;</button>
    </div>
  );
};

const CourseCarousel = () => {
  const courses = [
    {
      title: "ChatGPT for Developers",
      duration: "3 hours",
      mode: "Online",
      image: "https://demo.debugshala.com/assets/images/courses_banner/Chatgpt%20for%20Developers.jpg",
    },
    {
      title: "LinkedIn Outreach",
      duration: "2 hours",
      mode: "Online",
      image: "https://demo.debugshala.com/assets/images/courses_banner/Linkedin_Outreach.jpg",
    },
    {
      title: "MS Office for DA",
      duration: "2 hours",
      mode: "Online",
      image: "https://demo.debugshala.com/assets/images/courses_banner/MS%20Office%20for%20Data%20Analytics.jpg",
    }
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ padding: "70px" }} >
      <h2>AI & Data Science</h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3 style={{ backgroundColor: 'black', color: 'white', padding: '12px' }}>{course.title}</h3>
            <h5 className='Duration'>Duration: {course.duration}</h5>
            <h5 className='Mode'>Mode: {course.mode}</h5>
            <div className='button-div'>
                <button className='course-btn'>Course Details</button>
                <button className="syllabus-btn">Syllabus</button>
            </div>
         
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;