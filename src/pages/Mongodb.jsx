import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';

const MongoDB = () => {
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

  const mongodbTopics = [
    { title: 'Introduction to MongoDB', ref: useRef(null) },
    { title: 'CRUD Operations', ref: useRef(null) },
    { title: 'Schema Design', ref: useRef(null) },
    { title: 'Indexing & Aggregation', ref: useRef(null) },
    { title: 'Using Mongoose', ref: useRef(null) },
    { title: 'Data Modeling', ref: useRef(null) },
    { title: 'Performance Optimization', ref: useRef(null) },
    { title: 'Replication & Sharding', ref: useRef(null) },
    { title: 'Backup & Restore', ref: useRef(null) },
    { title: 'Security Best Practices', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
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
            MongoDB Topics
          </h2>
          <nav>
            {mongodbTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(topic.ref)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-800 rounded-lg transition-all duration-300 mb-2 hover:translate-x-2 group"
              >
                <span className="group-hover:text-emerald-400 transition-colors">
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
            {mongodbTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getMongoDBTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getMongoDBTopicContent = (title) => {
  switch (title) {
    case 'Introduction to MongoDB':
      return (
        <>
          <p className="text-lg">
            MongoDB is a NoSQL database known for its flexibility and scalability. It stores data in JSON-like documents.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Overview:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Connect to MongoDB using the native driver
const { MongoClient } = require('mongodb');
const uri = "your_mongodb_connection_string";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);`}
            </pre>
          </div>
        </>
      );
    case 'CRUD Operations':
      return (
        <>
          <p className="text-lg">
            CRUD operations allow you to create, read, update, and delete documents within a MongoDB collection.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Example:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Insert a document
await collection.insertOne({ name: "Alice", age: 30 });

// Find a document
const user = await collection.findOne({ name: "Alice" });

// Update a document
await collection.updateOne({ name: "Alice" }, { $set: { age: 31 } });

// Delete a document
await collection.deleteOne({ name: "Alice" });`}
            </pre>
          </div>
        </>
      );
    case 'Schema Design':
      return (
        <>
          <p className="text-lg">
            Although MongoDB is schema-less, designing a consistent structure can improve data integrity and query performance.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Consideration:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`{
  _id: ObjectId("..."),
  name: "Product Name",
  price: 29.99,
  category: "Books",
  inStock: true,
  tags: ["fiction", "bestseller"]
}`}
            </pre>
          </div>
        </>
      );
    case 'Indexing & Aggregation':
      return (
        <>
          <p className="text-lg">
            Indexes boost query performance, and aggregation pipelines allow for complex data processing and transformation.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Aggregation Example:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`db.orders.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
]);`}
            </pre>
          </div>
        </>
      );
    case 'Using Mongoose':
      return (
        <>
          <p className="text-lg">
            Mongoose is an ODM for MongoDB and Node.js that helps define schemas and models to interact with your database.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Example:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
`}
            </pre>
          </div>
        </>
      );
    case 'Data Modeling':
      return (
        <>
          <p className="text-lg">
            Effective data modeling in MongoDB involves structuring your documents to optimize for your application's query patterns.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Tip:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Denormalize data for faster reads
{
  _id: ObjectId("..."),
  orderNumber: "12345",
  customer: {
    name: "Alice",
    email: "alice@example.com"
  },
  items: [
    { product: "Book", quantity: 2 },
    { product: "Pen", quantity: 5 }
  ]
}`}
            </pre>
          </div>
        </>
      );
    case 'Performance Optimization':
      return (
        <>
          <p className="text-lg">
            Optimize MongoDB performance by tuning queries, creating appropriate indexes, and designing efficient schemas.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Example:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Create an index on the "name" field
db.collection.createIndex({ name: 1 });`}
            </pre>
          </div>
        </>
      );
    case 'Replication & Sharding':
      return (
        <>
          <p className="text-lg">
            Replication provides high availability while sharding distributes data across servers for scalability.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Concept:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Enable sharding on a database
sh.enableSharding("myDatabase");

// Shard a collection
sh.shardCollection("myDatabase.myCollection", { _id: 1 });`}
            </pre>
          </div>
        </>
      );
    case 'Backup & Restore':
      return (
        <>
          <p className="text-lg">
            Regular backups and a reliable restore process are essential for data integrity in MongoDB.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Example:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Backup using mongodump
mongodump --uri="your_connection_string"

// Restore using mongorestore
mongorestore --uri="your_connection_string" dump/`}
            </pre>
          </div>
        </>
      );
    case 'Security Best Practices':
      return (
        <>
          <p className="text-lg">
            Secure your MongoDB deployment by enabling authentication, using TLS/SSL, and following best practices for access control.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Security Tip:</h3>
            <pre className="bg-gray-900 text-emerald-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`// Enable authentication in mongod.conf
security:
  authorization: "enabled"`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default MongoDB;
