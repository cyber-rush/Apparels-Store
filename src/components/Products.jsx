import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const fetchProductsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}

const Products = () => {
    useEffect(() => {
        fetchProductsData();
    }, []);

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProductsData,
    });

    const [likedProducts, setLikedProducts] = useState([]);
    console.log(likedProducts)

    const handleLikeToggle = (productId) => {
        if (likedProducts.includes(productId)) {
            // Unlike the product
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            // Like the product
            setLikedProducts([...likedProducts, productId]);
        }
    };

    console.log(data, isLoading, error);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map(product => (
                        <div key={product.id} className="relative bg-white p-4 rounded-md shadow-md">
                            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-700">{product.description}</p>
                            <p className="text-purple-500 mt-2">${product.price}</p>
                            <button
                                onClick={() => handleLikeToggle(product.id)}
                                className={`absolute bottom-4 right-4 text-xl focus:outline-none transition-colors duration-300 ${likedProducts.includes(product.id) ? 'text-red-500' : 'text-gray-500'}`}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
