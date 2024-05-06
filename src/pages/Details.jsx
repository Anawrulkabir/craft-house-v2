import { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'

const Details = () => {
  const loadedItem = useLoaderData()
  const [item, setItem] = useState(loadedItem)
  // console.log(item._id)
  const { user } = useContext(AuthContext)

  const { _id } = loadedItem
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    // console.log(item._id)

    const form = e.target
    const image = form.photo.value
    const name = form.name.value
    const category = form.subcategory.value
    const description = form.description.value
    const price = form.price.value
    const rating = form.rating.value
    const time = form.time.value
    const username = form.username.value
    const email = form.email.value
    const customization = form.elements.customization.checked
    const status = form.elements.status.checked

    const craftItem = {
      image,
      name,
      category,
      description,
      price,
      rating,
      time,
      username,
      email,
      customization,
      status,
      user,
    }

    console.log(craftItem)

    fetch(`https://craft-house-server.vercel.app/update/${_id}`, {
      // fetch(`http://localhost:3000/update/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        console.log(data)
        if (data.insertedId) {
          toast.success('Successfull Updated this Craft item')
          alert('item updated successfully')
        }
      })

    // console.log(craftItem)
  }

  const addFavourite = () => {
    fetch('https://craft-house-server.vercel.app/favourite', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data)
      })
  }

  // const [items, setItems] = useState([])
  // fetch('https://craft-house-server.vercel.app/items')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setItems(data)
  //   })

  const handleDelete = () => {
    fetch(`https://craft-house-server.vercel.app/delete/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data)

        if (data.deletedCount > 0) {
          toast.success('Successfull Deleted this Craft item')
          // const remaining = items.filter((item) => item._id !== _id)
          // setItems(remaining)
          console.log(data)
          navigate(location.state ? location.state : '/')
        }
      })
  }

  const handleAddCart = () => {
    fetch('https://craft-house-server.vercel.app/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data)
      })
  }

  return (
    // <div className="max-h-[cal(100vh - 300px)]">
    //   <div className="flex  gap-10 p-10 ">
    //     <img src={item.image} alt="" className="w-full" />
    //     <div>
    //       <p className="text-5xl">{item.name}</p>
    //       <p>this is item details page </p>
    //       <p>name : {item.name}</p>
    //       <p>{item.price}</p>
    //       <p>{item.description}</p>
    //       <button className="btn">Request to Buy</button>
    //       <button className="btn">Add to Favourite</button>
    //     </div>
    //   </div>
    // </div>
    <div className="dark:bg-gray-100 dark:text-gray-900">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
          <img src={item.image} alt="" />
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
          <div className="pt-6 pb-4 space-y-2">
            <span className="text-orange-500 text-xl">{item.price}</span>
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p>{item.description}</p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm dark:text-indigo-600"
            >
              <div className="flex flex-col gap-2 text-base font-light mt-6">
                <div>Rating : {item.rating}</div>
                <div>Category : {item.category}</div>
                <div>Customization : {item.customization ? 'Yes' : 'No'}</div>
                <div>Time to delivery : {item.time} </div>
                <div>
                  Available : {''}
                  {item.status ? 'Stock Available' : 'Request Only Product'}
                </div>
                <div>Seller : {item.email} </div>
              </div>
            </a>
            <div className="flex gap-4 pt-6 items-center ">
              <div className="border rounded bg-main  text-white px-3 py-2">
                <button onClick={addFavourite}>Add To Favourite</button>
              </div>
              <div className="border rounded bg-main  text-white px-3 py-2">
                <button onClick={handleAddCart}>
                  {item.status ? 'Add to Cart' : 'Request for Stock'}
                </button>
              </div>
              {user.email === item.email && (
                <div className="border rounded bg-green-600  text-white px-3 py-2">
                  <button
                    onClick={() =>
                      document.getElementById('my_modal_update').showModal()
                    }
                  >
                    Update
                  </button>
                  <dialog id="my_modal_update" className="modal">
                    <div className=" p-6 rounded-xl text-black bg-[#D5E3E0] bg-opacity-65">
                      <form
                        onSubmit={handleUpdate}
                        // itemID={item._id}
                        className="flex flex-col justify-center items-center gap-y-3 gap-x-5"
                      >
                        <div className="flex gap-4 ">
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="photo"
                              defaultValue={item.image}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="name"
                              defaultValue={item.name}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="subcategory"
                              defaultValue={item.category}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                        </div>
                        <div className="flex gap-4">
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="description"
                              defaultValue={item.description}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="price"
                              defaultValue={item.price}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="rating"
                              defaultValue={item.rating}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                        </div>
                        <div className="flex gap-4">
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="time"
                              defaultValue={item.time}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="username"
                              defaultValue={item.username}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                          <label className="form-control w-full max-w-xs">
                            <input
                              type="text"
                              name="email"
                              defaultValue={item.email}
                              className="input input-bordered w-full max-w-xs"
                            />
                          </label>
                        </div>
                        <div className="flex gap-4">
                          <div className="form-control flex items-center flex-row gap-5 border rounded-full px-10">
                            <p className="text-main">Customization</p>

                            <label className="cursor-pointer label flex items-center justify-center gap-1">
                              <span className="label-text">No</span>
                              <input
                                type="checkbox"
                                className="toggle"
                                name="customization"
                              />
                              <span className="label-text">Yes</span>
                            </label>
                          </div>
                          <div className="form-control flex items-center flex-row gap-5 border rounded-full px-10 ">
                            <p className="text-main">Status</p>

                            <label className="cursor-pointer label flex items-center justify-center gap-1">
                              <span className="label-text ">In Stock</span>
                              <input
                                type="checkbox"
                                className="toggle"
                                name="status"
                              />
                              <span className="label-text">Made to order</span>
                            </label>
                          </div>
                        </div>

                        <label className="form-control w-full max-w-xs">
                          {/* <input
                            type="submit"
                            value="Update Item"
                            className="btn bg-main border-0 hover:bg-green-800 mt-5 text-lg text-white"
                          /> */}
                          <input
                            type="submit"
                            className="btn bg-main border-0 hover:bg-green-800 mt-5 text-lg text-white"
                          />
                        </label>
                      </form>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <Toaster />
                </div>
              )}
              {user.email === item.email && (
                <div className="border rounded bg-red-500  text-white px-3 py-2">
                  <button onClick={handleDelete}>Delete</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
