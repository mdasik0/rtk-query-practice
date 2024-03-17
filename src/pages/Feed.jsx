import PostCard from "../components/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const { data } = useGetPostsQuery();

  return (
    <div className="w-screen text-white h-full">
      <div className="h-full mx-28 py-6 flex flex-col gap-6">
        {data?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
