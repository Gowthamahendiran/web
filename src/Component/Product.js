import React, { useState, useEffect, useRef } from "react";
import product1 from "../Image/Trimmer.jpeg";
import product2 from "../Image/Gel.jpeg";
import product3 from "../Image/Racer.png";
import product4 from "../Image/Five.jpg";
import product5 from "../Image/Six.png";
import product6 from "../Image/Seven.jpg";
import product7 from "../Image/Eight.jpg";
import product8 from "../Image/Nine.jpg";
import product9 from "../Image/Gel.jpeg";



const Product = () => {
    const productsRef = useRef(null); // Create a ref for the Product section
    const products = [
        { image: product1, name: "Product 1" },
        { image: product2, name: "Product 2" },
        { image: product3, name: "Product 3" },
        { image: product4, name: "Product 4" },
        { image: product5, name: "Product 5" },
        { image: product6, name: "Product 6" },
        { image: product7, name: "Product 7" },
        { image: product8, name: "Product 8" },
        { image: product9, name: "Product 9" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % (products.length - 2));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <h2   ref={productsRef} className="OurProd">Our Products</h2>
        <br />
        <div className="ProductDiv" id="product">
            {[
                products[currentIndex % products.length],
                products[(currentIndex + 1) % products.length],
                products[(currentIndex + 2) % products.length]
            ].map((product, index) => (
                <div className="ProductItem" key={index}>
                    <img src={product.image} alt={`Product ${index + 1}`} className="ProductImage" />
                    <p className="ProductName">{product.name}</p>
                </div>
            ))}
        </div>
        <br />
        <button className="ViewMore">View More</button>
        <br />
        </>
    )
}

export default Product;
