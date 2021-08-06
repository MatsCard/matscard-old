import angularBig from '../assets/images/angular-firebase-store-big.png'
import angularSmall from '../assets/images/angular-firebase-store-small.png'
import exchangeSmall from '../assets/images/platzi-exchange-small.png'
import exchangeBig from '../assets/images/platzi-exchange-big.png'
import eventSmall from '../assets/images/react-bootstrap-event-small.png'
import eventBig from '../assets/images/react-bootstrap-event-big.png'
import foundationSmall from '../assets/images/platzi-foundation-small.png'
import foundationBig from '../assets/images/platzi-foundation-big.png'
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


function Carousel() {
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
    <div className="container carousel-container text-center mb-5">
      <div className="gallery-title row ">
        <h3 className="font-weight-light col-12 col-md-6 text-center text-md-end">Latest</h3>
        <h3 className="font-weight-light col-12 col-md-6 text-center text-md-start ps-md-0">Projects</h3>

      </div>
      <div className="row mx-auto mx-1 mt-5 justify-content-center border border-dark pb-1 pt-5">
          <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <CarouselItem small={angularSmall} big={angularBig} description="Store made in Angular" active="active" link="https://platzi-store-232c3.web.app/products"></CarouselItem>
                <CarouselItem small={exchangeSmall} big={exchangeBig} description="Bitcoin value exchange" link="https://matscard-exchange.netlify.app/"></CarouselItem>
                <CarouselItem small={eventSmall} big={eventBig} description="Platzi conference" link="ttps://matscard.github.io/react-bootstrap-event"></CarouselItem>
                <CarouselItem small={foundationSmall} big={foundationBig} description="Tattoo store" link="https://matscard.github.io/platzi-foundation/"></CarouselItem>
                <CarouselItem small={blogSmall} big={blogBig} description="Blog" link="https://matscard.github.io/platzi-blog/"></CarouselItem>
                <CarouselItem small={reactVideoSmall} big={reactVideoBig} description="Favorite videos" link="https://matscard.github.io/react-video/"></CarouselItem>
                <CarouselItem small={swagSmall} big={swagBig} description="Gatsby store" link="https://ps-matscard.netlify.app/"></CarouselItem>
                <CarouselItem small={gamesSmall} big={gamesBig} description="Videogames news" link="https://matscard.github.io/platzi-games/"></CarouselItem>
                <CarouselItem small={foodSmall} big={foodBig} description="Food store" link="https://matscard.github.io/platzi-food/"></CarouselItem>
                <CarouselItem small={confSmall} big={confBig} description="Badges database" link="https://matscard.github.io/react-badges/"></CarouselItem>
                <CarouselItem small={diarySmall} big={diaryBig} description="Notepad store" link="https://matscard.github.io/react-diary/"></CarouselItem>
              </div>
              <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
          </div>
          <a href="mailto: mats.card.one@gmail.com">
        <h5 className="mt-2 fw-light btn btn-dark carousel-shop">
            CONTACT ME
            </h5>

          </a>
      </div>
    </div>
  );
}

export default Carousel;
