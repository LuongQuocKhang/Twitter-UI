import Avatar from "../Avatar";

interface User {
  id: string;
  name: string;
  username: string;
}

const Followbar = () => {
  const users: User[] = [
    {
      id: "1",
      name: "User number 1",
      username: "admin124",
    },
	{
		id: "2",
		name: "User number 2",
		username: "testfollower1",
	  },
  ];

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutural-800 rouned-xl p-4">
        <h2 className="text-black text-xl font-semibold">Who to follows</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user) => (
            <div key={parseInt(user.id)} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-black font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Followbar;
