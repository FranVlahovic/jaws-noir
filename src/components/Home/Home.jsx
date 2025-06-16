import HomeClub from "./HomeClub";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
    return (
        <section className="home">
            <HomeCarousel />
            <HomeClub />
        </section>
    );
}
export default Home;