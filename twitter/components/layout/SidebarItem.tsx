import { IconType } from "react-icons";
import Link from "next/link";
interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <Link href={{
      pathname: href
    }}>
      <div className="flex flex-row items-center">
      <div className="relative
            rounded-full
            h-14
            w-14
            flex
            items-center
            justify-center
            p-4
            hover:bg-slate-300
            hover:bg-opacity-30
            cursor-pointer
            lg:hidden"
      >
        <Icon size={28} color="black" />
      </div>
      <div
        className="
            relative
            hidden
            lg:flex
            items-center
            gap-4
            p-4
            rounded-full
            hover:bg-slate-300
            hover:bg-opacity-30
            cursor-pointer">
        <Icon size={24} color="black"></Icon>
        <p className="hidden lg:block text-xl">
          {label}
        </p>
      </div>
    </div>
    </Link>
    
  );
};

export default SidebarItem;
