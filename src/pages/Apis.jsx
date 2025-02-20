import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const APIs = () => {
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

  const apiTopics = [
    { title: 'REST API Basics', ref: useRef(null) },
    { title: 'HTTP Methods', ref: useRef(null) },
    { title: 'Status Codes', ref: useRef(null) },
    { title: 'Endpoint Design', ref: useRef(null) },
    { title: 'Authentication', ref: useRef(null) },
    { title: 'Rate Limiting', ref: useRef(null) },
    { title: 'Error Handling', ref: useRef(null) },
    { title: 'Pagination', ref: useRef(null) },
    { title: 'Versioning', ref: useRef(null) },
    { title: 'Documentation', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col='#a855f7' sadow='#c084fc'/>
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
            API Development
          </h2>
          <nav>
            {apiTopics.map((topic, index) => (
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
            {apiTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getApiTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getApiTopicContent = (title) => {
  switch (title) {
    case 'REST API Basics':
      return (
        <>
          <p className="text-lg">
            REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Key Principles:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Client-Server architecture
- Stateless communication
- Cacheable responses
- Uniform interface
- Layered system`}
            </pre>
          </div>
        </>
      );
    case 'HTTP Methods':
      return (
        <>
          <p className="text-lg">
            Standard HTTP methods define the action to be performed on resources.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Common Methods:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`GET    - Retrieve resource
POST   - Create new resource
PUT    - Update entire resource
PATCH  - Partial update
DELETE - Remove resource`}
            </pre>
          </div>
        </>
      );
    case 'Status Codes':
      return (
        <>
          <p className="text-lg">
            HTTP status codes indicate the result of the server's attempt to process the request.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Common Codes:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`200 OK - Successful request
201 Created - Resource created
400 Bad Request - Invalid input
401 Unauthorized - Authentication needed
404 Not Found - Resource not found
500 Server Error - Internal server error`}
            </pre>
          </div>
        </>
      );
    case 'Endpoint Design':
      return (
        <>
          <p className="text-lg">
            Well-designed endpoints follow consistent naming conventions and resource hierarchy.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Example Structure:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`GET    /api/v1/users
POST   /api/v1/users
GET    /api/v1/users/{id}
PUT    /api/v1/users/{id}
DELETE /api/v1/users/{id}`}
            </pre>
          </div>
        </>
      );
    case 'Authentication':
      return (
        <>
          <p className="text-lg">
            Secure API access using authentication methods like API keys, OAuth, or JWT.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">JWT Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
            </pre>
          </div>
        </>
      );
    case 'Rate Limiting':
      return (
        <>
          <p className="text-lg">
            Protect your API from abuse by limiting the number of requests from a client.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Headers Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 997
X-RateLimit-Reset: 1629458237`}
            </pre>
          </div>
        </>
      );
    case 'Error Handling':
      return (
        <>
          <p className="text-lg">
            Consistent error responses help clients understand and handle issues.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Error Response:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`{
  "error": {
    "code": "invalid_request",
    "message": "Missing required field: email",
    "status": 400
  }
}`}
            </pre>
          </div>
        </>
      );
    case 'Pagination':
      return (
        <>
          <p className="text-lg">
            Handle large datasets efficiently with pagination techniques.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Cursor Pagination:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`GET /api/v1/posts?limit=25&after=MjAyMy0wNy0wMVQwMDowMDowMFo=`}
            </pre>
          </div>
        </>
      );
    case 'Versioning':
      return (
        <>
          <p className="text-lg">
            Maintain API stability while evolving with proper versioning strategies.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Versioning Methods:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`1. URL Path: /api/v1/resource
2. Header: Accept: application/vnd.myapi.v1+json
3. Query Parameter: /api/resource?version=1`}
            </pre>
          </div>
        </>
      );
    case 'Documentation':
      return (
        <>
          <p className="text-lg">
            Comprehensive documentation is crucial for API adoption and developer experience.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">OpenAPI Example:</h3>
            <pre className="bg-gray-900 text-purple-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`openapi: 3.0.0
info:
  title: Sample API
  version: 1.0.0
paths:
  /users:
    get:
      summary: List users
      responses:
        '200':
          description: A list of users`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default APIs;