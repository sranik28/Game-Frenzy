import React from "react";
import "./toyGallery.css"



const ToyGallery = () => {
  const cardData = [
    {
      image: "https://wallpapercave.com/wp/wp7897048.jpg",
      buttonText: " Details",
      contentImage:"https://wallpapercave.com/wp/wp7897048.jpg"
    },
    {
      image:
        "https://www.roccat.com/cdn/shop/articles/unnamed_85098cea-a4de-47ed-b6f7-90d1fa64f116.jpg?v=1623429494",
      buttonText: "Details",
      contentImage:"https://wallpapercave.com/wp/wp7897048.jpg"
    },
    {
      image: "https://images.hdqwalls.com/wallpapers/battlefield-game-4k.jpg",
      buttonText: " Details",
      contentImage:"https://wallpapercave.com/wp/wp7897048.jpg"
    },
    {
      image:
        "https://i.ytimg.com/vi/tj6FGxy5WuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJ0NkD5Chs5TG-Dg-qgTcMnWA4Pw",
      buttonText: "Details",
      contentImage:"https://wallpapercave.com/wp/wp7897048.jpg"
    },
  ];
  return (
    <div>
      {/* <Title
        primaryText="WELCOME OUR GALLERY SECTION"
        secondaryText="it's awesome!"
      /> */}
      <h2 className='mb-20 text-4xl font-bold text-center underline'>Our <span className='text-[#AA77FF]'>Gallery</span></h2>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 ">
            {cardData.map((card, index) => (
              <div key={index} className="book">
                <div className="page">
                  <div
                    className="relative bg-center bg-cover border border-blue-500 front-page"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className="absolute inset-0 transition duration-300 bg-center opacity-0 after-content hover:opacity-100">
                      <img
                        src={card.contentImage}
                        alt="Content"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="back-page">
                    <p></p>
                    <button className="btn">{card.buttonText}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyGallery;