const FavoriteItem = (props) => {
    return (
        <div className="favoriteItemCard" key={props.key}>
            <div className="favoriteItemCardImage">
                <button><img src={props.url} alt="" /></button>  
            </div>
            <div className="favoriteItemCardDetails">
                <h2>{props.title}</h2>
                <span>{`€ ${props.price.toFixed(2)}`}</span>
            </div>
            <button className="favoriteToCartBtn" onClick={props.action}>ADD TO CART</button>
        </div>
    );
};

export default FavoriteItem;