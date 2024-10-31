import React from 'react';
import './Blogs.css'; 

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      content: 'React Hooks allow you to use state and other React features without writing a class...',
      date: 'October 10, 2024',
      author: 'John Doe',
      link: '/blog/understanding-react-hooks'
    },
    {
      id: 2,
      title: 'A Guide to CSS Grid',
      content: 'CSS Grid is a two-dimensional layout system that makes it easy to create complex layouts...',
      date: 'October 15, 2024',
      author: 'Jane Smith',
      link: '/blog/a-guide-to-css-grid'
    },
    {
      id: 3,
      title: 'Exploring the New Features of ES2024',
      content: 'The latest version of JavaScript, ES2024, introduces several new features that simplify development...',
      date: 'October 20, 2024',
      author: 'Alice Johnson',
      link: '/blog/exploring-es2024'
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js',
      content: 'Node.js is a powerful tool for building scalable APIs. In this article, we will explore the basics...',
      date: 'October 25, 2024',
      author: 'Michael Brown',
      link: '/blog/building-restful-apis'
    },
    {
      id: 5,
      title: 'Tips for Optimizing Your React App',
      content: 'Optimizing your React application is crucial for performance. Here are some tips to consider...',
      date: 'October 30, 2024',
      author: 'Sarah Wilson',
      link: '/blog/tips-for-optimizing-react'
    },
    {
      id: 6,
      title: 'Getting Started with TypeScript',
      content: 'TypeScript is a superset of JavaScript that adds static types. In this article, we’ll cover the basics...',
      date: 'November 1, 2024',
      author: 'Chris Evans',
      link: '/blog/getting-started-with-typescript'
    },
    {
      id: 7,
      title: 'An Introduction to GraphQL',
      content: 'GraphQL is a query language for APIs that allows clients to request only the data they need...',
      date: 'November 5, 2024',
      author: 'Emma Watson',
      link: '/blog/introduction-to-graphql'
    },
    {
      id: 8,
      title: 'The Future of Web Development',
      content: 'The web development landscape is always changing. Here’s what the future holds for developers...',
      date: 'November 10, 2024',
      author: 'Robert Downey Jr.',
      link: '/blog/future-of-web-development'
    }
  ];

  return (
    <div className="blog-container">
      <h2>Latest Blogs</h2>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-author">by {blog.author}</p>
            <p>{blog.content}</p>
            <a href={blog.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
