import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Tailwind = () => {
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

  const tailwindTopics = [
    { title: 'Introduction to Tailwind CSS', ref: useRef(null) },
    { title: 'Utility-First Concept', ref: useRef(null) },
    { title: 'Responsive Design', ref: useRef(null) },
    { title: 'Dark Mode', ref: useRef(null) },
    { title: 'Custom Configuration', ref: useRef(null) },
    { title: 'Component Styling', ref: useRef(null) },
    { title: 'Animation & Transitions', ref: useRef(null) },
    { title: 'Optimization Tips', ref: useRef(null) },
    { title: 'Plugins & Extensions', ref: useRef(null) },
    { title: 'Best Practices', ref: useRef(null) },
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
            Tailwind CSS Topics
          </h2>
          <nav>
            {tailwindTopics.map((topic, index) => (
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
            {tailwindTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getTailwindTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getTailwindTopicContent = (title) => {
  switch (title) {
    case 'Introduction to Tailwind CSS':
      return (
        <>
          <p className="text-lg">
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes
            to build custom designs without ever leaving your HTML.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Basic Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img.jpg" alt="Example" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
      <p class="mt-2 text-gray-500">Card content description...</p>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        </>
      );
    case 'Utility-First Concept':
      return (
        <>
          <p className="text-lg">
            Build complex components by combining atomic utility classes directly in your markup,
            resulting in faster development and consistent designs.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Utility Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`}
            </pre>
          </div>
        </>
      );
    case 'Responsive Design':
      return (
        <>
          <p className="text-lg">
            Tailwind's responsive modifiers make it easy to build responsive layouts using
            breakpoint prefixes like sm, md, lg, and xl.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Responsive Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid columns -->
</div>`}
            </pre>
          </div>
        </>
      );
    case 'Dark Mode':
      return (
        <>
          <p className="text-lg">
            Tailwind provides first-class dark mode support using the 'dark:' variant and
            the prefers-color-scheme media query.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Dark Mode Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Dark Mode Text</h1>
</div>`}
            </pre>
          </div>
        </>
      );
    case 'Custom Configuration':
      return (
        <>
          <p className="text-lg">
            Extend Tailwind's default theme by customizing colors, spacing, fonts, and more
            through the tailwind.config.js file.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Config Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4'
      }
    }
  }
}`}
            </pre>
          </div>
        </>
      );
    case 'Component Styling':
      return (
        <>
          <p className="text-lg">
            Create reusable component styles using @apply or by extracting components
            with JavaScript.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">@apply Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`.btn {
  @apply px-4 py-2 rounded font-semibold bg-blue-500 text-white;
}

.btn:hover {
  @apply bg-blue-700;
}`}
            </pre>
          </div>
        </>
      );
    case 'Animation & Transitions':
      return (
        <>
          <p className="text-lg">
            Use Tailwind's built-in animation utilities or create custom animations
            for smooth interactions.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Animation Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<div class="animate-bounce">Bouncing Element</div>
<div class="transition duration-300 hover:scale-105">Hover Scale</div>`}
            </pre>
          </div>
        </>
      );
    case 'Optimization Tips':
      return (
        <>
          <p className="text-lg">
            Optimize Tailwind projects using PurgeCSS to remove unused styles and enable
            JIT mode for faster development.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">PurgeCSS Config:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  // ...
}`}
            </pre>
          </div>
        </>
      );
    case 'Plugins & Extensions':
      return (
        <>
          <p className="text-lg">
            Extend Tailwind's functionality with official and community plugins for
            forms, typography, aspect ratios, and more.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Plugin Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}`}
            </pre>
          </div>
        </>
      );
    case 'Best Practices':
      return (
        <>
          <p className="text-lg">
            Follow Tailwind best practices like using responsive-first approach,
            limiting custom CSS, and leveraging the utility-first workflow.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Good Practice:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`<!-- Prefer utility classes over custom CSS -->
<div class="flex justify-between items-center p-4">
  <!-- Content -->
</div>`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Tailwind;