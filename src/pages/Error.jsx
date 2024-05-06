import { Link } from 'react-router-dom'
import Navbar from '../component_pack/Navbar'

const Error = () => {
  return (
    <div>
      <Navbar />
      <p className="text-center text-main font-light text-base mt-5">
        Maybe Api is not working....
      </p>
      <Link to="/" className="flex items-center justify-center mt-5">
        <button className="btn bg-main text-zinc-200">Back to Home</button>
      </Link>

      <div className="flex flex-col-reverse items-center justify-center mt-10 mx-20">
        <div className="grid grid-cols-3 gap-20 mx-20 ">
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <section className="flex items-center h-full dark:text-gray-800">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn&apos;t find this page.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-600">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              {/* <Link to="/">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 font-semibold rounded dark:bg-indigo-600 dark:text-gray-50"
                >
                  Back to homepage
                </a>
              </Link> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Error
