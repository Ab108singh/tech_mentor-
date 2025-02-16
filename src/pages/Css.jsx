import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './css.css';

const Css = () => {
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

  const cssTopics = [
    { title: 'CSS Introduction', ref: useRef(null) },
    { title: 'Selectors', ref: useRef(null) },
    { title: 'Box Model', ref: useRef(null) },
    { title: 'Flexbox', ref: useRef(null) },
    { title: 'Grid', ref: useRef(null) },
    { title: 'Transitions', ref: useRef(null) },
    { title: 'Animations', ref: useRef(null) },
    { title: 'Transform', ref: useRef(null) },
    { title: 'Variables', ref: useRef(null) },
    { title: 'Responsive Design', ref: useRef(null) },
    { title: 'Pseudo-classes', ref: useRef(null) },
    { title: 'Shadow Effects', ref: useRef(null) },
    { title: 'Gradients', ref: useRef(null) },
    { title: 'CSS Architecture', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      {/* Header */}
      <header ref={headerRef} className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 z-50 shadow-xl border-b border-gray-700">
        <Navbar />
        <div className="flex justify-start gap-2 p-3 bg-gray-800/90 overflow-x-auto">
          {cssTopics.map((topic, index) => (
            <button
              key={index}
              className="px-4 py-1.5 text-xs font-medium bg-gray-700/80 hover:bg-gray-600/90 transition-all duration-300 rounded-lg shadow-md hover:scale-105 text-gray-200"
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
           border-r border-gray-700`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-gray-200">
            CSS Topics
          </h2>
          <nav>
            {cssTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all 
                         duration-300 mb-2 hover:translate-x-2 group"
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
            {cssTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 
                         hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                              bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getCssTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getCssTopicContent = (title) => {
  switch(title) {
    case 'CSS Introduction':
      return (
        <>
          <p className="text-lg">
            CSS (Cascading Style Sheets) is the language used to style web pages.
            It controls layout, colors, fonts, and responsive behavior.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Basic Syntax:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`selector {
  property: value;
  /* This is a CSS comment */
}`}
            </pre>
          </div>
        </>
      );

    case 'Selectors':
      return (
        <>
          <p className="text-lg">
            CSS selectors target HTML elements to apply styles. They range from simple
            element names to complex attribute selectors.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Common Selectors:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`/* Element selector */
div { ... }

/* Class selector */
.class-name { ... }

/* ID selector */
#element-id { ... }

/* Attribute selector */
[type="text"] { ... }

/* Pseudo-class */
button:hover { ... }`}
            </pre>
          </div>
        </>
      );

    case 'Box Model':
      return (
        <>
          <p className="text-lg">
            The CSS box model describes the rectangular boxes generated for elements.
            It consists of content, padding, border, and margin.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Visualization:</h3>
            <div className="flex justify-center items-center p-6 bg-gray-900 rounded-xl border border-gray-700">
              <div className="w-48 h-48 bg-purple-900 p-4 border-4 border-blue-800 m-8 relative">
                <div className="absolute -top-4 left-0 text-sm text-gray-400">Margin</div>
                <div className="absolute -inset-4 border-2 border-dashed border-gray-600"></div>
                <div className="h-full w-full bg-blue-900 p-4">
                  <div className="h-full w-full bg-gray-800 flex items-center justify-center text-gray-400">
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );

    case 'Flexbox':
      return (
        <>
          <p className="text-lg">
            Flexbox provides efficient way to layout, align, and distribute space among items in a container.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}`}
            </pre>
            <div className="mt-4 flex justify-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg animate-pulse"></div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg animate-pulse delay-100"></div>
              <div className="w-12 h-12 bg-pink-600 rounded-lg animate-pulse delay-200"></div>
            </div>
          </div>
        </>
      );

    case 'Grid':
      return (
        <>
          <p className="text-lg">
            CSS Grid enables complex layouts with rows and columns. It's a 2D system
            that offers precise control over web page layouts.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}
            </pre>
            <div className="mt-4 grid grid-cols-3 gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </>
      );

    case 'Transitions':
      return (
        <>
          <p className="text-lg">
            CSS transitions enable smooth changes between property values over a
            specified duration.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`button {
  transition: all 0.3s ease;
  background: #2563eb;
}

button:hover {
  background: #7c3aed;
  transform: scale(1.1);
}`}
            </pre>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg transition-all 
                               duration-300 hover:bg-purple-600 hover:scale-110">
                Hover Me
              </button>
            </div>
          </div>
        </>
      );

    case 'Animations':
      return (
        <>
          <p className="text-lg">
            CSS animations allow elements to transition between style configurations
            using keyframes.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`@keyframes slide {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.element {
  animation: slide 1s ease-in-out;
}`}
            </pre>
            <div className="mt-4 bg-gray-900 p-4 rounded-lg border border-gray-700 overflow-hidden">
              <div className="w-12 h-12 bg-green-600 rounded-lg animate-slide"></div>
            </div>
          </div>
        </>
      );

    case 'Transform':
      return (
        <>
          <p className="text-lg">
            CSS transform property lets you rotate, scale, skew, or translate elements.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.element {
  transform: rotate(45deg) scale(1.2) translateX(20px);
}`}
            </pre>
            <div className="mt-4 flex justify-center gap-4">
              <div className="w-12 h-12 bg-red-600 transform rotate-45 transition-transform 
                             duration-300 hover:rotate-90"></div>
              <div className="w-12 h-12 bg-yellow-600 transform scale-100 transition-transform 
                             duration-300 hover:scale-125"></div>
            </div>
          </div>
        </>
      );

    case 'Variables':
      return (
        <>
          <p className="text-lg">
            CSS variables (custom properties) allow you to store and reuse values
            throughout your stylesheets.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`:root {
  --primary-color: #2563eb;
  --spacing-unit: 1rem;
}

.element {
  color: var(--primary-color);
  margin: var(--spacing-unit);
}`}
            </pre>
          </div>
        </>
      );

    case 'Responsive Design':
      return (
        <>
          <p className="text-lg">
            Responsive design techniques ensure websites work across various screen
            sizes using media queries and flexible layouts.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Media Query Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}
            </pre>
          </div>
        </>
      );

    case 'Pseudo-classes':
      return (
        <>
          <p className="text-lg">
            Pseudo-classes define special states of elements (e.g., hover, focus, active).
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Examples:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`a:hover { color: #ef4444; }
input:focus { border-color: #3b82f6; }
li:nth-child(odd) { background: #1f2937; }`}
            </pre>
          </div>
        </>
      );

    case 'Shadow Effects':
      return (
        <>
          <p className="text-lg">
            CSS shadow properties add depth and dimension to elements with box and text shadows.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.card {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3);
}

.text {
  text-shadow: 2px 2px 4px rgb(0 0 0 / 0.5);
}`}
            </pre>
            <div className="mt-4 flex gap-4">
              <div className="p-4 bg-gray-800 rounded-lg shadow-xl">Box Shadow</div>
              <div className="p-4 text-white text-shadow">Text Shadow</div>
            </div>
          </div>
        </>
      );

    case 'Gradients':
      return (
        <>
          <p className="text-lg">
            CSS gradients create smooth transitions between multiple colors.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Examples:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.linear-gradient {
  background: linear-gradient(45deg, #2563eb, #db2777);
}

.radial-gradient {
  background: radial-gradient(circle, #2563eb, #db2777);
}`}
            </pre>
            <div className="mt-4 flex gap-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-pink-600 rounded-lg"></div>
              <div className="w-24 h-24 bg-radial-gradient from-blue-600 to-pink-600 rounded-full"></div>
            </div>
          </div>
        </>
      );

    case 'CSS Architecture':
      return (
        <>
          <p className="text-lg">
            CSS architecture methodologies like BEM help create maintainable and scalable styles.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">BEM Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`/* Block */
.card { ... }

/* Element */
.card__header { ... }

/* Modifier */
.card--featured { ... }`}
            </pre>
          </div>
        </>
      );

    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Css;