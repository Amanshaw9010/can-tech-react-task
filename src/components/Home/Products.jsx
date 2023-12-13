import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const Products = () => {
  const slider = [
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/04/vms-safevisitin1-01-768x768.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/04/safeboardinerp-cantechnologies-01-768x768.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/04/hrm-post-cantechnologies-01-768x768.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/04/opo-768x768.png',
    },
    {
      url: 'https://www.cantechnologies.co.in/wp-content/uploads/2020/04/Looking-game-01-768x768.png',
    },
  ];

  return (
    <>
      <div className='font-display w-11/12 mx-auto text-center pt-8 md:pt-16 lg:pt-16'>
        <div className='mb-16'>
        <h1 className=' font-bold md:text-3xl lg:text-5xl text-gray-800'>PRODUCTS</h1>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col h-[900px]]'>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='max-w-[90%] lg:max-w-[80%]'
        >
          {slider.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[200px] w-[180px] md:h-[250px] md:w-[215px] lg:h-[400px] lg:w-[400px] overflow-hidden cursor-pointer'>
                <div
                  className='absolute inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${item.url})` }}
                />
                <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-20 duration-500' />
                <div className='relative flex flex-col gap-3'></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Products;
