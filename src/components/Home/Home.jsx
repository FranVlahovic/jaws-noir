import HomeClub from "./HomeClub";
import HomeCarousel from "./HomeCarousel";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Jaws & Noir"
    }, [])

    return (
        <section>
            <HomeCarousel />
            <HomeClub />
        </section>
    );
}
export default Home;