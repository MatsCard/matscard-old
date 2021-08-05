import React from 'react';
import './styles/CarouselItem.css'

function CarouselItem ({small, big, description, active, link}) {    
    return (
        <div className={`carousel-item ${active}`}>
            <div className="col-md-6">
                    <div className="card">
                    <a href={link}>
                        <div className="c2 center card-img">
                        <div className="normal-image">
                            <img width="" height="" src={small} className="img-fluid" alt={description}/>
                        </div>
                        <div className="hover-image">
                            <img width="" height="" src={big} className="img-fluid" alt={description}/>
                        </div>
                        </div>
                    </a>
                    <h4 className="card-text pt-1 mt-1">{description}</h4>
                </div>
            </div>
        </div>
)
}
;


export default CarouselItem;