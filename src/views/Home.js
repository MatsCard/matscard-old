import Carousel from "../components/Carousel"
import Profile from '../components/Profile'
import ContactMe from '../components/ContactMe'
import BlackBackground from '../components/BlackBackground'
import Socials from "../components/Socials"

function Home() {
  

  return (
    <div>
      <Socials></Socials>
      <Profile></Profile>
      <BlackBackground></BlackBackground>
      <Carousel></Carousel>
      <ContactMe></ContactMe>
    </div>
  );
}

export default Home;
