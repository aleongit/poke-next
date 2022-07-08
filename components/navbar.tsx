const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-center">
          <li className="mr-3">
            <a
              className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              href="#"
            >
              Active Pill
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              Pill
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
              href="#"
            >
              Disabled Pill
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
