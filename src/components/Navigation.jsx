import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="mx-28 bg-zinc-800 mt-6 p-3.5 rounded">
        <span className="mr-3"> Navigation : </span>
        <Link
          className="bg-zinc-700 px-3 py-1.5 rounded mr-3 hover:bg-zinc-900 duration-300 cursor-pointer"
          to={`/`}
        >
          Feed
        </Link>
        <Link
          className="bg-zinc-700 px-3 py-1.5 rounded mr-3 hover:bg-zinc-900 duration-300 cursor-pointer"
          to={`/post`}
        >
          Post
        </Link>
      </nav>
    );
};

export default Navigation;