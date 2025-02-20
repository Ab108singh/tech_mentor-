import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const WebSecurity = () => {
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

  const securityTopics = [
    { title: 'Introduction to Web Security', ref: useRef(null) },
    { title: 'Common Threats', ref: useRef(null) },
    { title: 'Secure Authentication', ref: useRef(null) },
    { title: 'Encryption', ref: useRef(null) },
    { title: 'Cross-Site Scripting (XSS)', ref: useRef(null) },
    { title: 'SQL Injection', ref: useRef(null) },
    { title: 'Cross-Site Request Forgery (CSRF)', ref: useRef(null) },
    { title: 'Security Best Practices', ref: useRef(null) },
    { title: 'Firewalls and IDS', ref: useRef(null) },
    { title: 'Incident Response', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col="#00bcd4" sadow="#4dd0e1" />
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
            Web Security
          </h2>
          <nav>
            {securityTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-blue-400 transition-colors">
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
            {securityTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getWebSecurityTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getWebSecurityTopicContent = (title) => {
  switch (title) {
    case 'Introduction to Web Security':
      return (
        <>
          <p className="text-lg">
            Web security involves protecting websites and online services from various threats by addressing vulnerabilities in code and design.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Key Areas:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Vulnerability assessment
- Threat modeling
- Secure coding practices`}
            </pre>
          </div>
        </>
      );
    case 'Common Threats':
      return (
        <>
          <p className="text-lg">
            Common web security threats include cross-site scripting (XSS), SQL injection, and denial-of-service (DoS) attacks.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Examples:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- XSS: Injection of malicious scripts
- SQL Injection: Malicious SQL queries
- CSRF: Unauthorized command execution`}
            </pre>
          </div>
        </>
      );
    case 'Secure Authentication':
      return (
        <>
          <p className="text-lg">
            Secure authentication protects user data through techniques like multi-factor authentication and encrypted password storage.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Best Practices:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Use strong, hashed passwords
- Implement multi-factor authentication
- Monitor and limit login attempts`}
            </pre>
          </div>
        </>
      );
    case 'Encryption':
      return (
        <>
          <p className="text-lg">
            Encryption converts sensitive data into a secure format. It is essential for protecting information both in transit and at rest.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Techniques:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- TLS/SSL for secure transmission
- AES for data encryption
- RSA for key exchanges`}
            </pre>
          </div>
        </>
      );
    case 'Cross-Site Scripting (XSS)':
      return (
        <>
          <p className="text-lg">
            XSS attacks involve injecting malicious scripts into web pages. Prevent these attacks by validating and sanitizing all user inputs.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Prevention:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Sanitize user inputs
- Implement Content Security Policy (CSP)
- Encode outputs`}
            </pre>
          </div>
        </>
      );
    case 'SQL Injection':
      return (
        <>
          <p className="text-lg">
            SQL injection allows attackers to manipulate SQL queries. Use parameterized queries and input validation to mitigate this threat.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Mitigation:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Parameterized queries
- ORM libraries
- Input validation`}
            </pre>
          </div>
        </>
      );
    case 'Cross-Site Request Forgery (CSRF)':
      return (
        <>
          <p className="text-lg">
            CSRF tricks a user into executing unwanted actions on a web application where they're authenticated. Use anti-CSRF tokens and same-origin policies to protect against it.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Defenses:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Anti-CSRF tokens
- Same-origin checks
- Secure cookie attributes`}
            </pre>
          </div>
        </>
      );
    case 'Security Best Practices':
      return (
        <>
          <p className="text-lg">
            Following security best practices is critical for safeguarding web applications. This includes regular audits, updates, and employee training.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Recommendations:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Regular security audits
- Software updates
- User and staff training`}
            </pre>
          </div>
        </>
      );
    case 'Firewalls and IDS':
      return (
        <>
          <p className="text-lg">
            Firewalls and Intrusion Detection Systems (IDS) help monitor and filter traffic to defend against attacks.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Examples:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Network and application firewalls
- IDS/IPS solutions`}
            </pre>
          </div>
        </>
      );
    case 'Incident Response':
      return (
        <>
          <p className="text-lg">
            An effective incident response plan minimizes damage during security breaches. It includes steps for detection, containment, eradication, and recovery.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Steps:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Detect and identify incidents
- Contain and eradicate threats
- Recover and perform post-incident analysis`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default WebSecurity;
