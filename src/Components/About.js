import React, { Component } from 'react';
import style from './About.module.css';

export default class About extends Component {
    render() {
        return (
            <>
                <div className={style.about}>
                    <h1>About Us</h1>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src="/img/img3.avif" className={style.aboutimg} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h2 className={style.abouttxt}>Elevate Your Online Experience with Our Web Services!</h2>
                            <p className={style.aboutpara}>Welcome to Astream, your premier destination for Superb online web services. We are a passionate team of tech enthusiasts and creative minds, dedicated to providing innovative solutions that cater to your unique needs. With a track record of excellence and a commitment to customer satisfaction, we are your trusted partner in shaping your online success.</p>

                            <p className={style.aboutpara}>Our mission is clear - to be your trusted partner in the digital realm, guiding you through the complexities of the online landscape with innovative solutions and unwavering support. We believe that every business, no matter its size, deserves access to top-notch web services that can make a significant impact on its growth and success.</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5" align="center">
                    <h1>WHO WE ARE</h1>
                    <p className={style.aboutwho}>
                        StackSoftware is your go-to destination for exceptional online web services. We are a team of passionate experts, dedicated to crafting cutting-edge solutions that empower businesses and individuals to succeed in the digital world.
                        From web design and development to digital marketing and cloud hosting, we have the expertise and experience to make a meaningful impact on your online success. Let's collaborate and bring your digital version to life.
                    </p>
                </div>
            </>
        );
    }
}
