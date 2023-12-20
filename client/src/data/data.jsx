import { FaPuzzlePiece, FaQuestion } from "react-icons/fa";
import { MdDashboard, MdOutlineContactMail } from "react-icons/md";
import { PiFlowerTulipDuotone } from "react-icons/Pi";

export const navigationLinks = [
  {
    title: "Dashboard",
    link: "/",
    icon: <MdDashboard size={25} />,
  },
  {
    title: "Accounts",
    link: "/accounts",
    icon: <FaPuzzlePiece size={25} />,
  },
  {
    title: "Perks",
    link: "/perks",
    icon: <PiFlowerTulipDuotone size={25} />,
  },
  {
    title: "FAQ",
    link: "/faq",
    icon: <FaQuestion size={25} />,
  },
  {
    title: "Support",
    link: "/support",
    icon: <MdOutlineContactMail size={25} />,
  },
];
