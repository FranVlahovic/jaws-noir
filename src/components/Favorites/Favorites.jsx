import { useState } from "react";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
    const [favoriteItems, setFavoriteItems] = useState([
        {
            id: crypto.randomUUID(),
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            price: 39.99,
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        },
        {
            id: crypto.randomUUID(),
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            price: 39.99,
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        },
        {
            id: crypto.randomUUID(),
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            price: 39.99,
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        },
    ])

    return(
        <main className="favoritesSection">
            <h2>{`WISHLIST(${favoriteItems.length})`}</h2>
            <section className="favoriteItemsContainer">
                {favoriteItems.map((item) => (
                    <FavoriteItem key={item.id} url={item.image} title={item.title} price={item.price} />
                ))}
            </section>
        </main>
    );
};

export default Favorites;