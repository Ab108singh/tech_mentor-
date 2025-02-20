import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const buttonLabels = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Git & GitHub',
  'APIs',
  'Responsive Design',
  'Web Security',
  'Deployment',
  'Debugging',
];

const Header = React.forwardRef((props, ref) => {
  return (
    <header ref={ref} className="bg-gray-900 text-white">
      <Navbar />
      {/* Buttons Section */}
      <div className="flex justify-start gap-2 p-3 bg-gray-800 overflow-x-auto">
        {buttonLabels.map((label, index) => (
          <Link
            to={'/' + label.toLowerCase()}
            key={index}
            className="px-3 py-1 text-xs font-medium bg-gray-700 text-white rounded-lg hover:bg-gray-600  shadow-md"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
});

export default Header;
