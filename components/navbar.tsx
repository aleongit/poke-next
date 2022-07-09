import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  console.log("a navbar!");
  const router = useRouter();
  const { view } = router.query;
  console.log(view);

  const active =
    "inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white";
  const no_active =
    "inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4";

  return (
    <>
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-center">
          <li className="mr-3">
            <Link href={{ pathname: "/", query: { view: "grid" } }}>
              <a className={view === "grid" ? active : no_active}>Grid</a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href={{ pathname: "/", query: { view: "list" } }}>
              <a className={view === "list" ? active : no_active}>List</a>
            </Link>
          </li>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
              href="#"
            >
              {view}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
