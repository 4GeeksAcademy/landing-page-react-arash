import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cardsInfo = [
  {
    title: "Card title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonLabel: "Find Out More!",
    buttonUrl: "#",
    imgUrl: "https://via.placeholder.com/500x325"
  },
  {
    title: "Card title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonLabel: "Find Out More!",
    buttonUrl: "#",
    imgUrl: "https://via.placeholder.com/500x325"
  },
  {
    title: "Card title 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonLabel: "Find Out More!",
    buttonUrl: "#",
    imgUrl: "https://via.placeholder.com/500x325"
  },
  {
    title: "Card title 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonLabel: "Find Out More!",
    buttonUrl: "#",
    imgUrl: "https://via.placeholder.com/500x325"
  }
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />

        <div className="row mb-4">
          {cardsInfo.map((card, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card
                title={card.title}
                text={card.text}
                buttonLabel={card.buttonLabel}
                buttonUrl={card.buttonUrl}
                imgUrl={card.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;