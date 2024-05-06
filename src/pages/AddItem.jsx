import { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'

const AddItem = () => {
  const { user } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()

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

    fetch('https://craft-house-server.vercel.app/items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          toast.success('Successfull added a new Craft item')
        }
      })

    console.log(craftItem)
  }

  return (
    <div className=" bg-[#EEF9F7]">
      <p className="text-5xl text-center pt-20 mb-10 text-main font-bold">
        Add Craft Items
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-y-3 lg:gap-x-5 mx-3 "
      >
        <div className="flex lg:flex-row flex-col gap-4 w-full ">
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="photo"
              placeholder="Image Url"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="name"
              placeholder="Item Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="subcategory"
              placeholder="Subcategory Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="time"
              placeholder="Processing Time"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <input
              required
              type="text"
              name="email"
              placeholder="User Email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-full ">
          <div className="form-control flex items-center flex-row gap-5 border rounded-full px-10">
            <p>Customization</p>

            <label className="cursor-pointer label flex items-center justify-center gap-1">
              <span className="label-text">No</span>
              <input type="checkbox" className="toggle" name="customization" />
              <span className="label-text">Yes</span>
            </label>
          </div>
          <div className="form-control flex items-center flex-row gap-5 border rounded-full px-10 ">
            <p>Status</p>

            <label className="cursor-pointer label flex items-center justify-center gap-1">
              <span className="label-text">In Stock</span>
              <input type="checkbox" className="toggle" name="status" />
              <span className="label-text">Made to order</span>
            </label>
          </div>
        </div>

        <label className="form-control w-full lg:mb-0 mb-12">
          <input
            type="submit"
            value="Add this item"
            className="btn bg-main  mt-5 text-lg text-white"
          />
        </label>
      </form>
      <Toaster position="right" />
    </div>
  )
}

export default AddItem
