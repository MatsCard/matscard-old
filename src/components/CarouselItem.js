import React from 'react';
import './styles/CarouselItem.css'

function CarouselItem ({small, big, description, active}) {    
    return (
        <div className={`carousel-item ${active}`}>
            <div className="col-md-6">
                <div className="card">
                    <div className="c2 center card-img">
                    <div className="normal-image">
                        <img width="" height="" src={small} className="img-fluid" alt={description}/>
                    </div>
                    <div className="hover-image">
                        <img width="" height="" src={big} className="img-fluid" alt={description}/>
                    </div>
                    <p className="">{description}</p>
                    </div>
                </div>
            </div>
        </div>
 /*                  <div className="carousel-item">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="c2 center card-img">
                            <img width="410" height="560" src={small} className="img-fluid normal-image"/>
                            <div className="hover-image">
                              <img width="496" height="560" src={big} className="img-fluid"/>
                            </div>
                            <p className="center pt-5">Distributors</p>
                          </div>
                        </div>
                      </div>
                  </div> */
)
}
;


export default CarouselItem;