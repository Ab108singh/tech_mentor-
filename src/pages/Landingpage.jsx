import React from 'react';
import Navbar from '../components/Navbar';
import './landingpage.css'; // Import custom CSS for animations
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Landingpage = () => {
  // Array of YouTube video links, titles, and IDs
  const youtubeVideos = [
    {
      title: 'Introduction to React JS',
      videoId: 'UMIB2-uBUTU',
    },
    {
      title: 'Mastering Tailwind CSS',
      videoId: 'F2CgbVEmQEA',
    },
    {
      title: 'Node.js Crash Course',
      videoId: 'eh5W_NyGCtg',
    },
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <StarTrail col='white' sadow='lightgray'/>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Become a Web Development Expert</h1>
          <p className="text-lg text-gray-300 mb-8">
            Learn the latest technologies and best practices from industry experts. Start your journey today!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section (Mid Section) */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
              <p className="text-gray-300">
                Master HTML, CSS, JavaScript, and modern frameworks like React to build stunning user interfaces.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Backend Development</h3>
              <p className="text-gray-300">
                Learn Node.js, Express, and MongoDB to create powerful and scalable backend systems.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Full-Stack Skills</h3>
              <p className="text-gray-300">
                Combine frontend and backend skills to become a full-stack developer and build complete web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">My YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="video-card"
              >
                <div className="video-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="video-thumbnail"
                  />
                  <iframe
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} The Tech Mentor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;
