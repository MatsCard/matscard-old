import Carousel from "../components/Carousel"
import Profile from '../components/Profile'
import ContactMe from '../components/ContactMe'
import BlackBackground from '../components/BlackBackground'

function Home() {
  

  return (
    <div>
      <Profile></Profile>
      <BlackBackground></BlackBackground>
      <Carousel></Carousel>
      <ContactMe></ContactMe>
    </div>
  );
}

export default Home;
