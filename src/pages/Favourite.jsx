import Masonry from 'react-masonry-css'
import { Link, useLoaderData } from 'react-router-dom'

const Favourite = () => {
  const items = useLoaderData()
  //   console.log(favourite)
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 2,
  }
  return (
    <div>
      <p
        className="text-main font-bold text-3xl  my-8 mb-12 text-center"
        id="Our-products"
      >
        Bookmarks
      </p>

      <Masonry
        className="my-masonry-grid lg:px-24 px-4 lg:space-x-12 space-x-2 "
        breakpointCols={breakpoints}
      >
        {items.map((item) => (
          <div key={item._id} className="lg:mb-6 mb-3">
            <Link
              to={`/details/${item._id}`}
              key={item._id}
              className=" hover:scale-[99%] transition duration-900 "
            >
              <div className="card shadow-xl  bg-[#eef9f7]">
                <figure>
                  <img
                    src={
                      item.image
                        ? item.image
                        : 'https://w7.pngwing.com/pngs/460/672/png-transparent-page-not-found-illustration-thumbnail.png'
                    }
                    alt="Shoes"
                    className=" w-full"
                  />
                </figure>
                <div className="lg:card-body  p-3">
                  {/* <div className="card-actions justify-start "> */}
                  {/* <div className="badge badge-outline  text-zinc-800 lg:text-xs border-green-500 text-[10px] mb-2 lg:mb-0">
                  {item.category}
                </div> */}
                  <div className="badge badge-outline  text-zinc-800 lg:text-xs border-green-500 lg:text-[10px] text-[8px] mb-2 lg:mb-0 lg:leading-none leading-tight lg:tracking-normal tracking-tighter ">
                    {item.category}
                  </div>
                  {/* <div className="badge badge-outline">Products</div> */}
                  {/* </div> */}
                  <h2 className="card-title text-main font-light lg:font-extrabold">
                    {item.name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                  </h2>
                  <div className="flex justify-center lg:justify-end  mt-3 lg:mt-0">
                    <p className="text-orange-500 font-normal text-xl  lg:text-lg text-right">
                      {item.price}
                    </p>
                  </div>
                  <div className="flex justify-center lg:pt-0 pt-2">
                    <Link
                      to={`/details/${item._id}`}
                      className="text-center p-0  text-blue-500 font-extralight hover:font-light tracking-wider inline-block lg:text-xs text-[8px] hover:underline"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default Favourite
