import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="bg-zinc-800 p-6 rounded-lg">
      <h4 className="text-2xl mb-3">{title}</h4>
      <p>{body}</p>
      <button className="bg-zinc-700 mt-3 px-4 py-1.5 rounded hover:bg-zinc-900 duration-300 cursor-pointer">
        Details
      </button>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
