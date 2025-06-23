import { Link } from "react-router-dom";
const StoreItem = () => {
    const itemGender = item.category.split(" ")[0];
    const itemCategory = itemGender.slice(0, -2).toUpperCase();

    const itemSizes = ["S", "M", "L", "XL", "XXL"];
    return(
        <main className="storeItemSection">
            <img src={item.image} alt={`${item.title} image`} />
            <section className="storeItemDetails">
                <Link to={`/store/${itemCategory}`}>
                    <h2 className="storeItemCategory">{`${itemGender.toUpperCase()}COLLECTION`}</h2>
                </Link>
                
                <h1 className="storeItemTitle">{item.title}</h1>
                
                <p className="storeItemDescription">{item.description}</p>
                
                <span className="storeItemPrice">{`€ ${item.price.toFixed(2)}`}</span>
                
                <ul className="storeItemSizes">
                    {item.title.includes("Fjallraven") ? <li>Comes in default size.</li> :
                        itemSizes.map((size) => (
                            <li className="storeItemSize" key={size}>
                                <button className="storeItemSizeBtn" onClick={() => setSelectedSize(size)}>{size}</button>
                            </li>
                        ))
                    }
                </ul>
                
                <button className="loginBtn" onClick={() => addToCart}>ADD TO CART</button>
                
                <span className="storeItemDelivery">
                    <img src="" alt="" />
                    FREE STANDARD DELIVERY ON ALL ORDERS
                </span>
            </section>
        </main>
    );
};

export default StoreItem;