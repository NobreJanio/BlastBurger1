import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { CardImage, Container } from './styles'
import { CartButton } from '../CartButton'

import { toast } from 'react-toastify'


export function CardProduct({ product }) {
    const { putProductInCart } = useCart();

    const handleAddToCart = (product) => {
        putProductInCart(product);
        toast.success(`${product.name} adicionado ao carrinho!`); // Exibir toast
    };


    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton onClick={() => handleAddToCart(product)}></CartButton>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}