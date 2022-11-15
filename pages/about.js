import NavBar from "../components/navbar";
import Socials from "../components/socials";

const About = () => {
    return(
    <div className="text-simbiosis-gray text-xl font-Roboto">
        <NavBar />
        <div className="cols-2">
            <div className="mx-auto px-12 flex items-center justify-around ">
            About us
            </div>
            <div>
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