import { FaArrowRightLong } from 'react-icons/fa6'
import { FcPuzzle } from 'react-icons/fc'
import '../uitils/ScrollbarHide/hideScrollbar.css'
import Masonry from 'react-masonry-css'

const Categories = () => {
  return (
    <div className="bg-[#D5E4E0]">
      <div>
        <div className="flex gap-3  justify-left pt-4 pb-3 px-3">
          <img
            src="https://www.bimobject.com/assets/icons/category-icon.svg"
            alt=""
          />
          <div className="mt-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-2xl">Categories</p>
              <FaArrowRightLong className="text-2xl font-light" />
            </div>
            <p className="font-light text-zinc-500">
              Browse all building product categories
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-2 items-center mx-12 justify-center hidden lg:text-inherit text-[10px]">
        <div className="overflow-x-auto flex items-center    mt-1  py-4 gap-5 scroll-smooth hide-scroll-bar">
          <div className="flex items-center   rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2  border-green-500  min-w-[290px]  ">
            <FcPuzzle className="w-5 h-5 mr-4" />
            <p className="lg:text-sm  font-medium">
              Wooden Furniture & Sculptures
            </p>
          </div>
          <div className="flex items-center   rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2  border-green-500   min-w-[230px]  ">
            <FcPuzzle className="w-5 h-5 mr-4" />
            <p className="lg:text-sm  font-medium">Wooden Home Decor</p>
          </div>
          <div className="flex items-center   rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2  border-green-500  min-w-[310px]   ">
            <FcPuzzle className="w-5 h-5 mr-4" />
            <p className="lg:text-sm  font-medium">
              Wooden Utensils and Kitchenware
            </p>
          </div>
          <div className="flex items-center   rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2  border-green-500   min-w-[200px]  ">
            <FcPuzzle className="w-5 h-5 mr-4" />
            <p className="lg:text-sm  font-medium">Jute Home Decor</p>
          </div>
          <div className="flex items-center   rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2  border-green-500  min-w-[300px]   ">
            <FcPuzzle className="w-5 h-5 mr-4" />
            <p className="lg:text-sm  font-medium">
              Jute Kitchenware & utensils
            </p>
          </div>
          <div className="flex items-center   rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2  border-green-500   min-w-[300px]  ">
            <FcPuzzle className="w-5 h-5 mr-4" />
            <p className="lg:text-sm  font-medium">Jute and wooden jewellery</p>
          </div>
        </div>
        <div>
          <FaArrowRightLong className="text-xl text-green-600" />
        </div>
      </div>
      <div className="lg:hidden flex mx-6 my-3 pb-3">
        <Masonry>
          <div className="flex items-center  rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2 mb-2 border-green-500 ">
            <p className="text-xs font-normal text-[#192a56]">
              Wooden Furniture & Sculptures
            </p>
          </div>
          <div className="flex items-center  rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2 mb-2 border-green-500  ">
            <p className="text-xs font-normal text-[#192a56]">
              Wooden Home Decor
            </p>
          </div>
          <div className="flex items-center  rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2 mb-2 border-green-500  ">
            <p className="text-xs font-normal text-[#192a56]">
              Wooden Utensils and Kitchenware
            </p>
          </div>
          <div className="flex items-center  rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2 mb-2 border-green-500  ">
            <p className="text-xs font-normal text-[#192a56]">
              Jute Home Decor
            </p>
          </div>
          <div className="flex items-center  rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2 mb-2 border-green-500  ">
            <p className="text-xs font-normal text-[#192a56]">
              Jute Kitchenware & utensils
            </p>
          </div>
          <div className="flex items-center  rounded-full bg-zinc-50 px-5 py-3 shadow-3xl shadow-md shadow-zinc-400  border-2 mb-2 border-green-500  ">
            <p className="text-xs font-normal text-[#192a56]">
              Jute and wooden jewellery
            </p>
          </div>
        </Masonry>
        <div className="= flex flex-col items-center    mt-1  py-4 gap-5"></div>
      </div>
    </div>
  )
}

export default Categories
