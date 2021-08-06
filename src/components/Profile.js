import React from 'react';
import './styles/Profile.css'
import creator from '../assets/images/creator.jpg'

function Profile () {    
    return (
        <div className="profile">
            <div className="card">
                <div className="row g-0">
                    <div className="profile-img col-12 col-lg-3">
                        <img src={creator} className="img-fluid" alt="Website Creator" />
                    </div>
                    <div className="col-12 col-lg-9 pl-1">

                        <div className="card-body d-inline-block">
                            <h1 className="card-title fst-italic">
                                Web Developer
                            </h1>
                            <p className="card-text">Hi, I am Matías Cardone, I am a highly competent full-stack web developer with over two years of experience participating in the complete web development lifecycle.</p>
                            <p className="card-text">Your website will be perfect as I pay close attention to every detail.</p>
                            <h4 className="card-text">My core skills include:</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML5</li>
                                <li className="list-group-item">CSS3/Bootstrap/Tailwind</li>
                                <li className="list-group-item">Javascript/Typescript</li>
                                <li className="list-group-item">React/Gatsby/Angular/Vue</li>
                                <li className="list-group-item">Node/Express</li>
                            </ul>
                        </div>
                    </div>

            </div>

            </div>
        </div>
)
}
;


export default Profile;