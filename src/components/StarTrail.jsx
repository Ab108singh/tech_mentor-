import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const StarTrail = ({col='rgb(231, 231, 227)',sadow='rgb(168, 168, 165)'}) => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const addStar = throttle((e) => {
      setStars(prev => [
        ...prev,
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY
        }
      ]);
    }, 30);

    window.addEventListener('mousemove', addStar);
    return () => window.removeEventListener('mousemove', addStar);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prev => prev.filter(star => Date.now() - star.id < 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="star-container">
      {stars.map(star => (
        <div 
          key={star.id}
          className="star"
          style={{
            left: star.x - 5,
            top: star.y - 5,
            background: `radial-gradient(#fff,${col})`,
            boxShadow: `0 0 10px ${sadow}`
          }}
        />
      ))}
    </div>
  );
};

export default StarTrail;