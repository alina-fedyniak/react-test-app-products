import React from 'react';
import { Image } from 'antd';
import {
    StyledWrap,
    StyledName,
    StyledDescription,
    StyledPrice,
} from './ProductCardStyled';

const ProductCard = (product) => {
    const firstProduct = product?.product.colors.shift();
    const image = firstProduct?.images?.shift();

    return (
        <>
            {
                product && (
                    <StyledWrap>
                        <Image src={image} />
                        <StyledName>{product?.product?.name}</StyledName>
                        <StyledDescription>{firstProduct?.description}</StyledDescription>
                        <StyledPrice>{firstProduct?.price}</StyledPrice>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductCard;