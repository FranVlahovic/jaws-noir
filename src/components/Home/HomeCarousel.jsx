import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/chevron-left.svg";

const carouselItems = [
    {
        id:crypto.randomUUID(),
        title: "CREATED FOR HER",
        class: "carouselSlideHer",
        link: "store/women",
    },
    {
        id:crypto.randomUUID(),
        title: "DESIGNED FOR HIM",
        class: "carouselSlideHim",
        link: "store/men",
    },
];

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    }

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }

    useEffect(() => {
        const autoCarousel = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(autoCarousel);
    }, [index]);

    return (
        <div className={styles[carouselItems[index].class]}>
            <button className={styles.arrowBtnLeft} onClick={prevSlide} aria-label="Previous Slide">
                <img src={Arrow} alt="Previous Slide Arrow" />
            </button>
            <div className={styles.carouselItem}>
                <h1 className={styles.carouselHeading}>
                    {carouselItems[index].title}
                </h1>
                <Link to={carouselItems[index].link} className={styles.homeLink}>
                    SHOP NOW
                </Link>                
            </div>
            <button className={styles.arrowBtnRight} onClick={nextSlide} aria-label="Next Slide" >
                <img src={Arrow} alt="Next Slide Arrow" />
            </button>
        </div>
    );
};

export default HomeCarousel;