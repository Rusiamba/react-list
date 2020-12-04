import PropTypes from 'prop-types';

function Quantity({quantity}) {
    let postfics;
    if(quantity <= 10) postfics = 'low'
    else if(quantity <= 20) postfics = 'medium'
    else postfics = 'high'
    return (
        <p className={`item-quantity level-${postfics}`}>{quantity} left</p>
    );
}

Quantity.propTipes = {
    quantity: PropTypes.number,
}

Quantity.default = {
    quantity: 0,
}

export default Quantity;
