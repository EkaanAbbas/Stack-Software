import React from 'react';
import style from './FooterComponent.module.css';

function FooterComponent() {
    return (
        <>
            <div className={style.footerbg}>
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className='fhead'>StackSoftware</h2>
                        <p>Welcome to StackSoftware, your premier destination for Superb online web services. We believe in the power of collaboration. Our team works closely with you, understanding your goals and objectives to create a seamless online experience that resonates with your audience.</p>
                    </div>
                    <div className="col-lg-4">
                        <h2>Our Services</h2>
                        <ul className={style.listItems}>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>Website Maintenance</li>
                            <li>Digital Marketing</li>
                            <li>Graphic Designing</li>
                            <li>E-Commerce Solution</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h2>Contact Info</h2>
                        <p>Ph no. +92 3068101163</p>
                        <p>Email us: ekaanabbas642@gmail.com</p>
                        <p>Location: Lahore, Pakistan</p>
                    </div>
                </div>
                <hr />
                <p>©2023 StackSoftware. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default FooterComponent;
