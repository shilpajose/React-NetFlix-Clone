import React from 'react'

function Contents() {
  return (
    <div>
         {/* <!-- Content section 1--> */}
        <section id="scroll" className='bg-black text-light'>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid" src="https://i.postimg.cc/8PjS8hPy/gif.gif" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Enjoy on your TV</h2>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-dark' style={{height:'10px'}}></div>
        {/* <!-- Content section 2--> */}
        <section className='bg-black text-light'>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="https://i.postimg.cc/9fbjy1QB/mobile-0819.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Download your shows to watch offline</h2>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-dark' style={{height:'10px'}}></div>
        {/* <!-- Content section 3--> */}
        <section className='bg-black text-light'>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid" src="https://i.postimg.cc/hGDLzKjh/movie.gif" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Watch everywhere</h2>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-dark' style={{height:'10px'}}></div>
         {/* <!-- Content section 2--> */}
         <section className='bg-black text-light'>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid" src="https://i.postimg.cc/vBP3HctQ/kids.png" alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Create profiles for kids</h2>
                            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-dark' style={{height:'10px'}}></div>
    </div>
  )
}

export default Contents