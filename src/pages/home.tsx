import Carousel from "../components/mainContent/carousel";

const Home = () => {
  return (
    <>
      <h1>Welcome to Haze Gray AI</h1>
      <h3 style={{marginBottom: "15px"}}>
        Where nothing is black and white — especially not our website (yet).
        <br/>
        We’re currently training our AI agents, wiring up the magic, and putting
        the final polish on something seriously powerful. Our site is under
        construction, but we’ll be launching soon with solutions that scale with
        speed, impact, and a healthy dose of machine-powered brilliance. Stay
        tuned.
        <br/>
        <br/>
        The future’s not black and white — it’s Haze Gray.
      </h3>
      <Carousel />
    </>
  );
};

export default Home;
