import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { title, body, id } = post;
  return (
    <div className="bg-zinc-800 p-6 rounded-lg">
      <h4 className="text-2xl mb-3">{title}</h4>
      <p>{body}</p>
      <Link
        to={`/card-details/${id}`}
        className="bg-zinc-700 block w-fit mt-3 px-4 py-1.5 rounded hover:bg-zinc-900 duration-300 cursor-pointer"
      >
        Details
      </Link>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard;
