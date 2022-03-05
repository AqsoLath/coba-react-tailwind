import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderHero() {
    return (
        <Swiper
            // modules di sini untuk mau apa-apa aja yang kita masukan di slider kita tapi sebelumnya harus kita import dulu
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            loop={true}
            //slides perview ini merupakan berapa jumlah slide yang ditampilkan
            slidesPerView={1}
            // jika sudah diinisiasi modul-modul dari swiper bisa kita gunakan
            navigation={{
                elPrev: '.swiper-button-prev',
                elNext: '.swiper-button-next',
            }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 5000 }}
            className="mt-[60px] mx-auto py-4"

        >
            <SwiperSlide className="bg-slate-900 "><img src='/slider-hero.jpg' alt='slider-hero' className='w-full' /></SwiperSlide>
            <SwiperSlide className="bg-slate-900 "><img src='/slider-hero.jpg' alt='slider-hero' className='w-full' /></SwiperSlide>
            <SwiperSlide className="bg-slate-900 "><img src='/slider-hero.jpg' alt='slider-hero' className='w-full' /></SwiperSlide>
            <SwiperSlide className="bg-slate-900 "><img src='/slider-hero.jpg' alt='slider-hero' className='w-full' /></SwiperSlide>
        </Swiper >
    )
}