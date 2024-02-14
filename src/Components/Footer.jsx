import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Footer() {
    return (
        <div className='p-5 bg-black text-white'>
            <div className='d-flex justify-content-between'>
                <div>
                    <p>Questions? Call 000-800-919-1694</p>
                    <p> FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div className='d-flex flex-column'>
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className='d-flex flex-column'>
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div className='d-flex flex-column'>
                    <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <Dropdown className='mt-3'>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <i class="fa-solid fa-language"></i>English
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item className='ditems' href="#/action-1">English</Dropdown.Item>
                    <Dropdown.Item className='ditems' href="#/action-2">हिंदी</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className='text-white mt-3'>Netflix India</p>
        </div>

    )
}

export default Footer