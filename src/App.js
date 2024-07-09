import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import  swiperinfo from './data/swiper.json'


function App() {
  return (
    <>
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      { 
          swiperinfo.map(( v, i)=>{
                return(<SwiperSlide>
                  <h2>{v.textnm}</h2>
                  <p>
                    {v.ex}
                  </p>
                  <a href={v.href}> 바로가기 </a> 
                  <img src={v.img} />
                  </SwiperSlide>)
          })
      }
      
    
    </Swiper>
  </>
  );
}

export default App;
