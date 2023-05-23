import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";

interface AvatarProps {
  userId: String;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, hasBorder, isLarge }) => {
  const data = {};
  const router = useRouter();

  const onClick = useCallback(
    (event: any) => {
      event?.stopPropagation();

      const url = `/profile/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`${hasBorder ? "border-2 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full
        hover:opcaity-90
        transition
        cursor-pointer
        relative
    `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
      />
    </div>
  );
};

export default Avatar;
