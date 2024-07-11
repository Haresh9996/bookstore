import React from 'react'

const Card = ({ item }) => {
    const { name, price, category, description } = item;
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl overflow-hidden border-none outline-none">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
                            alt="Book" className='w-full h-auto' />
                    </figure>
                    <div className="card-body dark:bg-base-content dark:text-base-100">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-primary">{category}</div>
                        </h2>
                        <p>{description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">₹ {price}</div>
                            <div className="badge px-2 py-1 cursor-pointer hover:bg-base-content hover:text-base-100">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card