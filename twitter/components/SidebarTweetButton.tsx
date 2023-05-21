import { useRouter } from "next/navigation";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div
        className="mt-6 rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-80 transition cursor-pointer lg:hidden"
            style={{backgroundColor: "rgb(29, 155, 240)"}}>
        <FaFeather size={24} color="white"></FaFeather>
      </div>

      <div
        className="mt-6 hidden lg:block px-4 py-2 rounded-full hover:bg-opacity-90 cursor-pointer transition"
        style={{backgroundColor: "rgb(29, 155, 240)"}}>
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Đăng Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
