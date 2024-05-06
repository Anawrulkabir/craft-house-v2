import { PiMapPinThin } from 'react-icons/pi'
import { IoIosGlobe } from 'react-icons/io'
import '../uitils/HoverAnimation/hover.css'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { CiShoppingCart } from 'react-icons/ci'
// import { HiMenuAlt2 } from 'react-icons/hi'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const { logOut } = useContext(AuthContext)

  const location = useLocation()
  // const navigate = useNavigate()
  //   name, metadata, photo, mail

  // const location = useLocation()
  // const navigate = useNavigate()

  // console.log(location, navigate)
  const handleSignOut = () => {
    logOut()
  }

  const handleGoBack = () => {
    window.history.back()
  }

  // const handleAddItemBtn = () => {
  // setTimeout(() => {

  // !user && toast.success('You need to signin to add your product')
  // setTimeout(() => {
  //   navigate(user ? '/addItem' : '/login')
  // }, 2000)

  // location.state == location.pathname
  // }, 3000)
  // toast.success('You need to signin to add your product')
  // navigate(location?.state ? location.state : '/')
  // }
  return (
    <div className="bg-[#D5E3E0]">
      <div className="hidden lg:block">
        <ul className="flex gap-4 justify-end px-8 bg-main py-[9px] text-white text-sm font-light">
          {location.pathname !== '/' && (
            <li className="flex-1 text-zinc-300">
              <button
                onClick={handleGoBack}
                // to={location.state}
                // to={location.state ? location.state : '/'}
                className="inline-block"
              >
                <div className="flex items-center gap-[2px]">
                  <MdOutlineKeyboardArrowLeft className="text-xl" />{' '}
                  <div>Back</div>
                </div>
              </button>
            </li>
          )}

          <li>
            <Link to="/allItem">All Art & Craft</Link>
          </li>
          <li>
            <Link
              // onClick={handleAddItemBtn}
              className="hover:cursor-pointer"
              to="/addItem"
            >
              Publish Your Product
            </Link>
          </li>
          {user && (
            <li>
              <Link to={`/user/${user.email}`}>My Art & Craft List</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to={`/favourite/${user.email}`}>Bookmarks</Link>
            </li>
          )}
          {user && (
            <li className="tooltip tooltip-bottom" data-tip="Cart">
              <Link to={`/cart/${user.email}`}>
                <CiShoppingCart className="text-xl " />
              </Link>
            </li>
          )}
          <li className="flex gap-2 items-center">
            <PiMapPinThin></PiMapPinThin>
            <a href="">Bangladesh</a>
          </li>
          <li className="flex gap-2 items-center">
            <IoIosGlobe></IoIosGlobe>
            <a href="">English (US)</a>
          </li>
        </ul>
      </div>

      <div className="navbar bg-main text-zinc-200 lg:hidden block">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* hamburger menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-green-700 text-lg font-bold "
            >
              <li>
                <Link to="/allItem">All Art & Craft</Link>
              </li>
              <li>
                <Link
                  // onClick={handleAddItemBtn}
                  className="hover:cursor-pointer"
                  to="/addItem"
                >
                  Publish Your Product
                </Link>
              </li>
              {user && (
                <li>
                  <Link to={`/user/${user.email}`}>My Art & Craft List</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to={`/favourite/${user.email}`}>Bookmarks</Link>
                </li>
              )}
              {user && (
                <li className="tooltip tooltip-bottom" data-tip="Cart">
                  <Link to={`/cart/${user.email}`}>
                    <CiShoppingCart className="text-xl " />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="">
            {location.pathname !== '/' && (
              <div className=" text-zinc-300">
                <button
                  onClick={handleGoBack}
                  // to={location.state}
                  // to={location.state ? location.state : '/'}
                  className="inline-block"
                >
                  <div className="flex items-center gap-[2px] justify-center pt-1">
                    <MdOutlineKeyboardArrowLeft className="text-xl" />{' '}
                    <div>Back</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-black">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
              <Link to="/allItem">All Art & Craft</Link>
            </li>
            <li>
              <Link
                // onClick={handleAddItemBtn}
                className="hover:cursor-pointer"
                to="/addItem"
              >
                Publish Your Product
              </Link>
            </li>
            {user && (
              <li>
                <Link to={`/user/${user.email}`}>My Art & Craft List</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to={`/favourite/${user.email}`}>Bookmarks</Link>
              </li>
            )}
            {user && (
              <li className="tooltip tooltip-bottom" data-tip="Cart">
                <Link to={`/cart/${user.email}`}>
                  <CiShoppingCart className="text-xl " />
                </Link>
              </li>
            )}
            <li className="flex gap-2 items-center">
              <PiMapPinThin></PiMapPinThin>
              <a href="">Bangladesh</a>
            </li>
            <li className="flex gap-2 items-center">
              <IoIosGlobe></IoIosGlobe>
              <a href="">English (US)</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-2">
          <ul className="flex flex-row">
            <li className="flex gap-2 items-center">
              <IoIosGlobe></IoIosGlobe>
              <a href="">English (US)</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar lg:px-8 flex justify-between items-center  lg:flex-row ">
        <div className="flex gap-12">
          <Link
            to="/"
            className=" lg:text-3xl text-2xl tracking-tighter font-extrabold leading-[3px] relative mx-3 "
          >
            craftpaper
            <span className="text-[6px] font-semibold tracking-normal leading-none absolute  -right-3 lg:top-3 -top-1 ">
              TM
            </span>
          </Link>
        </div>
        <div className="">
          <div className="hidden lg:flex items-center justify-center border mx-10 px-[2px] my-0 py-0 rounded-l-full rounded-r-full  ">
            <div className=" py-3 px-3 pl-4 rounded-l-full text-zinc-900 text-sm  bg-zinc-200">
              Category
            </div>
            <input
              type="text"
              // placeholder="Search craft items, categories or brands "
              placeholder="Search craft items, categories or brands "
              className="input w-[400px]  focus:outline-none focus:border-0 rounded-none text-sm "
            />
            <div className="bg-main py-3 px-3 pr-5 rounded-r-full text-zinc-200 text-sm">
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className=" gap-2 ">
          {user && (
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 rounded-full ring">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52  font-bold dark:bg-main text-green-600 "
              >
                <li>
                  <a
                    className="justify-between"
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    Profile
                    <span className="badge bg-main text-white text-xs">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col justify-center items-center">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <img
                    src={user.photoURL}
                    className="border border-green-300 rounded-full"
                  />
                  <h3 className="font-bold text-lg">{user.displayName}</h3>
                  <p className="py-4">{user.email}</p>
                  <p>User Created : {user.metadata.creationTime}</p>
                  <p>Last Login : {user.metadata.lastSignInTime}</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn" onClick={handleSignOut}>
                        Log Out
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          )}
          {!user && (
            <div className="flex lg:gap-5 gap-1">
              <Link to="/login">
                <button className="border px-2 lg:px-8  py-2 rounded-md border-black text-base font-medium">
                  Log in
                </button>
              </Link>
              <Link to="/register">
                <button className="border border-[#0C482F] lg:px-8 px-2 lg:py-2 py-2 rounded-md bg-main text-base font-medium text-zinc-200">
                  Free sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Toaster position="right" />
    </div>
  )
}

export default Navbar
