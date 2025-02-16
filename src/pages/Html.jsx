import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './html.css';

const Html = () => {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const sidebarRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSidebarFixed(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
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
    <div className="font-sans">
      {/* Header */}
      <header ref={headerRef} className="w-full bg-gray-900 text-white z-50">
        <Navbar />
        <div className="flex justify-start gap-2 p-3 bg-gray-800 overflow-x-auto">
          {htmlTopics.map((topic, index) => (
            <button
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300 shadow-md"
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
      ? 'fixed top-0 h-screen ' 
      : 'absolute top-28 h-[calc(150vh-7rem)]'
  } left-0 w-64 bg-gray-900 text-white overflow-y-auto z-40 `}
>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">HTML Topics</h2>
          <nav>
            {htmlTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 rounded-lg transition-colors mb-1"
              >
                {topic.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 pt-28">
      <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 ">
            {htmlTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-white p-6 rounded-lg shadow-md mb-8 "
              >
                <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
                <div className="text-gray-700 mb-4">
                  {getTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// ... keep existing getTopicContent function

const getTopicContent = (title) => {
  switch (title) {
    case 'Introduction to HTML':
      return (
        <>
          <p>
            HTML (HyperText Markup Language) is the standard markup language for creating web pages.
            It provides the structure of a webpage and is often used with CSS and JavaScript.
          </p>
          <h3 className="font-semibold mt-4">Basic Structure:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
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
          <p className="mt-2">
            The <code>&lt;!DOCTYPE html&gt;</code> declaration defines the document type and HTML version.
          </p>
        </>
      );

    case 'HTML Tags':
      return (
        <>
          <p>
            HTML tags are the building blocks of web pages. They define elements like headings, 
            paragraphs, links, and more. Tags are usually in pairs with opening and closing tags.
          </p>
          <h3 className="font-semibold mt-4">Common Tags:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<h1>Heading</h1>
<p>Paragraph</p>
<a href="#">Link</a>
<img src="image.jpg" alt="Description">`}
          </pre>
          <p className="mt-2">
            Void elements like <code>&lt;img&gt;</code> don't require closing tags.
          </p>
        </>
      );

    case 'Headings':
      return (
        <>
          <p>
            Headings define content hierarchy with six levels from <code>&lt;h1&gt;</code> (most important)
            to <code>&lt;h6&gt;</code> (least important).
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<h1>Main Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>`}
          </pre>
          <p className="mt-2">
            Use headings sequentially for proper document structure and SEO.
          </p>
        </>
      );

    case 'Paragraphs':
      return (
        <>
          <p>
            Paragraphs are defined with <code>&lt;p&gt;</code> tags and automatically
            create vertical spacing between blocks of text.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<p>First paragraph text.</p>
<p>Second paragraph text.</p>`}
          </pre>
        </>
      );

    case 'Links':
      return (
        <>
          <p>
            Create hyperlinks using <code>&lt;a&gt;</code> tags with the <code>href</code> attribute
            specifying the destination URL.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<a href="https://example.com" target="_blank" rel="noopener">
  Visit Example
</a>`}
          </pre>
          <p className="mt-2">
            Use <code>target="_blank"</code> for new tab opening and <code>rel="noopener"</code> for security.
          </p>
        </>
      );

    case 'Images':
      return (
        <>
          <p>
            Embed images using <code>&lt;img&gt;</code> tags with required <code>src</code> and <code>alt</code> attributes.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<img 
  src="logo.png" 
  alt="Company Logo" 
  width="200" 
  height="100"
>`}
          </pre>
          <p className="mt-2">
            Always include descriptive alt text for accessibility.
          </p>
        </>
      );

    case 'Lists':
      return (
        <>
          <p>
            Create ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists
            with list items (<code>&lt;li&gt;</code>).
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<ul>
  <li>Unordered Item 1</li>
  <li>Unordered Item 2</li>
</ul>

<ol>
  <li>Ordered Item 1</li>
  <li>Ordered Item 2</li>
</ol>`}
          </pre>
        </>
      );

    case 'Tables':
      return (
        <>
          <p>
            Create data tables using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> for rows,
            <code>&lt;td&gt;</code> for data cells, and <code>&lt;th&gt;</code> for header cells.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
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
        </>
      );

    case 'Forms':
      return (
        <>
          <p>
            Create interactive forms with various input types: text, email, password, radio, checkbox, etc.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>`}
          </pre>
        </>
      );

    case 'Semantic Elements':
      return (
        <>
          <p>
            HTML5 semantic elements provide meaning to web page structure:
            <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>,
            <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
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
        </>
      );

    case 'HTML5 Features':
      return (
        <>
          <p>
            Key HTML5 features include native media support, semantic elements,
            canvas drawing, and improved form controls.
          </p>
          <h3 className="font-semibold mt-4">New Input Types:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<input type="email">
<input type="date">
<input type="color">
<input type="range">`}
          </pre>
        </>
      );

    case 'Audio & Video':
      return (
        <>
          <p>
            Embed media files directly using <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags.
          </p>
          <h3 className="font-semibold mt-4">Example:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
          </pre>
        </>
      );

    case 'Canvas & SVG':
      return (
        <>
          <p>
            Create graphics with <code>&lt;canvas&gt;</code> (bitmap) and <code>&lt;svg&gt;</code> (vector).
          </p>
          <h3 className="font-semibold mt-4">Examples:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<canvas id="myCanvas" width="200" height="100"></canvas>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`}
          </pre>
        </>
      );

    case 'SEO Basics':
      return (
        <>
          <p>
            Improve search engine visibility with proper HTML structure and metadata.
          </p>
          <h3 className="font-semibold mt-4">Essential SEO Elements:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`<meta name="description" content="Page description">
<meta name="keywords" content="HTML, CSS, JavaScript">
<title>Page Title</title>`}
          </pre>
          <p className="mt-2">
            Use semantic HTML and proper heading hierarchy for better SEO.
          </p>
        </>
      );

    default:
      return <p>Content coming soon...</p>;
  }
};

export default Html;
















