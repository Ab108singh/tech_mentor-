import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Nodejs = () => {
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

  const nodeTopics = [
    { title: 'Introduction to Node.js', ref: useRef(null) },
    { title: 'Modules & Packages', ref: useRef(null) },
    { title: 'Event Loop & Asynchrony', ref: useRef(null) },
    { title: 'Express.js Basics', ref: useRef(null) },
    { title: 'Middleware in Node.js', ref: useRef(null) },
    { title: 'Building REST APIs', ref: useRef(null) },
    { title: 'Error Handling', ref: useRef(null) },
    { title: 'Testing in Node.js', ref: useRef(null) },
    { title: 'Deployment & Performance', ref: useRef(null) },
    { title: 'Security Best Practices', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
        <StarTrail col='#02f72b' sadow='#53d468'/>
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
            Node.js Topics
          </h2>
          <nav>
            {nodeTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-green-400 transition-colors">
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
            {nodeTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getNodeTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getNodeTopicContent = (title) => {
  switch (title) {
    case 'Introduction to Node.js':
      return (
        <>
          <p className="text-lg">
            Node.js is a JavaScript runtime built on Chrome's V8 engine. It enables you to build scalable network applications using an event-driven, non-blocking I/O model.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Overview:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Simple Node.js Example
console.log('Hello, Node.js!');`}
            </pre>
          </div>
        </>
      );
    case 'Modules & Packages':
      return (
        <>
          <p className="text-lg">
            Node.js uses CommonJS modules, and its package ecosystem is managed via npm, making it easy to reuse and share code.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Importing a module
const fs = require('fs');

// Using an npm package
const express = require('express');`}
            </pre>
          </div>
        </>
      );
    case 'Event Loop & Asynchrony':
      return (
        <>
          <p className="text-lg">
            The event loop is the core of Node.js's non-blocking architecture, enabling it to handle multiple connections simultaneously.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`setTimeout(() => {
  console.log('This is asynchronous');
}, 1000);`}
            </pre>
          </div>
        </>
      );
    case 'Express.js Basics':
      return (
        <>
          <p className="text-lg">
            Express.js is a popular web framework for Node.js that simplifies routing, middleware integration, and API development.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Express Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
            </pre>
          </div>
        </>
      );
    case 'Middleware in Node.js':
      return (
        <>
          <p className="text-lg">
            Middleware functions in Express process requests and responses. They can execute code, modify request/response objects, and end the request-response cycle.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});`}
            </pre>
          </div>
        </>
      );
    case 'Building REST APIs':
      return (
        <>
          <p className="text-lg">
            Node.js, combined with Express, makes it easy to build RESTful APIs to serve data for your applications.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});`}
            </pre>
          </div>
        </>
      );
    case 'Error Handling':
      return (
        <>
          <p className="text-lg">
            Effective error handling is crucial in Node.js to ensure errors are caught and handled gracefully.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}
            </pre>
          </div>
        </>
      );
    case 'Testing in Node.js':
      return (
        <>
          <p className="text-lg">
            Testing in Node.js can be achieved with frameworks like Jest, Mocha, and Supertest to ensure your APIs and logic function as expected.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example (using Jest):</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});`}
            </pre>
          </div>
        </>
      );
    case 'Deployment & Performance':
      return (
        <>
          <p className="text-lg">
            Deploy Node.js applications on platforms like Heroku, AWS, or DigitalOcean. Performance can be enhanced through clustering, caching, and load balancing.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Deployment Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Using PM2 to manage Node.js processes
pm2 start app.js --name my-app;`}
            </pre>
          </div>
        </>
      );
    case 'Security Best Practices':
      return (
        <>
          <p className="text-lg">
            Security in Node.js includes practices like input validation, proper error handling, secure storage of secrets, and using HTTPS.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Example using Helmet for security in Express
const helmet = require('helmet');
app.use(helmet());`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Nodejs;
