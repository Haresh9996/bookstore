import React from 'react'
import { list } from '../../public/list'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const Freebooks = () => {
    const filteredList = list.filter(item => item.category === "free" && item.price == 0)
    // console.log(filteredList)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };
    return (
        <>
            <div className='my-6 px-4 md:px-8 mx-auto'>
                <h2>Free offered Courses</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum minus ullam hic reiciendis vel, ut, cum quam praesentium dolorum nulla saepe voluptatum eligendi error sunt?</p>
                <div className='my-4'>

                    <Slider {...settings} >
                        {
                            filteredList && filteredList.map(item => <Card key={item.id} item={item} />)
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebooks