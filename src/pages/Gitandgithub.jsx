import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import StarTrail from '../components/StarTrail';

const GitAndGitHub = () => {
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

  const gitTopics = [
    { title: 'Introduction to Git', ref: useRef(null) },
    { title: 'Basic Commands', ref: useRef(null) },
    { title: 'Branching & Merging', ref: useRef(null) },
    { title: 'Remote Repositories', ref: useRef(null) },
    { title: 'GitHub Workflow', ref: useRef(null) },
    { title: 'Pull Requests', ref: useRef(null) },
    { title: 'Undoing Changes', ref: useRef(null) },
    { title: 'Git Hooks', ref: useRef(null) },
    { title: 'Advanced Techniques', ref: useRef(null) },
    { title: 'Collaboration Best Practices', ref: useRef(null) },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      <StarTrail col='#4285f4' sadow='#7baaf7'/>
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
            Git & GitHub Topics
          </h2>
          <nav>
            {gitTopics.map((topic, index) => (
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
            {gitTopics.map((topic, index) => (
              <div
                key={index}
                ref={topic.ref}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl mb-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 border border-gray-700"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  {topic.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {getGitTopicContent(topic.title)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const getGitTopicContent = (title) => {
  switch (title) {
    case 'Introduction to Git':
      return (
        <>
          <p className="text-lg">
            Git is a distributed version control system that helps developers track changes in source code during software development.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Key Concepts:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Distributed Version Control</li>
              <li>Commit History</li>
              <li>Staging Area</li>
              <li>Three-tree Architecture</li>
            </ul>
          </div>
        </>
      );
    case 'Basic Commands':
      return (
        <>
          <p className="text-lg">
            Essential Git commands for daily workflow management and version control.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Common Commands:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`git init        # Initialize new repository
git add .       # Stage all changes
git commit -m "message"  # Commit changes
git status      # Show working tree status`}
            </pre>
          </div>
        </>
      );
    case 'Branching & Merging':
      return (
        <>
          <p className="text-lg">
            Branching allows parallel development while merging combines different lines of development.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Example Workflow:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`git checkout -b new-feature   # Create and switch to new branch
# Make changes...
git commit -am "Add feature"
git checkout main
git merge new-feature`}
            </pre>
          </div>
        </>
      );
    case 'Remote Repositories':
      return (
        <>
          <p className="text-lg">
            Manage code in remote repositories like GitHub for collaboration and backup.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Remote Commands:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`git remote add origin <url>  # Add remote repository
git push -u origin main     # Push to remote
git clone <url>             # Clone repository
git fetch                   # Download remote changes`}
            </pre>
          </div>
        </>
      );
    case 'GitHub Workflow':
      return (
        <>
          <p className="text-lg">
            GitHub enhances Git with collaboration features like issue tracking and pull requests.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Typical Workflow:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Fork repository</li>
              <li>Clone locally</li>
              <li>Create feature branch</li>
              <li>Commit changes</li>
              <li>Push to fork</li>
              <li>Create Pull Request</li>
            </ol>
          </div>
        </>
      );
    case 'Pull Requests':
      return (
        <>
          <p className="text-lg">
            Pull requests enable code review and discussion before merging changes.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Creating a PR:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`# After pushing to your branch
gh pr create --title "New feature" --body "Description"
# Or through GitHub web interface`}
            </pre>
          </div>
        </>
      );
    case 'Undoing Changes':
      return (
        <>
          <p className="text-lg">
            Git provides multiple ways to undo changes at different stages.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Undo Commands:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`git reset HEAD~1        # Undo last commit (keep changes)
git checkout -- file    # Discard file changes
git revert <commit-hash>  # Create inverse commit`}
            </pre>
          </div>
        </>
      );
    case 'Git Hooks':
      return (
        <>
          <p className="text-lg">
            Hooks are scripts that run automatically before or after Git commands.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Common Hooks:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`pre-commit: Run tests before commit
pre-push: Run checks before pushing
commit-msg: Validate commit messages`}
            </pre>
          </div>
        </>
      );
    case 'Advanced Techniques':
      return (
        <>
          <p className="text-lg">
            Master advanced Git features for complex workflows and problem-solving.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Techniques:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interactive rebase</li>
              <li>Cherry-picking commits</li>
              <li>Stashing changes</li>
              <li>Bisecting for bugs</li>
            </ul>
          </div>
        </>
      );
    case 'Collaboration Best Practices':
      return (
        <>
          <p className="text-lg">
            Effective team collaboration requires good Git practices and communication.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Best Practices:</h3>
            <pre className="bg-gray-900 text-blue-300 p-5 rounded-xl overflow-x-auto border border-gray-700">
{`1. Commit often, perfect later
2. Write meaningful commit messages
3. Use .gitignore properly
4. Review PRs thoroughly
5. Follow semantic versioning`}
            </pre>
          </div>
        </>
      );
    default:
      return <p className="text-lg">Content coming soon...</p>;
  }
};

export default GitAndGitHub;