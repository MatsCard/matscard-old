import angularBig from '../assets/images/angular-firebase-store-big.png'
import angularSmall from '../assets/images/angular-firebase-store-small.png'
import exchangeSmall from '../assets/images/platzi-exchange-small.png'
import exchangeBig from '../assets/images/platzi-exchange-big.png'
import eventSmall from '../assets/images/react-bootstrap-event-small.png'
import eventBig from '../assets/images/react-bootstrap-event-big.png'
import foundationSmall from '../assets/images/platzi-foundation-small.png'
import foundationBig from '../assets/images/platzi-foundation-big.png'
import videoSmall from '../assets/images/platzi-video-small.png'
import videoBig from '../assets/images/platzi-video-big.png'
import blogSmall from '../assets/images/platzi-blog-small.png'
import blogBig from '../assets/images/platzi-blog-big.png'
import reactVideoSmall from '../assets/images/react-video-small.png'
import reactVideoBig from '../assets/images/react-video-big.png'
import swagSmall from '../assets/images/gatsby-swag-small.png'
import swagBig from '../assets/images/gatsby-swag-big.png'
import gamesSmall from '../assets/images/platzi-games-small.png'
import gamesBig from '../assets/images/platzi-games-big.png'
import foodSmall from '../assets/images/platzi-food-small.png'
import foodBig from '../assets/images/platzi-food-big.png'
import confSmall from '../assets/images/platzi-conf-small.png'
import confBig from '../assets/images/platzi-conf-big.png'
import diarySmall from '../assets/images/react-diary-small.png'
import diaryBig from '../assets/images/react-diary-big.png'
import {useEffect} from 'react'
import CarouselItem from '../components/CarouselItem'


function Home() {
  useEffect(() => {
    let items = document.querySelectorAll('.carousel .carousel-item')
  
    items.forEach((el) => {
        const minPerSlide = 2
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
              next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
  }, [])


  return (
    <div className="container carousel-container text-center my-3">
      <div className="gallery-title row ">
        <h2 className="font-weight-light col-12 col-md-6 text-center text-md-end">Latest</h2>
        <h2 className="font-weight-light col-12 col-md-6 text-center text-md-start ps-md-0">Projects</h2>

      </div>
      <div className="row mx-auto my-1 justify-content-center border border-dark py-5">
          <div id="recipeCarousel" className="carousel slide my-5" data-bs-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <CarouselItem small={angularSmall} big={angularBig} description="Small Store made in Angular" active="active"></CarouselItem>
                <CarouselItem small={exchangeSmall} big={exchangeBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={eventSmall} big={eventBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={foundationSmall} big={foundationBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={videoSmall} big={videoBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={blogSmall} big={blogBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={reactVideoSmall} big={reactVideoBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={swagSmall} big={swagBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={gamesSmall} big={gamesBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={foodSmall} big={foodBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={confSmall} big={confBig} description="Small Store made in Angular"></CarouselItem>
                <CarouselItem small={diarySmall} big={diaryBig} description="Small Store made in Angular"></CarouselItem>
              </div>
              <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
          </div>
        <h5 className="mt-2 fw-light btn btn-dark carousel-shop">CONTACT ME</h5>
      </div>
    </div>
  );
}

export default Home;
