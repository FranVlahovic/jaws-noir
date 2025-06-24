import { Link, useOutletContext, useParams } from "react-router-dom";
import styles from "./Store.module.css";
import ShippingIcon from "/src/assets/icons/truck-outline.svg";
import { useEffect, useState } from "react";

const StoreItem = () => {
    const { id } = useParams();

    const { setCartItems } = useOutletContext();

    const [item, setItem] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const itemSizes = ["S", "M", "L", "XL", "XXL"];

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.error(err))
    }, [id]);

    if (!item) return <p>Loading...</p>;

    const itemGender = item.category.split(" ")[0];
    const itemCategory = itemGender.slice(0, -2).toUpperCase();

    function addToCart() {
        if (!item.title.includes("Fjallraven") && !selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }
        setCartItems(prev => ([...prev, { ...item, size: selectedSize ?? "Default Size", quantity: 1 }]));
    }
    

    return (
        <main className={styles.storeItemSection}>
            <img className={styles.storeItemMainImage} src={item.image} alt={`${item.title} image`} />
            <section className={styles.storeItemDetails}>
                <Link to={`/store/${itemCategory}`}>
                    <h2>{`${itemGender.toUpperCase()} COLLECTION`}</h2>
                </Link>

                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <span>{`€ ${item.price.toFixed(2)}`}</span>

                <h2>SIZE:</h2>
                <ul className={styles.storeItemSizes}>
                    {item.title.includes("Fjallraven") ? (
                        <li>Comes in default size.</li>
                    ) : (
                        itemSizes.map((size) => (
                            <li className={styles.storeItemSize} key={size}>
                                <button
                                    className={`storeItemSizeBtn ${selectedSize === size ? "selected" : ""}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            </li>
                        ))
                    )}
                </ul>

                <button className={styles.loginBtn} onClick={() => addToCart()}>
                    ADD TO CART
                </button>

                <span className={styles.storeItemDelivery}>
                    <img src={ShippingIcon} alt="Shipping Icon" />
                    FREE STANDARD DELIVERY ON ALL ORDERS
                </span>
            </section>
        </main>
    );
};

export default StoreItem;
