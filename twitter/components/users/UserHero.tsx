import Image from "next/image";
import Avatar from "../Avatar";

interface UserHeroProps {
    userId: string
}
interface User {
    id: string;
    name: string;
    username: string;
    coverImage: string
  }
const UserHero: React.FC<UserHeroProps> = ({
    userId
}) => {
    const data: User = {
        id: "1",
        name: "User so 1",
        username: "@admin124",
        coverImage: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
      };
    return ( 
        <div className="bg-neutral-700 h-44 relative">
            <Image
                src={data.coverImage}
                fill
                alt="Cover Image"
                style={{objectFit: 'cover'}}/>
            <div className="absolute -bottom-16 left-4">
                <Avatar userId={data.id} isLarge hasBorder/>
            </div>
        </div>
     );
}
 
export default UserHero;