import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import toast from 'react-hot-toast'
// import { HiMenuAlt2 } from 'react-icons/hi'

const Nav = () => {
  const { logOut, user } = useContext(AuthContext)
  //   name, metadata, photo, mail

  const location = useLocation()
  const navigate = useNavigate()

  // console.log(location, navigate)
  const handleSignOut = () => {
    logOut()
  }

  const handleAddItemBtn = () => {
    toast.success('You need to signin to add your product')
    setTimeout(() => {
      navigate(user ? '/addItem' : '/login')
      location.state == location.pathname
    }, 2000)

    // navigate(location?.state ? location.state : '/')
  }
  return (
    <div>
      <ul className="flex gap-5 text-orange-400 justify-between mx-32 my-10">
        <li>
          <Link to="/">Craft House</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allItem">All Art & Craft</Link>
        </li>
        <li>
          <button onClick={handleAddItemBtn}>Add Item</button>
        </li>

        {user && (
          <li>
            <Link to="/myItem">My Art & Craft List</Link>
          </li>
        )}

        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}

        {user && (
          <li>
            <button
              className="btn"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              User
            </button>
          </li>
        )}
      </ul>

      {user && (
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
      )}
    </div>
  )
}

export default Nav
