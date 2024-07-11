import React from 'react'
import { list } from '../../public/list'
import "slick-carousel/slick/slick-theme.css";
import Card from './Card'

const CoursesPage = () => {
  console.log(list)
  
  return (
    <>
      <div className='my-8 px-4 md:px-8 mx-auto text-center space-y-5'>
        <h2 className='text-xl md:text-2xl lg:text-3xl'> We are delighet to have you <span className='text-[#7480ff]'>here :) </span> </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero qui repudiandae suscipit labore. Beatae nihil praesentium est nam totam, veritatis harum omnis maiores exercitationem aliquam tenetur enim impedit commodi voluptatem quaerat numquam esse cum expedita perspiciatis modi aut eum? Architecto eum quo, eveniet cupiditate repellat atque dicta placeat assumenda!</p>
        <button className="btn btn-primary btn-outline"> Back</button>
      </div>
      <div className='my-8 px-4 md:px-8 mx-auto'>
        <div className='my-4 grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
              list && list.map(item => <Card key={item.id} item={item} />)
            }
        </div>
      </div>

    </>
  )
}

export default CoursesPage