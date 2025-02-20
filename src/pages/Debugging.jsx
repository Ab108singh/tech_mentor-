import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Debugging = () => {
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

  const debuggingTopics = [
    { title: 'Introduction to Debugging', ref: useRef(null) },
    { title: 'Console Logging', ref: useRef(null) },
    { title: 'Breakpoint Debugging', ref: useRef(null) },
    { title: 'Error Stack Tracing', ref: useRef(null) },
    { title: 'Remote Debugging', ref: useRef(null) },
    { title: 'Browser Developer Tools', ref: useRef(null) },
    { title: 'Logging and Monitoring', ref: useRef(null) },
    { title: 'Debugging in Production', ref: useRef(null) },
    { title: 'Common Debugging Tools', ref: useRef(null) },
    { title: 'Debugging Best Practices', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col="#ff9800" sadow="#ffb74d" />
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
            Debugging
          </h2>
          <nav>
            {debuggingTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-orange-400 transition-colors">
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
            {debuggingTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getDebuggingTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getDebuggingTopicContent = (title) => {
  switch (title) {
    case 'Introduction to Debugging':
      return (
        <>
          <p className="text-lg">
            Debugging is the process of identifying, isolating, and fixing problems or bugs in software. It is an essential skill for improving code quality and application stability.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Core Concepts:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Bug identification
- Isolating the problematic code
- Applying fixes and testing`}
            </pre>
          </div>
        </>
      );
    case 'Console Logging':
      return (
        <>
          <p className="text-lg">
            Console logging is a basic yet powerful technique for inspecting program behavior during runtime. It helps developers quickly track variable values and program flow.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Example:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`console.log('Debug info:', variable);`}
            </pre>
          </div>
        </>
      );
    case 'Breakpoint Debugging':
      return (
        <>
          <p className="text-lg">
            Breakpoints allow developers to pause execution at a specific line of code. This enables a step-by-step examination of the code state and control flow.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">How It Works:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Set a breakpoint in your code editor
function example() {
  let a = 1;
  let b = 2;
  debugger; // Execution will pause here
  console.log(a + b);
}`}
            </pre>
          </div>
        </>
      );
    case 'Error Stack Tracing':
      return (
        <>
          <p className="text-lg">
            Error stack traces provide a snapshot of the call stack at the time an error occurs. This is crucial for pinpointing where and why a bug occurred.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Example Stack Trace:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`Error: Something went wrong
    at exampleFunction (app.js:45:13)
    at main (app.js:10:5)`}
            </pre>
          </div>
        </>
      );
    case 'Remote Debugging':
      return (
        <>
          <p className="text-lg">
            Remote debugging allows developers to diagnose and fix issues in applications running on remote devices or servers, using tools that connect over a network.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Tools:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Chrome DevTools for remote devices
- VSCode remote debugging extensions`}
            </pre>
          </div>
        </>
      );
    case 'Browser Developer Tools':
      return (
        <>
          <p className="text-lg">
            Modern browsers come with built-in developer tools that allow for real-time inspection of HTML, CSS, and JavaScript, making debugging more accessible and efficient.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Key Features:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Element inspection
- Network monitoring
- Performance analysis`}
            </pre>
          </div>
        </>
      );
    case 'Logging and Monitoring':
      return (
        <>
          <p className="text-lg">
            Logging and monitoring tools help track application performance and error occurrences in real time, providing insights that are essential for maintaining healthy applications.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Popular Tools:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Logstash, Kibana, and Elasticsearch (ELK Stack)
- Splunk
- Sentry`}
            </pre>
          </div>
        </>
      );
    case 'Debugging in Production':
      return (
        <>
          <p className="text-lg">
            Debugging in production involves identifying and resolving issues in a live environment. This must be done carefully to avoid impacting end users.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Considerations:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Use feature flags for safe rollouts
- Implement robust logging and error reporting
- Test fixes in a staging environment before production`}
            </pre>
          </div>
        </>
      );
    case 'Common Debugging Tools':
      return (
        <>
          <p className="text-lg">
            A variety of tools exist to aid debugging, each with its own strengths. Choosing the right tool depends on the issue at hand.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Examples:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Chrome DevTools
- VSCode Debugger
- Postman (for API testing)
- React Developer Tools`}
            </pre>
          </div>
        </>
      );
    case 'Debugging Best Practices':
      return (
        <>
          <p className="text-lg">
            Following best practices during debugging can save time and help avoid common pitfalls. Effective debugging is as much about strategy as it is about tools.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">Best Practices:</h3>
            <pre className="bg-gray-900 text-orange-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Reproduce the issue in a controlled environment
- Use systematic testing to isolate the problem
- Document findings and solutions for future reference`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Debugging;
