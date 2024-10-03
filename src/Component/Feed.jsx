import React, { useState } from 'react';

// Sample JSON data representing posts
const postsData = [
  {
    id: 1,
    user: {
      name: "Bruce Wayne",
      handle: "@batman",
      profilePic: "https://i.pravatar.cc/40?img=12"
    },
    content: "Gotham needs me, but first coffee. Early mornings are always better when you start with a fresh cup of coffee in the Batcave. It helps me focus on planning tonight's patrol route, dealing with Gotham's villains, and keeping an eye on Wayne Enterprises. Alfred always knows just how I like it.",
    image: "",
    timestamp: "2h",
    likes: 120,
    shares: 15,
    comments: [
      { user: "Alfred", comment: "As always, sir, I'll prepare your coffee." },
      { user: "Selina", comment: "Don't forget the cat food this time!" },
      { user: "Commissioner Gordon", comment: "We could use your help in Gotham tonight." },
      { user: "Harvey Dent", comment: "Maybe it's time for a break, Bruce." },
      { user: "Lucius Fox", comment: "I'll have the Batmobile ready in 10." }
    ]
  },
  {
    id: 2,
    user: {
      name: "Clark Kent",
      handle: "@superman",
      profilePic: "https://i.pravatar.cc/40?img=20"
    },
    content: "It's a bird, it's a plane... nope, just me flying around the world in record time! While Metropolis stays quiet, I managed to circle the globe twice. Nothing feels better than watching the sunrise from space. I might just make this my morning routine.",
    image: "https://images.unsplash.com/photo-1517429128955-67ff5c1e29da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "3h",
    likes: 235,
    shares: 34,
    comments: [
      { user: "Lois Lane", comment: "You always make flying look easy." },
      { user: "Jimmy Olsen", comment: "Can I get a ride sometime?" },
      { user: "Lex Luthor", comment: "You won't be flying around much longer." },
      { user: "Diana Prince", comment: "Nice view up there?" },
      { user: "Bruce Wayne", comment: "Stop showing off, Kent." }
    ]
  },
  {
    id: 3,
    user: {
      name: "Diana Prince",
      handle: "@wonderwoman",
      profilePic: "https://i.pravatar.cc/40?img=15"
    },
    content: "Training to be better every day. 🛡️ There's no limit to what I can achieve with the right mindset. I'm ready for the next battle—whether it's against villains, mythical creatures, or just pushing myself to improve. Strength, honor, and discipline guide me in every move.",
    image: "",
    timestamp: "5h",
    likes: 198,
    shares: 25,
    comments: [
      { user: "Bruce Wayne", comment: "Impressive skills as always, Diana." },
      { user: "Clark Kent", comment: "You make us all look bad." },
      { user: "Steve Trevor", comment: "Keep pushing! You're unstoppable." },
      { user: "Barry Allen", comment: "I wish I had your discipline." },
      { user: "Arthur Curry", comment: "The sea calls, but it can wait." }
    ]
  }
];

const Feed = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  // Toggle the visibility of comments
  const toggleComments = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className=" text-white w-full h-full p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Home</h2>
      {/* Rendering posts */}
      {postsData.map(post => (
        <div key={post.id} className="flex flex-col gap-4 border-b border-slate-700 pb-6 mb-6">
          <div className="flex items-start gap-4">
            {/* Profile Picture */}
            <img src={post.user.profilePic} alt={post.user.name} className="w-12 h-12 rounded-full" />
            
            {/* Post Content */}
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                {/* User Info */}
                <div className="flex items-center gap-2">
                  <span className="font-bold">{post.user.name}</span>
                  <span className="text-slate-500">{post.user.handle}</span>
                  <span className="text-slate-500">· {post.timestamp}</span>
                </div>
              </div>

              {/* Post Text */}
              <p className="text-white mt-2">
                {post.content}
              </p>

              {/* Post Image (if available) */}
              {post.image && (
                <img src={post.image} alt="Post visual" className="rounded-lg mt-2" />
              )}

              {/* Post Actions: Likes, Shares, Comments */}
              <div className="flex items-center justify-between text-slate-500 mt-4">
                <div className="flex items-center gap-2">
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => toggleComments(post.id)}
                  >
                    💬 {post.comments.length} Comments
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="cursor-pointer hover:underline">👍 {post.likes} Likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="cursor-pointer hover:underline">🔁 {post.shares} Shares</span>
                </div>
              </div>

              {/* Comments Section - Collapsible */}
              {expandedPosts[post.id] && (
                <div className="mt-4">
                  {post.comments.map((comment, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <span className="font-bold">{comment.user}:</span>
                      <span className="text-slate-300">{comment.comment}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
