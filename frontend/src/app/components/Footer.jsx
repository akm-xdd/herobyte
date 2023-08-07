import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-wrap justify-center w-full text-offpink bg-black py-8" id="footer">
      <div className="max-w-[85rem] w-full px-4 sm:flex sm:items-center">
        <div className="w-full sm:w-1/3 flex justify-center mb-5 sm:mb-0">
          <Image
            className="object-contain m-10 p-5 flex-none"
            src={"/images/Logo-removebg.png"}
            width={250}
            height={250}
            alt="LOGO"
          />
        </div>

        <div className="w-full sm:w-1/3 text-xl ml-[100px] ">
          <ul className="font-secondary text-center sm:text-left">
            <h4 className="font-primary text-2xl mb-2 ">
              <span className=" cursor-pointer">
                {" "}
                <span className="hover:text-gray-400">CONTACT US</span>
              </span>
            </h4>
            <li>
              <a className=" flex items-center" href="#">
                <FaInstagram className="mr-2" /><span className="hover:text-gray-400">INSTAGRAM</span>
              </a>
            </li>
            <li>
              <a className=" flex items-center" href="#">
                <MdOutlineMail className="mr-2" /><span className="hover:text-gray-400">EMAIL</span>
              </a>

            </li>
            <li>
              <a className=" flex items-center" href="#">
                <FaLinkedin className="mr-2" /><span className="hover:text-gray-400">LINKEDIN</span>
              </a>
            </li>
            <li>
              <a className=" flex items-center" href="#">
                <FaGithub className="mr-2" /><span className="hover:text-gray-400">GITHUB</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/3">
          <p className="font-primary text-center sm:text-left">
            DON&apos;T JUST READ! CONTRIBUTE. <br /> <br />
            GET IN TOUCH WITH ME AND <br />
            I&apos;LL SHARE Y0UR THOUGHTS. <br /> <br />
            I AM ALWAYS ALL EARS.
          </p>
        </div>
      </div>
      <p className="font-secondary flex items-center justify-center text-l">
        <span className="font-sans text-l">&copy;</span>&nbsp; ANAND MISHRA
        2023.&nbsp; ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

export default Footer;
