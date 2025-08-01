import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import { api } from '../../services/api'
import { Container } from './styles'
import { Title } from './styles';
import { CardProduct } from '../CardProduct';
import { formatCurrency } from '../../utils/formatCurrency'


export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products')

            const onlyOffers = data
                .filter(product => product.offer)
                .map(product => ({
                    ...product,
                    currencyValue: formatCurrency(product.price), // Formatação correta do preço
                    url: `/product-file/${product.path}` // URL completa da imagem
                }));

            setOffers(onlyOffers)
        }

        loadProducts()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2
        }
    };

    return (
        <Container>
            <Title>Ofertas do dia</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass='carousel-item'
            >
                {offers.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}


            </Carousel>
        </Container>
    )
}