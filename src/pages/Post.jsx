import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import { useSetPostsMutation } from "../redux/features/api/baseApi";

const Post = () => {
  const { register, handleSubmit } = useForm();

  const [setPost, {data: post, isLoading}] = useSetPostsMutation()

  const onSubmit = (data) => {
    setPost(data)
    
};

console.log(post)
  return (
    <div className="w-screen text-white h-full">
      <Navigation />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full mx-28 py-6 flex flex-col gap-6"
      >
        <div className="flex w-full items-center gap-3">
          <input
            className="bg-transparent w-full border-zinc-600 border-2 rounded py-1.5 px-3"
            type="text"
            placeholder="Enter your text here..."
            name="post"
            id="post"
            {... register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-700 px-6 py-2 rounded hover:bg-zinc-900 duration-300 cursor-pointer"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
