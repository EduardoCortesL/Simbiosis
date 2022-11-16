import NavBar from "../components/navbar";
import Socials from "../components/socials";

const About = () => {
    return(
    <div className="text-simbiosis-gray text-xl font-Roboto">
        <NavBar />
        <div className="grid-cols-2 flex items-center">
            <div className="mx-auto px-12">
            About us
            </div>
            <div className="mx-auto">
                Something more
            </div>
        </div>
      <div className="flex justify-center items-center pt-8">
        < Socials />
      </div>
    </div>
    )
};

export default About;