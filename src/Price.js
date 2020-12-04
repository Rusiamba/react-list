import './App.css';
import PropTypes from 'prop-types';

function Price({currencyCode, price}) {
    let prices;
    if(currencyCode === 'USD') prices = `$${price}`
    else if(currencyCode === 'EUR') prices = `€${price}`
    else prices = `${price}GBP`
    return (
        <p className="item-price">
            {prices}
        </p>
    );
}

Price.propTipes = {
    currencyCode: PropTypes.string,
    price: PropTypes.string,
}

Price.default = {
    currencyCode: 'GBP',
    price: 0,
}

export default Price;
