import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import '../uitils/Swiper/swiper.css'

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules'
import Categories from './Categories'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
// import { Link } from 'react-router-dom'

const Hero = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="">
      <div className="hero lg:min-h-[calc(100vh-250px)] min-h-[calc(65vh-250px)] bg-[#B8CDC7] text-main  ">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          {!user && (
            <div className="flex-1 pt-10 ">
              <h1 className="text-5xl font-bold tracking-tighter">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={75}
                  words={[
                    'Craft items only for You.',
                    'Choose what you like',
                    'Variety of items.',
                  ]}
                />
              </h1>
              <p className="py-6">
                We provide you with the information and inspiration you need to
                design your dream faster, smarter and greener.
              </p>
              <Link
                to="/register"
                className="btn w-full bg-main text-zinc-100 border-none text-medium hover:bg-green-800"
              >
                Free sign up
              </Link>
              <Link
                to="/addItem"
                className="text-center w-full text-main mt-5 text-base"
              >
                Publish your products
              </Link>
            </div>
          )}

          {!user && (
            <div className="flex-1 pb-6 lg:pb-0 ">
              <div className="border lg:w-96 w-80  lg:h-96 h-96  relative bg-zinc-50 rounded-2xl border-green-700">
                <div className="flex items-center justify-between mx-5 my-5 scale-60 lg:scale-100">
                  <div className="border rounded-full bg-zinc-800 text-zinc-50 h-8 w-8 flex items-center justify-center text-xl ">
                    <p>C</p>
                  </div>
                  <div className="skeleton h-8 w-2/3 "></div>
                  <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                </div>

                <div className="mt-10 ml-5 scale-60 lg:scale-100 absolute  opacity-60">
                  <div className="flex flex-col gap-4 w-52  ">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full  "></div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                </div>
                <div className=" w-32  lg:w-64 h-32 lg:h-64 absolute lg:right-0 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/3 lg:translate-x-1/3 top-1/2  translate-x-[90%] scale-[65%] lg:scale-100">
                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/564x/09/6f/bb/096fbbd5ddf02ce373992f85281c02bf.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/564x/b3/00/2f/b3002fff8972c351a2182d475817e997.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/564x/68/61/4e/68614e185724629c0d8ddc82a580be8b.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/564x/f9/0b/fa/f90bfa83e96232b871dfb2fd4fdea93a.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/564x/94/20/f3/9420f3a1b8105f14c2bf6857b675799a.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/564x/03/77/82/03778281a2452cbcf559a31cab022d4c.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="https://i.pinimg.com/736x/9d/ba/7c/9dba7cac6225b4b06ca34cfb35f48887.jpg" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          )}

          {user && (
            <div className="flex-1 flex items-center justify-center flex-col ">
              {/* <h1 className="text-5xl font-bold">Hey {user.displayName}</h1> */}
              <h3 className="lg:text-6xl text-3xl font-bold text-center">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={75}
                  words={[
                    `Hello ${user.displayName}`,
                    'Welcome to craftpaper.',
                    'Choose the special product for you.',
                  ]}
                />
              </h3>
              <p className="text-lg mt-4 text-center">
                Personalize your start page by telling us which categories of{' '}
                <br className="hidden lg:block" />
                products and brands you’re most interested in.
              </p>
              <a
                href="#Our-products"
                className="text-2xl mt-12 btn bg-main border-0 text-zinc-300 px-10  hover:bg-green-800"
              >
                Browse Products
              </a>
            </div>
          )}
        </div>
      </div>
      <Categories />
    </div>
  )
}

export default Hero
