import React, { useState, useEffect } from "react";
import "../App.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Landing({ isBlurred }) {
  const roles = ["a Learner", "an Inquisitive Mind","an Explorer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFalling, setIsFalling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFalling(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFalling(false);
      }, 1500); // Duration of the fall-back animation
    }, 3000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="flex justify-center items-center h-[100vh] w-[100vw]">
        {/* <img
          className="absolute -z-10 object-cover h-[100vh] w-full"
         src="/images/anmay_Home.jpg"
          alt="image of raindrops on a leaf with a blurred background"
        /> */}
        {/* <div className="right-0 w-[100vw] absolute z-20 flex justify-end"><img src="/images/anmay_Home2.jpg" className="w-[30vw] h-[70vh] mr-24 rounded-xl object-cover order-2"/></div> */}
        <div className="absolute w-[100vw] h-full left-0"><img src="/images/anmay_Home3.jpg" className="w-full h-full"/></div>
        <div className="w-full flex flex-col justify-start items-start gap-4 pl-12 order-1">
        <h1 className="text-4xl sm:text-7xl text-white poppins-bold z-10 text-center px-4 md:px-0">
          Anmay Khemka
        </h1>
        <p className="relative text-2xl md:text-5xl text-white poppins-medium text-center top-6 md:top-0">
          I am {" "}
          <span className="inline-block w-[500px] text-left text-white">
            <span
              className={`inline-block ${isFalling ? "fall-back" : "appear"} text-left`}
            >
              {roles[currentRoleIndex]}
            </span>
          </span>
        </p>
        </div>
        <div className="flex rounded-full nav absolute bottom-9">
          <div className="flex gap-4 items-center">
            <a href="mailto:anmaykhemkawork@gmail.com" className="p-0 m-0">
              <div className="inline-block p-2 hover:text-white hover:bg-black rounded-full">
                <EmailIcon
                  fontSize="large"
                  className="mx-1 my-1 poppins-semibold"
                />
              </div>
            </a>
            {/* <a href="https://github.com/narul-shxkeen">
              <div className="inline-block p-2 hover:text-white hover:bg-black rounded-full">
                <GitHubIcon
                  fontSize="large"
                  className="mx-1 my-1 poppins-semibold"
                />
              </div>
            </a> */}
            <a href="https://www.linkedin.com/in/anmaykhemka/">
              <div className="inline-block p-2 hover:text-white hover:bg-black rounded-full">
                <LinkedInIcon
                  fontSize="large"
                  className="mx-1 my-1 poppins-semibold"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
