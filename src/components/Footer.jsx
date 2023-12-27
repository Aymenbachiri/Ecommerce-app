import coding from "../assets/coding.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white h-full rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Aymen Store™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <p>Made by AYMEN BACHIRI</p>
            <img style={{ width: "50px" }} src={coding} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
