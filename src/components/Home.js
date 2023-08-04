import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../blog.png";
import { connect } from "react-redux";

const Home = ({ posts }) => {
  const postList = posts.length ? (
    posts.map((post) => (
      <div className="post card" key={post.id}>
        <img src={blogImage} alt="Post" />
        <div className="card-content">
          <Link to={"/" + post.id}>
            <span className="card-title blue-text">{post.title}</span>
          </Link>
        </div>
      </div>
    ))
  ) : (
    <p className="center">No post to show</p>
  );

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
