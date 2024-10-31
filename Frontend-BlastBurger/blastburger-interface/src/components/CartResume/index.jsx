import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        if (Array.isArray(cartProducts)) {
            const sumAllItems = cartProducts.reduce((acc, current) => {
                // Garantir que current.price e current.quantity estão definidos e são números
                return (current.price || 0) * (current.quantity || 0) + acc;
            }, 0);
            setFinalPrice(sumAllItems);
        } else {
            setFinalPrice(0);
        }
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((prd) => {
            return { id: prd.id, quantity: prd.quantity, price: prd.price };
        });

        try {
            const { data } = await api.post('/create-payment-intent', { products });

            console.log(data);

            navigate('/checkout', {
                state: data,
            });
        } catch (err) {
            toast.error('Algo não saiu como esperado, tente novamente!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Items</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>FinalizarPedido</Button>
        </div>
    );
}
