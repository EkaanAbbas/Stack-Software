import React from 'react';
import style from './Card.module.css';

function MyComponent() {
    return (
        <div className={`container mt-5 ${style.cardContainer}`} align="center">
            <h1>Our Services</h1>

            <div className="row mt-5">
                <div className={`col-md-4 ${style.cardCol}`}>
                    <div className={`card ${style.cardWithBackground1}`}>
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Provide Web Services</h6>
                            <p className="card-text">Web Design and Development services are crafted to transform your online presence into a captivating and high-performance platform.</p>
                            <button type="button" className="btn btn-dark">Read More</button>
                        </div>
                    </div>
                </div>
                <div className={`col-md-4 ${style.cardCol}`}>
                    <div className={`card ${style.cardWithBackground2}`}>
                        <div className="card-body">
                            <h5 className="card-title">App Development</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Provide App Services</h6>
                            <p className="card-text">Your gateway to cutting-edge App Development services that bring your ideas to life on mobile devices. Our skilled team of app developers is dedicated.</p>
                            <button type="button" className="btn btn-dark">Read More</button>
                        </div>
                    </div>
                </div>
                <div className={`col-md-4 ${style.cardCol}`}>
                    <div className={`card ${style.cardWithBackground3}`}>
                        <div className="card-body">
                            <h5 className="card-title">Website Maintenance</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Provide Maintenance Services</h6>
                            <p className="card-text">We provide Website maintenance services that are comprehensive and essential for the proper functioning and success of any website. </p>
                            <button type="button" className="btn btn-dark">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className={`col-md-4 ${style.cardCol}`}>
                    <div className={`card ${style.cardWithBackground4}`}>
                        <div className="card-body">
                            <h5 className="card-title">Digital Marketing</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Provide Marketing Services</h6>
                            <p className="card-text">Our Digital marketing services encompass a diverse range of strategies and tactics that are aimed at promoting businesses. </p>
                            <button type="button" className="btn btn-dark">Read More</button>
                        </div>
                    </div>
                </div>
                <div className={`col-md-4 ${style.cardCol}`}>
                    <div className={`card ${style.cardWithBackground5}`}>
                        <div className="card-body">
                            <h5 className="card-title">Graphic Designing</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Provide Graphic Services</h6>
                            <p className="card-text">Graphic designing is a creative and visual communication discipline that involves the use of various elements.</p>
                            <button type="button" className="btn btn-dark">Read More</button>
                        </div>
                    </div>
                </div>
                <div className={`col-md-4 ${style.cardCol}`}>
                    <div className={`card ${style.cardWithBackground6}`}>
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Solution</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Provide E-Commerce Services</h6>
                            <p className="card-text">E-commerce solutions refer to the comprehensive set of services and tools designed to facilitate the creation.</p>
                            <button type="button" className="btn btn-dark">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
