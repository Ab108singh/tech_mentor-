import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './react.css';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const ReactJS = () => {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const sidebarRef = useRef(null);
  const sentinelRef = useRef(null); // Changed from headerRef to sentinelRef

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSidebarFixed(!entry.isIntersecting);
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  const reactTopics = [
    { title: 'Introduction', ref: useRef(null) },
    { title: 'Components', ref: useRef(null) },
    { title: 'JSX', ref: useRef(null) },
    { title: 'Props', ref: useRef(null) },
    { title: 'State', ref: useRef(null) },
    { title: 'Hooks', ref: useRef(null) },
    { title: 'Effects', ref: useRef(null) },
    { title: 'Context', ref: useRef(null) },
    { title: 'Routing', ref: useRef(null) },
    { title: 'Forms', ref: useRef(null) },
    { title: 'API Calls', ref: useRef(null) },
    { title: 'Optimization', ref: useRef(null) },
    { title: 'Testing', ref: useRef(null) },
    { title: 'Best Practices', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      {/* Header */}
      <StarTrail col='#05f7db' sadow='#05dff7'/>
     <Header/>
     <div ref={sentinelRef} className="absolute top-29 h-1 w-full" />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          isSidebarFixed 
            ? 'fixed top-0 h-screen' 
            : 'absolute top-29 h-[calc(100vh-7rem)]'
        } left-0 w-64 bg-gray-900 text-gray-300 overflow-y-auto z-40 
           border-r border-cyan-700`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-cyan-700 pb-2 text-gray-200">
            React Topics
          </h2>
          <nav>
            {reactTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-cyan-900/50 rounded-lg transition-all 
                         duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-cyan-400 transition-colors">
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
            {reactTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 
                         hover:shadow-3xl hover:-translate-y-2 border border-cyan-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 
                              bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getReactTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getReactTopicContent = (title) => {
  switch(title) {
    case 'Introduction':
      return (
        <>
          <p className="text-lg">
            React is a JavaScript library for building user interfaces, maintained by Facebook.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Basic Example:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`import React from 'react';

function App() {
  return <h1>Hello React!</h1>;
}

export default App;`}
            </pre>
          </div>
        </>
      );

    case 'Components':
      return (
        <>
          <p className="text-lg">
            Components are the building blocks of React applications. They can be class-based or functional.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Functional Component:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
            </pre>
          </div>
        </>
      );

    case 'JSX':
      return (
        <>
          <p className="text-lg">
            JSX is a syntax extension that allows HTML-like code in JavaScript.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Example:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`const element = (
  <div className="container">
    <h1>JSX Example</h1>
    <p>This is JSX syntax</p>
  </div>
);`}
            </pre>
          </div>
        </>
      );

    case 'State':
      return (
        <>
          <p className="text-lg">
            State allows components to manage and respond to data changes.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">useState Hook:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
            </pre>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-cyan-700">
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-cyan-400 mb-2">Live Example:</p>
                <button 
                  onClick={() => alert('State example - implement counter logic here')}
                  className="px-4 py-2 bg-cyan-600 text-gray-900 rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  Test Counter
                </button>
              </div>
            </div>
          </div>
        </>
      );

    case 'Hooks':
      return (
        <>
          <p className="text-lg">
            Hooks let you use state and other React features in functional components.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Common Hooks:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`import { useState, useEffect, useContext } from 'react';

// State Hook
const [state, setState] = useState(initialState);

// Effect Hook
useEffect(() => {
  // Side effects
}, [dependencies]);

// Context Hook
const value = useContext(MyContext);`}
            </pre>
          </div>
        </>
      );

    case 'Effects':
      return (
        <>
          <p className="text-lg">
            useEffect handles side effects in functional components.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Example:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`useEffect(() => {
  // Fetch data on component mount
  fetchData();
  
  // Cleanup on component unmount
  return () => {
    abortController.abort();
  };
}, []);`}
            </pre>
          </div>
        </>
      );

    case 'Context':
      return (
        <>
          <p className="text-lg">
            Context provides a way to pass data through the component tree without props.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Implementation:</h3>
            <pre className="bg-gray-900 text-cyan-300 p-5 rounded-xl overflow-x-auto border border-cyan-700">
{`// Create Context
const ThemeContext = React.createContext('light');

// Provide Context
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consume Context
const theme = useContext(ThemeContext);`}
            </pre>
          </div>
        </>
      );

    // Add remaining content blocks following the same pattern

    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default ReactJS;