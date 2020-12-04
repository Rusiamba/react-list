import PropTypes from 'prop-types';
import Price from "./Price";
import Quantity from "./Quantity";

function Item({url, MainImage, currencyCode, title, price, quantity}) {
    let imgUrl;
    if (MainImage) imgUrl = MainImage.url_570xN;
    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={imgUrl} alt='product`s picture'/>
                </a>
            </div>
            <div className="item-details">
                <p>{title && title.length > 50 ? title.slice(0, 51) + '...' : title}</p>
                <Price price={price} currencyCode={currencyCode}/>
                <Quantity quantity={quantity}/>
            </div>
        </div>
    );
}

Item.propTipes = {
    url: PropTypes.string,
    MainImage: PropTypes.object,
    currencyCode: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
}

Item.default = {
    url: '',
    MainImage: {},
    currencyCode: '',
    title: '',
    price: 0,
    quantity: 0,
}

export default Item;
