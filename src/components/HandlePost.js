import { useParams } from "react-router-dom";
import Post from "./Post";

const HandlePost = () => {
    const { post_id } = useParams(); 
  return <Post post_id={post_id} />;
};

export default HandlePost;