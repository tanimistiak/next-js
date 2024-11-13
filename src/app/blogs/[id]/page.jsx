import React from "react";

export default function ViewBlogs({ params }) {
  console.log(params);
  const { id } = params;
  const blogs = [
    {
      id: 1,
      title: "The Rise of DevOps",
      author: "Tanim Istiak",
      publishedDate: "2024-11-13",
      tags: ["DevOps", "Career Switch", "Cloud Computing"],
      content: "In this article, we explore the growing field of DevOps...",
      imageUrl: "https://example.com/images/devops-article.jpg",
      readTime: "5 min",
      summary:
        "This blog discusses the evolution of DevOps, career prospects, and how software developers can transition to this field.",
      likes: 120,
      comments: [
        {
          user: "JohnDoe",
          comment: "Great insights on DevOps!",
          date: "2024-11-14",
        },
        {
          user: "JaneSmith",
          comment: "Really helpful for beginners considering DevOps!",
          date: "2024-11-15",
        },
      ],
    },
    {
      id: 2,
      title: "Building a Mood Detection System with AI",
      author: "Tanim Istiak",
      publishedDate: "2024-10-25",
      tags: ["AI", "Mood Detection", "Mental Health"],
      content:
        "With advances in AI, creating systems that understand human emotions is now possible...",
      imageUrl: "https://example.com/images/mood-detection.jpg",
      readTime: "7 min",
      summary:
        "An in-depth look into using AI and sentiment analysis to create mood detection systems for mental health applications.",
      likes: 90,
      comments: [
        {
          user: "AlexL",
          comment: "This is exactly what I needed for my final project!",
          date: "2024-10-26",
        },
      ],
    },
  ];
  const foundBlogs = blogs?.find((blog) => blog?.id == id);
  console.log(foundBlogs);
  return (
    <div>
      <h1>{foundBlogs?.title}</h1>
      <p>{foundBlogs?.author}</p>
    </div>
  );
}
