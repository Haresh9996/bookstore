import React from 'react'

const Hero = () => {
    
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto'>
                <div
                    className="hero min-h-screen object-cover bg-fixed"
                    style={{
                        backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/022/458/733/large_2x/black-and-white-books-background-for-reading-app-cover-or-literary-soiree-invitation-photo.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-xl sm:text-3xl lg:text-4xl font-bold text-zinc-200">Welcome to <span className='text-[#7480ff]'>Book Haven</span></h1>
                            <p className="mb-5 text-zinc-100">
                                Discover a world of literature at your fingertips. From timeless classics to the latest bestsellers, find your next great read here.
                            </p>
                            <button className="btn btn-primary">Browse Collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero