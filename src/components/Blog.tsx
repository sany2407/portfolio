import React from 'react';

interface BlogPost {
  category: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      category: 'Development',
      readTime: '5 min read',
      title: 'Building Scalable Low-Code Solutions with Next.js',
      description:
        'Learn how to create efficient and scalable low-code platforms using Next.js and modern web technologies.',
      link: '#',
    },
    {
      category: 'Architecture',
      readTime: '8 min read',
      title: 'MERN Stack Architecture Best Practices',
      description:
        'Discover the best practices for architecting robust applications using the MERN stack.',
      link: '#',
    },
    {
      category: 'Performance',
      readTime: '6 min read',
      title: 'Optimizing React Applications for Performance',
      description:
        'Essential techniques for building high-performance React applications that scale.',
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-gray-400 text-xl">Insights and thoughts about web development</p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700 hover:border-blue-500 transition-all"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-neutral-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-blue-500">{post.category}</span>
                  <span className="mx-2 text-neutral-600">•</span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-blue-500 hover:text-blue-400"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
          >
            View All Articles
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;