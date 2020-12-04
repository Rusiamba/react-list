import PropTypes from 'prop-types';
import Item from "./Item";

function Listing({items}) {
    return (
        <div className="item-list">
            {items.map(e => <Item key={e.listing_id} title={e.title} currencyCode={e.currency_code}
            url={e.url} price={e.price} quantity={e.quantity} MainImage={e.MainImage}/>)}
        </div>
    );
}

Listing.propTipes = {
    items: PropTypes.array
}

Listing.default = {
    items: []
}
export default Listing;
