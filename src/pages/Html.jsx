import React, { useRef, useState, useEffect } from 'react';
import './Html.css'; // Include your CSS if needed
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Html = () => {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const sidebarRef = useRef(null);
  const sentinelRef = useRef(null);

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

  const htmlTopics = [
    { title: 'Introduction to HTML', ref: useRef(null) },
    { title: 'HTML Tags', ref: useRef(null) },
    { title: 'Headings', ref: useRef(null) },
    { title: 'Paragraphs', ref: useRef(null) },
    { title: 'Links', ref: useRef(null) },
    { title: 'Images', ref: useRef(null) },
    { title: 'Lists', ref: useRef(null) },
    { title: 'Tables', ref: useRef(null) },
    { title: 'Forms', ref: useRef(null) },
    { title: 'Semantic Elements', ref: useRef(null) },
    { title: 'HTML5 Features', ref: useRef(null) },
    { title: 'Audio & Video', ref: useRef(null) },
    { title: 'Canvas & SVG', ref: useRef(null) },
    { title: 'SEO Basics', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col='#1105f2' sadow='#0c69f5'/>
      <Header />
      <div ref={sentinelRef} className="absolute top-29 h-1 w-full" />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${
          isSidebarFixed
            ? 'fixed top-0 h-screen'
            : 'absolute top-29 h-[calc(100vh-7rem)]'
        } left-0 w-64 bg-gray-900 text-gray-300 overflow-y-auto z-40 border-r border-blue-700 transition-transform duration-300`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2 text-gray-200">
            HTML Topics
          </h2>
          <nav>
            {htmlTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-blue-900/50 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
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
            {htmlTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-blue-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getHtmlTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getHtmlTopicContent = (title) => {
  switch (title) {
    case 'Introduction to HTML':
      return (
        <>
          <p className="text-lg">
            HTML (HyperText Markup Language) is the standard markup language for creating web pages.
            It provides the structure of a webpage and is often used with CSS and JavaScript.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Basic Structure:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
            </pre>
          </div>
          <p className="text-lg mt-2">
            The <code>&lt;!DOCTYPE html&gt;</code> declaration defines the document type and HTML version.
          </p>
        </>
      );
    case 'HTML Tags':
      return (
        <>
          <p className="text-lg">
            HTML tags are the building blocks of web pages. They define elements like headings, paragraphs, links, and more.
            Tags are usually in pairs with opening and closing tags.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Common Tags:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<h1>Heading</h1>
<p>Paragraph</p>
<a href="#">Link</a>
<img src="image.jpg" alt="Description">`}
            </pre>
          </div>
          <p className="text-lg mt-2">
            Void elements like <code>&lt;img&gt;</code> don't require closing tags.
          </p>
        </>
      );
    case 'Headings':
      return (
        <>
          <p className="text-lg">
            Headings define content hierarchy with six levels from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<h1>Main Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>`}
            </pre>
          </div>
          <p className="text-lg mt-2">
            Use headings sequentially for proper document structure and SEO.
          </p>
        </>
      );
    case 'Paragraphs':
      return (
        <>
          <p className="text-lg">
            Paragraphs are defined with the <code>&lt;p&gt;</code> tag and automatically create vertical spacing between blocks of text.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<p>First paragraph text.</p>
<p>Second paragraph text.</p>`}
            </pre>
          </div>
        </>
      );
    case 'Links':
      return (
        <>
          <p className="text-lg">
            Create hyperlinks using the <code>&lt;a&gt;</code> tag with the <code>href</code> attribute specifying the destination URL.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<a href="https://example.com" target="_blank" rel="noopener">
  Visit Example
</a>`}
            </pre>
          </div>
          <p className="text-lg mt-2">
            Use <code>target="_blank"</code> for new tab opening and <code>rel="noopener"</code> for security.
          </p>
        </>
      );
    case 'Images':
      return (
        <>
          <p className="text-lg">
            Embed images using the <code>&lt;img&gt;</code> tag with required <code>src</code> and <code>alt</code> attributes.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<img 
  src="logo.png" 
  alt="Company Logo" 
  width="200" 
  height="100"
>`}
            </pre>
          </div>
          <p className="text-lg mt-2">
            Always include descriptive alt text for accessibility.
          </p>
        </>
      );
    case 'Lists':
      return (
        <>
          <p className="text-lg">
            Create ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists with list items (<code>&lt;li&gt;</code>).
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<ul>
  <li>Unordered Item 1</li>
  <li>Unordered Item 2</li>
</ul>

<ol>
  <li>Ordered Item 1</li>
  <li>Ordered Item 2</li>
</ol>`}
            </pre>
          </div>
        </>
      );
    case 'Tables':
      return (
        <>
          <p className="text-lg">
            Create data tables using the <code>&lt;table&gt;</code> tag, with <code>&lt;tr&gt;</code> for rows,
            <code>&lt;td&gt;</code> for data cells, and <code>&lt;th&gt;</code> for header cells.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>`}
            </pre>
          </div>
        </>
      );
    case 'Forms':
      return (
        <>
          <p className="text-lg">
            Create interactive forms with various input types like text, email, password, radio, checkbox, etc.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>`}
            </pre>
          </div>
        </>
      );
    case 'Semantic Elements':
      return (
        <>
          <p className="text-lg">
            HTML5 semantic elements provide meaning to the web page structure, such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code>.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<article>
  <header>
    <h2>Blog Post Title</h2>
  </header>
  <section>
    <p>Content section...</p>
  </section>
  <footer>
    <p>Author information</p>
  </footer>
</article>`}
            </pre>
          </div>
        </>
      );
    case 'HTML5 Features':
      return (
        <>
          <p className="text-lg">
            Key HTML5 features include native media support, new form controls, semantic elements, and more.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">New Input Types:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<input type="email">
<input type="date">
<input type="color">
<input type="range">`}
            </pre>
          </div>
        </>
      );
    case 'Audio & Video':
      return (
        <>
          <p className="text-lg">
            Embed media files directly using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
            </pre>
          </div>
        </>
      );
    case 'Canvas & SVG':
      return (
        <>
          <p className="text-lg">
            Create graphics with the <code>&lt;canvas&gt;</code> tag (for bitmap graphics) or the <code>&lt;svg&gt;</code> tag (for vector graphics).
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Examples:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<canvas id="myCanvas" width="200" height="100"></canvas>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`}
            </pre>
          </div>
        </>
      );
    case 'SEO Basics':
      return (
        <>
          <p className="text-lg">
            Improve search engine visibility with proper HTML structure and metadata.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Essential SEO Elements:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-blue-700">
{`<meta name="description" content="Page description">
<meta name="keywords" content="HTML, CSS, JavaScript">
<title>Page Title</title>`}
            </pre>
          </div>
          <p className="text-lg mt-2">
            Use semantic HTML and proper heading hierarchy for better SEO.
          </p>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Html;
