import React from 'react';
import style from './CarosualComponent.module.css';

function CarouselComponent() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/img1.jpg" className={style.myimg} alt="..." />
                    <div className={style.centeredText}>
                        <h2>Welcome to StackSoftware Your One-Stop Online Web Services Provider!</h2>
                        <p>At StackSoftware, we are committed to offering complete online web services to meet your typical needs.</p>
                        <button type="button" className={style.btn}>GET IN TOUCH</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/img2.jpg" className={style.myimg} alt="..." />
                    <div className={style.centeredText}>
                        <h2>Elevate with Our Web Services!</h2>
                        <p>Your premier destination for Superb online web services. We are a passionate team of tech enthusiasts and creative minds.</p>
                        <button type="button" className={style.btn}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselComponent;
