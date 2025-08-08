import { About } from "../Components/about/Index"
import { Footer } from "../Components/footer"
import { Instructor } from "../Components/instructor/Index"
import { Landing } from "../Components/landing/Index"
import { Nav } from "../Components/nav/Index"

export const Home = () => {
  return (
    <div className="w-full h-max flex flex-col">
        <Nav/>
        <Landing/>
        <About/>
        <Instructor/>
        <Footer/>
    </div>
  )
}
