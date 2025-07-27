import { useContext, createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];
        if (cartIndex >= 0) {
            // Atualiza a quantidade do produto existente no carrinho
            newProductsInCart = [...cartProducts];
            newProductsInCart[cartIndex].quantity += 1;
        } else {
            // Adiciona um novo produto ao carrinho
            const newProduct = { 
                ...product, 
                quantity: 1,
                url: product.url || `/product-file/${product.path}`
            };
            newProductsInCart = [...cartProducts, newProduct];
        }
        setCartProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    };

    const clearCart = () => {
        setCartProducts([]);

        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        });

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prod) => prod.id === productId);

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburguer:cartInfo');

        if (clientCartData) {
            const parsedData = JSON.parse(clientCartData);
            const productsWithUrl = parsedData.map(product => ({
                ...product,
                url: product.url || `/product-file/${product.path}`
            }));
            setCartProducts(productsWithUrl);
        }
    }, []);

    return (
        <CartContext.Provider
            value={{ cartProducts, putProductInCart, clearCart, decreaseProduct, increaseProduct, deleteProduct }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with a context');
    }

    return context;
};
