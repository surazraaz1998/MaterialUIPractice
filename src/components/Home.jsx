import Navbar from "./Navbar";
import Hero from "./Hero";
const Home = (props) => {
  return (
    <>
      <Navbar onLogout={props.onLogout} />
      <Hero />
    </>
  );
};
export default Home;
