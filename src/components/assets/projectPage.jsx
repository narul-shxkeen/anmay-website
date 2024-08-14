import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects(props) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const renderIcon = (svgContent) => {
    if (!svgContent) return null;
    return (
      <div className="w-auto h-auto flex items-center justify-center">
        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>
    );
  };

  const paragraphs = props.text.split("\n");

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  return (
    <div className="py-28">
      <div className="mx-6 rounded-xl px-6 py-20 grid grid-cols-1 md:grid-cols-5 bg-white gap-x-9 gap-y-12">
        {props.coverImage && (
          <div className="col-span-1 md:col-span-5 mb-6">
            <img 
              src={props.coverImage} 
              alt="Project Cover" 
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        )}
        
        <div className="flex flex-col items-start gap-6 col-span-1 md:col-span-3 row-span-2 w-auto justify-start">
          <h1 className="poppins-semibold text-3xl md:text-6xl text-center md:text-left">
            {props.title}
          </h1>
          <p className="poppins-light md:text-xl text-lg">{props.subtitle}</p>
          <hr className="border-1 border-black w-full z-0" />
        </div>
        <div className="col-span-1 md:col-span-2 flex bg-[#80a8bd] shadow-md md:z-20 shadow-stone-700 rounded-xl px-4 py-4 w-full md:w-2/5 hover:bg-gray-700 transition group duration-300 hover:text-white">
          {props.links && (
            <div className="flex flex-col w-full justify-start items-start">
              <h1 className="poppins-semibold text-lg md:text-xl col-span-1 row-span-2 text-center pl-2 underline underline-offset-4 group-hover:decoration-teal-400 transition duration-300">
                Links
              </h1>
              <div className="mt-3 flex flex-col gap-3 justify-between w-full">
                {props.links.map((link, index) => (
                  <div key={index} className="">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#80a8bd] hover:text-white transition duration-300 ease-in px-2 py-1 rounded-lg"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="col-span-1 md:col-span-5 flex flex-col">
          {props.technologies && (
            <div className="flex flex-col gap-3 w-full justify-start items-start">
              <h1 className="poppins-semibold text-lg md:text-xl col-span-1 row-span-2 text-center">
                Tools Used
              </h1>
              <div className="flex flex-wrap justify-start w-full gap-6">
                {props.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 bg-[#f7f0f0] p-2 rounded-xl shadow-lg w-[90px] hover:bg-[#80a8bd] hover:text-white transition duration-200"
                  >
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      {renderIcon(tech.icon)}
                      <span className="text-sm poppins-light md:text-base mt-1">
                        {tech.name}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 md:col-span-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="poppins-regular text-sm md:text-base mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {props.projectImageUrls && props.projectImageUrls.length > 0 && (
          <div className="col-span-1 md:col-span-5">
            <button
              onClick={openCarousel}
              className="bg-[#f7f0f0] hover:bg-[#80a8bd] text-black hover:text-white transition duration-200 poppins-regular py-2 px-4 rounded-lg shadow-lg"
            >
              View Project Images
            </button>
            {isCarouselOpen && (
              <div className="rounded-lg fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#c6f2f7] p-4 rounded-lg h-auto max-h-[90vh] w-[400px] md:w-[760px] overflow-y-auto">
                  <Carousel
                    infiniteLoop={true}
                    showThumbs={true}
                    renderArrowPrev={(onClickHandler, hasPrev, label) => (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 z-10 rounded-lg"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          ></path>
                        </svg>
                      </button>
                    )}
                    renderArrowNext={(onClickHandler, hasNext, label) => (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 z-10 rounded-lg"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </button>
                    )}
                    renderThumbs={() =>
                      props.projectImageUrls.map((url, index) => (
                        <div
                          key={index}
                          className="h-16 w-24 flex items-center justify-center overflow-hidden"
                        >
                          <img
                            src={url}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))
                    }
                    renderIndicator={(
                      onClickHandler,
                      isSelected,
                      index,
                      label
                    ) => {
                      const indicatorClass = isSelected
                        ? "bg-gray-700"
                        : "bg-gray-300";
                      return (
                        <li
                          className={`inline-block w-3 h-3 mx-1 rounded-full ${indicatorClass}`}
                          onClick={onClickHandler}
                          onKeyDown={onClickHandler}
                          value={index}
                          key={index}
                          role="button"
                          tabIndex={0}
                          aria-label={`${label} ${index + 1}`}
                        />
                      );
                    }}
                  >
                    {props.projectImageUrls.map((url, index) => (
                      <div
                        key={index}
                        className="h-[50vh] flex items-center justify-center"
                      >
                        <img
                          src={url}
                          alt={`Project image ${index + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </Carousel>
                  <button
                    onClick={() => setIsCarouselOpen(false)}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;