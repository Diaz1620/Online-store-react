
var data = [
    {
        _id:"a456w7e8iuj",
        title: "Orange",
        price: 2.34,
        category: "Fruit",
        image: "orange.jpeg",
        discount: 3,
        minimum: 6,
    },
    {
        _id:"a456w7e8jhg",
        title: "Strawberry",
        price: 3.11,
        category: "Fruit",
        image: "strawberries-5.png",
        discount: 0,
        minimum: 3,
    },
    {
        _id:"a456w7e9gks",
        title: "Orange Juice",
        price: 23.91,
        category: "Beverages",
        image: "orange-juice.png",
        discount: 10,
        minimum: 1,
    },
];


class ItemService {
    
    getCatalog(){
        return data;
    }
}

export default ItemService;