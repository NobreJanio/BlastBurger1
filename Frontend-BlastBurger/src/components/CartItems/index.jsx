import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import TrashIcon from '../../assets/trash.svg';
import { Table } from '../index';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles';

export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart();

    console.log('Cart Products in CartItems:', cartProducts);

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map((prd) => (
                        <Table.Tr key={prd.id}>
                            <Table.Td>
                                <ProductImage src={prd.url} />
                            </Table.Td>
                            <Table.Td>{prd.name}</Table.Td>
                            <Table.Td>{prd.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreaseProduct(prd.id)}>-</button>
                                    {prd.quantity}
                                    <button onClick={() => increaseProduct(prd.id)}>+</button>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td>
                                <ProductTotalPrice>{formatCurrency(prd.quantity * prd.price)}</ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage src={TrashIcon} alt="lixeira" onClick={() => deleteProduct(prd.id)} />
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <EmptyCart>Carrinho vazio</EmptyCart>
                )}
            </Table.Body>
        </Table.Root>
    );
}
