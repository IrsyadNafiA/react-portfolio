import { Link } from "react-scroll";

const NavbarLink = ({ href }) => {
  return (
    <Link
      activeClass="active"
      to={`${href}`}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="capitalize block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
    >
      {`${href}`}
    </Link>
  );
};

export default NavbarLink;
