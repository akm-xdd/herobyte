import Image from "next/image";

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
            <h4 className="font-primary text-xl mb-2 ">
              <span className="hover:text-gray-400 cursor-pointer">
                {" "}
                CONTACT US{" "}
              </span>
            </h4>
            <li>
              <a className="hover:text-gray-400" href="#">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                EMAIL
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                LINKEDIN
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                GITHUB
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/3">
          <p className="font-primary text-center sm:text-left">
            DON&apos;T JUST READ! CONTRIBUTE. <br /> <br />
            GET IN TOUCH WITH US AND <br />
            WE&apos;LL SHARE Y0UR THOUGHTS. <br /> <br />
            WE ARE ALWAYS ALL EARS.
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
