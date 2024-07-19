document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const products = [
        {
            id: 1,
            name: "Tiger Shoes",
            description: "Beige Lightweight walking shoes",
            price: "₱56.42",
            image: "prod1.jpg"
        },
        {
            id: 2,
            name: "High Heels",
            description: "Black and white high heels fashion shoes",
            price: "₱49.20",
            image: "prod2.jpg"
        },
        {
            id: 3,
            name: "Transformer",
            description: "Multi-color bulk shoes",
            price: "₱84.99",
            image: "prod3.jpg"
        },
        {
            id: 4,
            name: "Black Mamba",
            description: "All black lightweight shoes for men",
            price: "₱35.27",
            image: "prod5.jpg"
        },
        {
            id: 5,
            name: "Ghost Shoes",
            description: "All white women shoes",
            price: "₱66.21",
            image: "prod6.jpg"
        },
        {
            id: 6,
            name: "Orange Shoes",
            description: "Bright orange sports shoes",
            price: "₱77.80",
            image: "orange shoes.jpg"
        },
        {
            id: 7,
            name: "Blue Sneakers",
            description: "Casual blue sneakers",
            price: "₱85.30",
            image: "blue sneakers.jpg"
        },
        {
            id: 8,
            name: "White Sandals",
            description: "Comfortable white sandals",
            price: "₱45.90",
            image: "white sandals.jpg"
        },
        {
            id: 9,
            name: "Red Boots",
            description: "Stylish red boots",
            price: "₱120.50",
            image: "red boots.jpg"
        },
        {
            id: 10,
            name: "Gray Loafers",
            description: "Elegant gray loafers",
            price: "₱70.40",
            image: "gray loafers.jpg"
        },
        {
            id: 11,
            name: "Side Table",
            description: "Stylish side table",
            price: "₱150.23",
            image: "side table.jpeg"
        },
        {
            id: 12,
            name: "Coffee Table",
            description: "Small coffee table",
            price: "₱120.15",
            image: "small coffee table.jpg"
        },
        {
            id: 13,
            name: "Bedroom Chair",
            description: "Comfortable bedroom chair",
            price: "₱200.33",
            image: "bedroom chair.jpeg"
        },
        {
            id: 14,
            name: "Green Sofa",
            description: "Stylish green sofa",
            price: "₱350.57",
            image: "green sofa.jpg"
        },
        {
            id: 15,
            name: "Little Wood",
            description: "Decorative little wood piece",
            price: "₱45.65",
            image: "little wood.jpg"
        },
        {
            id: 16,
            name: "Black Bag",
            description: "Sturdy black bag",
            price: "₱65.20",
            image: "bags.jpg"
        },
        {
            id: 17,
            name: "Colorful Bag",
            description: "Trendy colorful bag",
            price: "₱60.66",
            image: "colorful bag.jpg"
        },
        {
            id: 18,
            name: "Black Hand Bag",
            description: "Elegant black hand bag",
            price: "₱75.52",
            image: "black hand bag.jpg"
        },
        {
            id: 19,
            name: "Big Black Bag",
            description: "Spacious big black bag",
            price: "₱90.25",
            image: "big black bag.jpg"
        },
        {
            id: 20,
            name: "Big White Bag",
            description: "Stylish big white bag",
            price: "₱85.57",
            image: "big white bag.jpg"
        },
        {
            id: 21,
            name: "Necklace",
            description: "Heart shaped gold necklace for women",
            price: "₱50.00",
            image: "necklace gold.jpg"
        },
        {
            id: 22,
            name: "Silver Ring",
            description: "Diamond shaped rings",
            price: "₱74.02",
            image: "silver rings.jpg"
        },
        {
            id: 23,
            name: "Hoop Earrings",
            description: "Chic hoop earrings",
            price: "₱40.55",
            image: "hoop earrings.jpg"
        },
        {
            id: 24,
            name: "Small Earrings",
            description: "Delicate small earrings",
            price: "₱30.56",
            image: "small earrings.jpg"
        },
        {
            id: 25,
            name: "Padlock Necklace",
            description: "Trendy padlock necklace",
            price: "₱55.15",
            image: "padlock necklace.jpg"
        },
        {
            id: 26,
            name: "Floral Dress",
            description: "Pink dress with florals for kids",
            price: "₱77.33",
            image: "floral.jpg"
        },
        {
            id: 27,
            name: "Terno Polo",
            description: "Terno Polo with different colors for kids",
            price: "₱44.58",
            image: "polo.jpg"
        },
        {
            id: 28,
            name: "White Dress",
            description: "Elegant white dress for girls",
            price: "₱120.20",
            image: "white dress.jpg"
        },
        {
            id: 29,
            name: "Jumper",
            description: "Stylish jumper",
            price: "₱90.15",
            image: "jumper.jpg"
        },
        {
            id: 30,
            name: "Fruit Shirt",
            description: "Colorful fruit shirt",
            price: "₱65.67",
            image: "fruit shirt.jpg"
        }
    ];

    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-price").innerText = product.price;
    }
});
