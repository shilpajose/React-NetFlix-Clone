import React from 'react'

function Acco_questions() {
    return (
        <div className='bg-black p-5'>
            <h1 className='text-light fw-600 text-center mb-3' style={{ fontWeight: 'bolder' }}>Frequently Asked Questions</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item bg-dark m-3">
                    <h2 class="accordion-header " id="flush-headingOne">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What Is Netflix
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
                    </div>
                </div>
                <div class="accordion-item m-3">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How much does netflix cost                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</div>
                    </div>
                </div>
                <div class="accordion-item m-3">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Where can i watch
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
                    </div>
                </div>
                <div class="accordion-item m-3">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How do i Cancel
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                    </div>
                </div>
                <div class="accordion-item m-3">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What can i watch on Netflix
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                    </div>
                </div>
                <div class="accordion-item m-3">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Is Netflix good for kids
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
                    </div>
                </div>
            </div>
            <div className='container w-50'>
                <h6 className='mt-5 mb-4 text-white'>Ready to watch? Enter your email to create or restart your membership.</h6>
                <form className="form-subscribe" id="contactForm">
                    <div className="row">
                        <div className="col">
                            <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                        </div>
                        <div className="col-auto"><button className="btn btn-danger btn-lg" id="submitButton" type="submit">Get Started <i className="fa-solid fa-chevron-right" style={{ fontSize: '1rem', color: 'white' }}></i></button></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Acco_questions