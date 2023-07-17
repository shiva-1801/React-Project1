import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className="secondaryText">
                    lorjgvibivhs vsvsuhvisvhhv svisivhish<br/>
                    bcueuicviuegvybvsuiusv evusvhoishv h iosohishvh vh
                </span>

            </div>
            <div className="flexColStart f-right">
                <span className="primaryText">
                    Information
                </span>
                <span className="secondareyText">
                    15 hviwvn sihvinl hiovh
                </span>
                <div className="flexCenter">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
