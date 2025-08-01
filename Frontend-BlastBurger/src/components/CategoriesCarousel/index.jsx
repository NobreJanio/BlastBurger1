import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import { api } from '../../services/api'
import { Container, ContainerItems } from './styles'
import { Title } from './styles';
import { useNavigate } from 'react-router-dom';


export function CategoriesCarousel() {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            
            const categoriesWithUrl = data.map(category => ({
                ...category,
                url: `/category-file/${category.path}`
            }));
            
            setCategories(categoriesWithUrl);
        }

        loadCategories();
    }, []);

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
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass='carousel-item'
            >
                {categories.map((category) => (
                    <ContainerItems
                        key={category.id}
                        $imageUrl={category.url}
                        onClick={() => navigate(`/cardapio?categoria=${category.id}`)}
                    >
                        <p>{category.name}</p>
                    </ContainerItems>
                ))}


            </Carousel>
        </Container>
    )
}