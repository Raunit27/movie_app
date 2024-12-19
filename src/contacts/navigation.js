import { MdHome } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

 export const navigation = [
    {
        label: "Tv show",
        href: "/tv",
        icon:<PiTelevisionLight/>
    },
    {
        label: "Movies",
        href: "/movie",
        icon:<RiMovie2Line/>
    }
]

export const mobileNavigation =[
    {
        label:"home",
        href:"/",
        icon: <MdHome/>
    },
      ...navigation,
    {
        label:"search",
        href:"/search",
        icon: <IoSearchOutline/>
    }

]
