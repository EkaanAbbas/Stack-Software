// TestimonialComponent.jsx

import React from 'react';
import styles from './TestimonialComponent.module.css';

const TestimonialComponent = () => {
    return (
        <div className={styles.testimonialContainer}>
            <h1 className={styles.testimonialHeading}>Our Testimonials</h1>
            <div className="row">
                <div className="col-lg-4">
                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialContent}>
                            <p className={styles.testimonialText}>Impressed with the results. The team was extremely professional and responsive throughout the entire process. I've received numerous compliments from both customers and colleagues on the new site.</p>
                            <h5 className={styles.testimonialAuthor}>Shakti Mishra</h5>
                            <p className={styles.testimonialCompany}>CO-FOUNDER
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialContent}>
                            <p className={styles.testimonialText}>I had a fantastic experience working with Astream on a website redesign project. I appreciated how the team explained every step of the process to keep me comfortable before moving forward.</p>
                            <h5 className={styles.testimonialAuthor}>Dipak Sahoo
                            </h5>
                            <p className={styles.testimonialCompany}>CEO</p>
                        </div>
                    </div>
                </div>



                <div className="col-lg-4">
                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialContent}>
                            <p className={styles.testimonialText}>The team at StackSoftware was extremely knowledgeable and helpful in guiding me through the entire process. I am very pleased with their result, which helps in business and their strategy.
                            
                            </p>
                            <h5 className={styles.testimonialAuthor}>Akasha Panda
                            </h5>
                            <p className={styles.testimonialCompany}>MANAGER</p>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    );
};

export default TestimonialComponent;
