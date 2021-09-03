import Item from './item';
import './catalog.css'


const Catalog = () => {
    return(
        <div className="catalog-page">
            <h3>Check our amazing products</h3>
            <div className="d-flex flex-wrap item-container">
            <Item title="sadsafs" price="123.12"></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            </div>
        </div>
    ); 
};

export default Catalog;