import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function renderStars (rating) {
    let stars = [];
    
    const fullStars = Math.floor(rating);  
    const halfStars = rating - fullStars >= 0.5 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStars;  
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} style={{ color: 'gold' }}><FaStar /></i>);
    }
  
    if (halfStars) {
      stars.push(<i key="half" style={{ color: 'gold' }}><FaStarHalfAlt /></i>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} style={{ color: 'gray' }}><CiStar /></i>);
    }
  
    return stars;  
  };