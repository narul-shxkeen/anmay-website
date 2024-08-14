import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Landing(){
 return <div className="h-auto w-[100vw] mb-20 flex flex-col md:grid md:grid-cols-4 md:grid-rows-5 md:justify-items-center justify-center gap-4 items-center pt-20 md:px-20 md:pt-24 px-6">
 <div className="md:col-span-1 md:row-span-2 h-auto md:h-[100%] w-full flex justify-center items-center rounded-xl">
    <img src="images/anmay_About.jpg" alt="image of problem-solver Anmay Khemka standing on a bridge" className="h-full w-auto rounded-xl object-cover"/></div>
 <div className="bg-white md:col-span-3 md:row-span-2 h-[100%] w-full flex py-4 md:py-0 pl-4 items-center rounded-xl">
    <h1 className="poppins-bold text-2xl md:text-4xl text-[#b9b9b9] leading-relaxed">Hey there!<br/> I am <br className="md:hidden"/><span className="text-4xl md:text-6xl text-[#3C7278] poppins-bold">Anmay Khemka</span></h1>
    </div>
    <div className="bg-white col-span-4 row-span-3 h-[100%] w-full flex  flex-col gap-3 px-4 py-8 rounded-xl">
        <h3 className="text-[#b9b9b9] poppins-semibold text-2xl md:text-4xl pb-0 mb-0">About Me</h3>
        <p className="poppins-regular text-base text-[#574B60] mt-4">   
            I am an aspiring <span className="poppins-semibold">Computational Physicist</span> currently enrolled in Ashoka University batch of 2026.<br/><br/> My past experiences have been in areas related to healthcare, air pollution, and teaching to name a few. In terms of technical skills my proficiency lies in web development, Computer Vision, Machine Learning, Data Analysis, and scientific communication. 
            To sum it up, I am passionate about using my technical skills to solve real-world problems which directly affect the lives of people facing them.
           <br/><br/> I also try to actively read in whatever free time I get, Dostoyevsky and Camus being my current favourites. I am part of the university team as a 10-meter Pistol Shooter.<br/><br/>   
           </p>
           <div className="flex gap-6 items-center relative">
        <a href="mailto:shokeenvaibhav280@gmail.com" className="p-0 m-0">
         <EmailIcon fontSize="large"/>
         </a>
         <a href="https://github.com/narul-shxkeen"><GitHubIcon fontSize="large"/></a>
        <a href="https://www.linkedin.com/in/vaibhav-shokeen-878275225/"><LinkedInIcon fontSize="large"/></a>
        </div>
    </div>
 </div>
}

export default Landing;