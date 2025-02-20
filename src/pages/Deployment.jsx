import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const Deployment = () => {
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

  const deploymentTopics = [
    { title: 'Introduction to Deployment', ref: useRef(null) },
    { title: 'CI/CD Pipelines', ref: useRef(null) },
    { title: 'Containerization', ref: useRef(null) },
    { title: 'Cloud Deployment', ref: useRef(null) },
    { title: 'Serverless Architecture', ref: useRef(null) },
    { title: 'Infrastructure as Code', ref: useRef(null) },
    { title: 'Monitoring and Logging', ref: useRef(null) },
    { title: 'Rollback Strategies', ref: useRef(null) },
    { title: 'Scaling and Load Balancing', ref: useRef(null) },
    { title: 'Deployment Best Practices', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col="#4caf50" sadow="#81c784" />
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
            Deployment
          </h2>
          <nav>
            {deploymentTopics.map((topic, index) => (
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
            {deploymentTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getDeploymentTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getDeploymentTopicContent = (title) => {
  switch (title) {
    case 'Introduction to Deployment':
      return (
        <>
          <p className="text-lg">
            Deployment is the process of releasing software to a production environment, ensuring that it is accessible and runs reliably for end users.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Key Steps:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Build the application
- Run tests
- Package and deploy
- Monitor post-deployment`}
            </pre>
          </div>
        </>
      );
    case 'CI/CD Pipelines':
      return (
        <>
          <p className="text-lg">
            Continuous Integration and Continuous Deployment (CI/CD) pipelines automate building, testing, and deploying applications, streamlining updates and releases.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example (GitLab CI):</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`stages:
  - build
  - test
  - deploy

build_job:
  stage: build
  script:
    - npm install
    - npm run build`}
            </pre>
          </div>
        </>
      );
    case 'Containerization':
      return (
        <>
          <p className="text-lg">
            Containerization packages applications with their dependencies, ensuring consistency across different environments using tools like Docker.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Dockerfile Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}
            </pre>
          </div>
        </>
      );
    case 'Cloud Deployment':
      return (
        <>
          <p className="text-lg">
            Cloud deployment leverages platforms like AWS, Azure, or Google Cloud to host and manage applications with scalable infrastructure.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example (AWS CLI):</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`aws deploy push \
  --application-name MyApp \
  --s3-location s3://mybucket/myapp.zip`}
            </pre>
          </div>
        </>
      );
    case 'Serverless Architecture':
      return (
        <>
          <p className="text-lg">
            Serverless architecture abstracts server management, letting you deploy functions that run in response to events, such as AWS Lambda or Azure Functions.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Configuration Snippet:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get`}
            </pre>
          </div>
        </>
      );
    case 'Infrastructure as Code':
      return (
        <>
          <p className="text-lg">
            Infrastructure as Code (IaC) allows you to manage and provision infrastructure through code, ensuring repeatable and consistent deployments.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Terraform Example:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}`}
            </pre>
          </div>
        </>
      );
    case 'Monitoring and Logging':
      return (
        <>
          <p className="text-lg">
            Post-deployment monitoring and logging help track application performance and troubleshoot issues quickly.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Tools & Techniques:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Use centralized logging (e.g., ELK stack)
- Monitor metrics with Prometheus or CloudWatch
- Set up alerts for anomalies`}
            </pre>
          </div>
        </>
      );
    case 'Rollback Strategies':
      return (
        <>
          <p className="text-lg">
            Rollback strategies ensure that if a deployment fails, you can revert to a previous stable version quickly and safely.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Common Approaches:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Blue/Green Deployments
- Canary Releases
- Automated rollback triggers`}
            </pre>
          </div>
        </>
      );
    case 'Scaling and Load Balancing':
      return (
        <>
          <p className="text-lg">
            Scaling and load balancing distribute incoming traffic across multiple instances to maintain performance under load.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Example Setup:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Use auto-scaling groups on AWS
- Configure load balancers to distribute traffic evenly`}
            </pre>
          </div>
        </>
      );
    case 'Deployment Best Practices':
      return (
        <>
          <p className="text-lg">
            Following best practices such as automation, thorough testing, and proper monitoring will help ensure a smooth deployment process.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Best Practices:</h3>
            <pre className="bg-gray-900 text-green-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`- Automate as much as possible
- Ensure robust testing pre-deployment
- Monitor continuously post-deployment
- Document and review deployment processes`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default Deployment;
