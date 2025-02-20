import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const ResponsiveDesign = () => {
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

  const responsiveTopics = [
    { title: 'Mobile-first Design', ref: useRef(null) },
    { title: 'Fluid Grids', ref: useRef(null) },
    { title: 'Media Queries', ref: useRef(null) },
    { title: 'Flexible Images', ref: useRef(null) },
    { title: 'Responsive Typography', ref: useRef(null) },
    { title: 'Viewport Meta Tag', ref: useRef(null) },
    { title: 'Breakpoints', ref: useRef(null) },
    { title: 'Responsive Navigation', ref: useRef(null) },
    { title: 'Performance Optimization', ref: useRef(null) },
    { title: 'Accessibility in Responsive', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col="#ff5733" sadow="#ff8f66" />
      <Header />
      <div ref={sentinelRef} className="absolute top-29 h-1 w-full" />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          isSidebarFixed ? 'fixed top-0 h-screen' : 'absolute top-29 h-[calc(100vh-7rem)]'
        } left-0 w-64 bg-gray-900 text-gray-300 overflow-y-auto z-40 border-r border-gray-700`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-gray-200">
            Responsive Design
          </h2>
          <nav>
            {responsiveTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-red-400 transition-colors">
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
            {responsiveTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getResponsiveDesignTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getResponsiveDesignTopicContent = (title) => {
  switch (title) {
    case 'Mobile-first Design':
      return (
        <>
          <p className="text-lg">
            Mobile-first design is a strategy where the design process starts with the smallest screens, progressively enhancing for larger devices.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Advantages:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Focus on essential content
- Optimized performance on mobile devices
- Enhanced user experience on smaller screens`}
            </pre>
          </div>
        </>
      );
    case 'Fluid Grids':
      return (
        <>
          <p className="text-lg">
            Fluid grids use relative units like percentages instead of fixed units, allowing layouts to resize dynamically.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Key Concept:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.container {
  width: 100%;
  padding: 0 15px;
}`}
            </pre>
          </div>
        </>
      );
    case 'Media Queries':
      return (
        <>
          <p className="text-lg">
            Media queries allow you to apply CSS rules based on device characteristics like screen size, orientation, and resolution.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Example:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}
            </pre>
          </div>
        </>
      );
    case 'Flexible Images':
      return (
        <>
          <p className="text-lg">
            Flexible images scale to fit the dimensions of their containers, ensuring visuals remain crisp on all devices.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">CSS Tip:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`img {
  max-width: 100%;
  height: auto;
}`}
            </pre>
          </div>
        </>
      );
    case 'Responsive Typography':
      return (
        <>
          <p className="text-lg">
            Responsive typography adjusts text sizes based on the viewport to maintain readability and visual hierarchy.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Technique:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`html {
  font-size: 16px;
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}`}
            </pre>
          </div>
        </>
      );
    case 'Viewport Meta Tag':
      return (
        <>
          <p className="text-lg">
            The viewport meta tag controls layout on mobile browsers by setting the visible area of the page.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Example:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<meta name="viewport" content="width=device-width, initial-scale=1">`}
            </pre>
          </div>
        </>
      );
    case 'Breakpoints':
      return (
        <>
          <p className="text-lg">
            Breakpoints define the points at which a website's layout will adjust to accommodate different screen sizes.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Common Breakpoints:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`@media (max-width: 1200px) { ... }
@media (max-width: 992px) { ... }
@media (max-width: 768px) { ... }`}
            </pre>
          </div>
        </>
      );
    case 'Responsive Navigation':
      return (
        <>
          <p className="text-lg">
            Responsive navigation adapts menu layouts to offer optimal usability on both mobile and desktop devices.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Common Patterns:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Hamburger Menu
- Off-canvas Navigation
- Collapsible Menus`}
            </pre>
          </div>
        </>
      );
    case 'Performance Optimization':
      return (
        <>
          <p className="text-lg">
            Performance is crucial for responsive designs. Optimizing assets and code ensures smooth interactions and quick load times.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Tips:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Minify CSS and JavaScript
- Optimize images
- Implement lazy loading`}
            </pre>
          </div>
        </>
      );
    case 'Accessibility in Responsive':
      return (
        <>
          <p className="text-lg">
            Accessible responsive design ensures that websites are usable by everyone, including those with disabilities.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Best Practices:</h3>
            <pre className="bg-gray-900 text-red-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Use semantic HTML
- Ensure sufficient color contrast
- Provide alternative text for images`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default ResponsiveDesign;
