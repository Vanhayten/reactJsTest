import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";


const Post = ({ post, deletePost }) => {

  const handleDelete = () => {
    deletePost(post.id);
  };

  const postContent = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
      <div className="center">
        <button className="btn red" onClick={handleDelete}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <p className="center">Loading post...</p>
  );

  return <div className="container">{postContent}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find((post) => post.id === ownProps.post_id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
