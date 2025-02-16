import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './js.css';

const Javascript = () => {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const sidebarRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSidebarFixed(!entry.isIntersecting);
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  const jsTopics = [
    { title: 'Introduction', ref: useRef(null) },
    { title: 'Variables', ref: useRef(null) },
    { title: 'Data Types', ref: useRef(null) },
    { title: 'Functions', ref: useRef(null) },
    { title: 'ES6+ Features', ref: useRef(null) },
    { title: 'DOM Manipulation', ref: useRef(null) },
    { title: 'Async/Await', ref: useRef(null) },
    { title: 'Promises', ref: useRef(null) },
    { title: 'Classes', ref: useRef(null) },
    { title: 'Modules', ref: useRef(null) },
    { title: 'Error Handling', ref: useRef(null) },
    { title: 'Arrays', ref: useRef(null) },
    { title: 'Objects', ref: useRef(null) },
    { title: 'Closures', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      {/* Header */}
      <header ref={headerRef} className="w-full bg-gradient-to-r from-gray-900 to-yellow-900 text-gray-200 z-50 shadow-xl border-b border-yellow-700">
        <Navbar />
        <div className="flex justify-start gap-2 p-3 bg-yellow-900/90 overflow-x-auto">
          {jsTopics.map((topic, index) => (
            <button
              key={index}
              className="px-4 py-1 text-xs font-medium bg-yellow-800/80 hover:bg-yellow-700/90 transition-all duration-300 rounded-lg shadow-md hover:scale-105 text-gray-200"
              onClick={() => scrollToSection(topic.ref)}
            >
              {topic.title}
            </button>
          ))}
        </div>
      </header>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          isSidebarFixed 
            ? 'fixed top-0 h-screen' 
            : 'absolute top-29 h-[calc(100vh-7rem)]'
        } left-0 w-64 bg-gray-900 text-gray-300 overflow-y-auto z-40 
           border-r border-yellow-700`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-yellow-700 pb-2 text-gray-200">
            JavaScript Topics
          </h2>
          <nav>
            {jsTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-yellow-900/50 rounded-lg transition-all 
                         duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-yellow-400 transition-colors">
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
            {jsTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 
                         hover:shadow-3xl hover:-translate-y-2 border border-yellow-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 
                              bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getJsTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getJsTopicContent = (title) => {
  switch(title) {
    case 'Introduction':
      return (
        <>
          <p className="text-lg">
            JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Basic Example:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`// Hello World
console.log('Hello World!');

// Function example
function greet(name) {
  return \`Hello, \${name}!\`;
}`}
            </pre>
          </div>
        </>
      );

    case 'Variables':
      return (
        <>
          <p className="text-lg">
            Variables are containers for storing data values. JavaScript uses let, const, and var for variable declaration.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Examples:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`// Block-scoped variables
let age = 25;
const PI = 3.14;

// Function-scoped variable
var count = 10;`}
            </pre>
          </div>
        </>
      );

    case 'Functions':
      return (
        <>
          <p className="text-lg">
            Functions are reusable blocks of code that can be defined and called to perform specific tasks.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Examples:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// IIFE
(function() {
  console.log('Immediately invoked!');
})();`}
            </pre>
          </div>
        </>
      );

    case 'ES6+ Features':
      return (
        <>
          <p className="text-lg">
            ES6 (ECMAScript 2015) introduced major enhancements including arrow functions, classes, modules, and more.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Features:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`// Arrow functions
const square = x => x * x;

// Template literals
const message = \`Hello \${name}!\`;

// Destructuring
const { firstName, lastName } = user;

// Spread operator
const newArray = [...oldArray, newItem];`}
            </pre>
          </div>
        </>
      );

    case 'DOM Manipulation':
      return (
        <>
          <p className="text-lg">
            The Document Object Model (DOM) allows JavaScript to interact with and modify web page content.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Examples:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`// Select element
const btn = document.querySelector('#myButton');

// Event listener
btn.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Modify styles
element.style.backgroundColor = 'blue';

// Create new element
const newDiv = document.createElement('div');`}
            </pre>
          </div>
        </>
      );

    case 'Async/Await':
      return (
        <>
          <p className="text-lg">
            Async/await provides a cleaner syntax for working with promises and asynchronous operations.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Example:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`}
            </pre>
          </div>
        </>
      );

    case 'Closures':
      return (
        <>
          <p className="text-lg">
            Closures are functions that remember their lexical environment even when executed outside that environment.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Example:</h3>
            <pre className="bg-gray-900 text-yellow-300 p-5 rounded-xl overflow-x-auto border border-yellow-700">
{`function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`}
            </pre>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-yellow-700">
              <button 
                onClick={() => alert(`Count: ${(createCounter())()}`)}
                className="px-4 py-2 bg-yellow-600 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Test Closure
              </button>
            </div>
          </div>
        </>
      );

    // Add remaining content blocks following the same pattern

    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Javascript;