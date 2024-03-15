import React from 'react'
import abtImg from "../assets/abt-img.png"
import "./landingpage.scss"
export default function Aboutus() {
    return (
        <div className='abt-us'>
            <div className='abt-img'>
                <img src={abtImg} alt="img" />


            </div>
            <div className='abt-txt-container'>
                <p className='heading'>BINARY WREN - <br></br>
                    THE GO-TO COMPANY FOR SOFTWARE OUTSOURCING IN VIETNAM</p>
                <div className='abt-para'>
                    <div className='line'>
                    </div>
                    <p className='para-line'>
                        Binary wren has been well recognized as a go-to software outsourcing company in Vietnam. After more than a decade in the industry, we have established ourselves as a reliable and forward-thinking software development company.

                    </p>
                </div>
                <div>
                    <p className='para'>The quality, uniqueness, and adaptability of the software we develop for our customers are crucial to their success. By putting the requirements of our clients first, we aim to establish lasting relationships with them and offer the best services as a top software development company in Vietnam.</p>
                    <p className='para'>Furthermore, keeping our clients in the loop throughout the whole design and development process helps us earn their confidence and consistently impress them with our work, making us the outstanding option for Vietnam software development with the most affordable rates in the region.</p>
                </div>

            </div>

        </div>
    )
}
