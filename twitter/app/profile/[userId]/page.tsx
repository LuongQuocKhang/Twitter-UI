'use client'

import Header from "@/app/Layout/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  username: string;
}
const UserView = (searchParams: any) => {
  const router  = useRouter();

  const data: User = {
    id: "1",
    name: "User so 1",
    username: "@admin124"
  };

  return (
    
    <>
      <Header showBackArrow label={data.name} />
      <UserHero userId={data.id}/>
      <UserBio userId={data.id}/>
    </>
  );
};

export default UserView;
