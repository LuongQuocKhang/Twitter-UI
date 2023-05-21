'use client'

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface HeaderProps {
    label: string,
    showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({label, showBackArrow}) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return <div className="border-b-[1px] border-neutral-800 p-5">
    <div className="flex flex-row items-center gap-2">
        {
            showBackArrow && (
                <AiOutlineArrowLeft />
            )
        }
        <h1> <strong> {label} </strong> </h1>
    </div>
  </div>;
};

export default Header;
