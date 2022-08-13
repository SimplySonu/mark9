import "./styles.css";
import React from "react";

export default function App() {
  const [uiData, setUiData] = React.useState([]);
  const catageory = ["Action", "Drama", "Scifi"];
  const data = {
    Action: [
      {
        Name: "Godzilla vs. Kong",
        Desc:
          "In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a secret weapon to stop Godzilla's mysterious rampages",
        Ratings: "⭐⭐⭐⭐"
      },
      {
        Name: "Boss Level",
        Desc:
          "Boss Level is a 2021 American science fiction action film directed by Joe Carnahan and written by Carnahan and Chris and Eddie Borey, from a story by the Boreys. It stars Frank Grillo as a retired special forces soldier who tries to escape a never-ending time loop that results in his death",
        Ratings: "⭐⭐⭐"
      },
      {
        Name: "Mortal Kombat",
        Desc:
          "Based on the popular fighting video game. Mortal Kombat is a tournament where fighters duel to a death match. A sorcerer from another world named Shang Tsung invites some of the world's best fighters to compete in the tournament, along with them comes characters such as Liu Kang, Johnny Cage and Sonya Blade",
        Ratings: "⭐⭐⭐⭐"
      }
    ],
    Drama: [
      {
        Name: "Avengers Endgame",
        Desc:
          "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. ... In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War",
        Ratings: "⭐⭐⭐⭐"
      },
      {
        Name: "Parasite",
        Desc:
          "Parasite follows the Kim family struggling to make ends meet until son Ki-woo comes across an unexpected opportunity. With no experience teaching English, he decides to accept a job tutoring Da-hye, a daughter from the wealthy Park family",
        Ratings: "⭐⭐⭐⭐⭐"
      },
      {
        Name: "Mission Impossible",
        Desc:
          "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization. Based on the hit television series. Jim Phelps (Jon Voight) was sent to Prague for a mission to prevent the theft of classified material",
        Ratings: "⭐⭐⭐"
      }
    ],
    Scifi: [
      {
        Name: "Inception",
        Desc:
          "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets",
        Ratings: "⭐⭐⭐⭐"
      },
      {
        Name: "Interstellar",
        Desc:
          "Interstellar is a 2014 epic science fiction drama film co-written, directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity",
        Ratings: "⭐⭐⭐⭐⭐"
      },
      {
        Name: "Source Code",
        Desc:
          "It stars Jake Gyllenhaal as a U.S. Army Captain named Colter Stevens, who is sent into an eight-minute digital recreation of a real-life train explosion, tasked with figuring out the identity of the terrorist who bombed it. Michelle Monaghan, Vera Farmiga, and Jeffrey Wright play supporting roles",
        Ratings: "⭐⭐⭐"
      }
    ]
  };
  function getRecommendation(name) {
    setUiData(data[name]);
  }

  const movie = catageory.map((name, i) => (
    <button key={i} onClick={() => getRecommendation(name)}>
      {name}
    </button>
  ));
  const showUi = uiData.map((data, i) => (
    <div className="card" key={i}>
      <h2>{data.Name}</h2>
      <h3>{data.Desc}</h3>
      <h4>{data.Ratings}</h4>{" "}
    </div>
  ));

  return (
    <div className="App">
      <h1 className="heading">Movie Recommendation</h1>
      <div className="category">{movie}</div>
      <div className=" card-container">{showUi}</div>
    </div>
  );
}
