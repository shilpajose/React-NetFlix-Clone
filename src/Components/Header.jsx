import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <div>
        <header className="masthead">
        <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://i.postimg.cc/prVkZMm6/Netflix-Logo-removebg-preview.png"
                            width="150"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <i class="fa-solid fa-language"></i>English
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item className='ditems' href="#/action-1">English</Dropdown.Item>
                            <Dropdown.Item className='ditems' href="#/action-2">हिंदी</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="danger">Danger</Button>{' '}
                </Container>
            </Navbar>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white container w-100 mt-5" >
                            <h1 className="mt-5 text-center">Unlimited movies, TV shows and more</h1>
                            <h3 className='text-center text-white'>Watch anywhere. Cancel anytime.</h3>
                            <h6 className='text-center text-white'>Ready to watch? Enter your email to create or restart your membership.</h6>
                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    </div>
                                    <div className="col-auto"><button className="btn btn-danger btn-lg" id="submitButton" type="submit">Get Started <i className="fa-solid fa-chevron-right" style={{ fontSize: '1rem',color:'white' }}></i></button></div>
                                </div>
                                
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header