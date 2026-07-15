import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Nav";

const ViewMyPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const fetchMyPosts = async () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    try {
      const response = await axios.post(
        "http://localhost:3030/viewmypost",
        {
          userId: userId,
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else if (Array.isArray(response.data.data)) {
        setPosts(response.data.data);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch your posts");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2 className="text-center mb-4">My Posts</h2>

        <div className="row">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title">My Post</h5>

                    <p className="card-text">
                      {post.message || post.Message}
                    </p>

                    <p className="text-muted">
                      User ID: {post.userId}
                    </p>
                  </div>

                  <div className="card-footer text-muted">
                    {post.postedDate
                      ? `Posted Date: ${post.postedDate}`
                      : "Posted Successfully"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>No Posts Found</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewMyPost;