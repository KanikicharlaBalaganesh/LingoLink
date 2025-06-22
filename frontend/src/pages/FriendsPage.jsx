import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const {
    data: friends = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError || friends.length === 0) {
    return <NoFriendsFound />;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend._id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
