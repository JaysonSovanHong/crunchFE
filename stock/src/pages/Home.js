import Photo1 from "../images/image1.jpeg";

const Home = () => {
  return (
    <div className="intro">
      <img className="about" src={Photo1} width="300px"></img>
      <div className="homeContainer">
        <h2>A new way to keep an eye on your Cryptos.</h2>
        <p>
          <p>
            “There is a wisdom that is woe; but there is a woe that is madness.
            And there is a Catskill eagle in some souls that can alike dive down
            into the blackest gorges, and soar out of them again and become
            invisible in the sunny spaces. And even if he for ever flies within
            the gorge, that gorge is in the mountains; so that even in his
            lowest swoop the mountain eagle is still higher than other birds
            upon the plain, even though they soar.” ― Herman Melville, Moby Dick
          </p>
        </p>
        <h3 className="motto">Built by the people for the people.</h3>
      </div>
    </div>
  );
};

export default Home;
