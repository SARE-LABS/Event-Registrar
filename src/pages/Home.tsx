import { About } from "../Components/about/Index"
import { Footer } from "../Components/footer"
import { Instructor } from "../Components/instructor/Index"
import { Landing } from "../Components/landing/Index"
import { Nav } from "../Components/nav/Index"

export const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <Nav/>
        <Landing/>
        <About/>
        <Instructor/>
        <Footer/>
    </div>
  )
}
