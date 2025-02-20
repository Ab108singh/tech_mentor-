import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Expressjs = () => {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const sidebarRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSidebarFixed(!entry.isIntersecting),
      { root: null, rootMargin: '0px', threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  const expressTopics = [
    { title: 'Introduction to Express', ref: useRef(null) },
    { title: 'Routing in Express', ref: useRef(null) },
    { title: 'Middleware in Express', ref: useRef(null) },
    { title: 'Error Handling', ref: useRef(null) },
    { title: 'Template Engines', ref: useRef(null) },
    { title: 'Building REST APIs', ref: useRef(null) },
    { title: 'Security in Express', ref: useRef(null) },
    { title: 'Testing Express Applications', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
        <StarTrail col='#f705eb' sadow='#fa4bf1'/>
      <Header />
      <div ref={sentinelRef} className="absolute top-29 h-1 w-full" />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          isSidebarFixed 
            ? 'fixed top-0 h-screen' 
            : 'absolute top-29 h-[calc(100vh-7rem)]'
        } left-0 w-64 bg-gray-900 text-gray-300 overflow-y-auto z-40 border-r border-gray-700`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-gray-200">
            Express.js Topics
          </h2>
          <nav>
            {expressTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-purple-400 transition-colors">
                  {topic.title}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 pt-28">
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            {expressTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getExpressTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getExpressTopicContent = (title) => {
  switch(title) {
    case 'Introduction to Express':
      return (
        <>
          <p className="text-lg">
            Express.js is a minimal and flexible Node.js web framework that provides a robust set of features for developing web and mobile applications.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Overview:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express.js!');
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
            </pre>
          </div>
        </>
      );
    case 'Routing in Express':
      return (
        <>
          <p className="text-lg">
            Routing in Express.js defines how an application responds to client requests at a specific endpoint, using HTTP methods such as GET, POST, and PUT.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.post('/users', (req, res) => {
  // Handle user creation
});`}
            </pre>
          </div>
        </>
      );
    case 'Middleware in Express':
      return (
        <>
          <p className="text-lg">
            Middleware functions have access to the request and response objects and can execute code, modify the request-response cycle, or terminate it.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});`}
            </pre>
          </div>
        </>
      );
    case 'Error Handling':
      return (
        <>
          <p className="text-lg">
            Express.js provides a way to handle errors using error-handling middleware. This middleware catches errors and prevents your app from crashing.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});`}
            </pre>
          </div>
        </>
      );
    case 'Template Engines':
      return (
        <>
          <p className="text-lg">
            Template engines like EJS, Pug, or Handlebars let you generate dynamic HTML pages by mixing static templates with data.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example (EJS):</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Express with EJS' });
});`}
            </pre>
          </div>
        </>
      );
    case 'Building REST APIs':
      return (
        <>
          <p className="text-lg">
            Express.js is widely used to build RESTful APIs, allowing you to serve JSON data to client applications.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Item One' }]);
});`}
            </pre>
          </div>
        </>
      );
    case 'Security in Express':
      return (
        <>
          <p className="text-lg">
            Securing your Express application involves setting secure HTTP headers, validating inputs, and using middleware such as Helmet.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example (Helmet):</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`const helmet = require('helmet');
app.use(helmet());`}
            </pre>
          </div>
        </>
      );
    case 'Testing Express Applications':
      return (
        <>
          <p className="text-lg">
            Testing Express applications can be accomplished using tools like Mocha, Chai, and Supertest to ensure your routes and middleware work as expected.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example (using Mocha):</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`const request = require('supertest');
const app = require('./app');

describe('GET /api/items', () => {
  it('should return a list of items', done => {
    request(app)
      .get('/api/items')
      .expect(200, done);
  });
});`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Expressjs;
