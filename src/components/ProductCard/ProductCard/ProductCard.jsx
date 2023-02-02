import React from 'react';
import { Image } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    StyledWrap,
    StyledName,
    StyledDescription,
    StyledPrice,
} from './ProductCardStyled';

const ProductCard = (product) => {
    const productData = product?.product.colors.shift();
    const image = productData?.images?.shift();

    return (
        <>
            {
                product && (
                    <StyledWrap>
                        <NavLink to={`/product/${product?.product?.id}`}>
                            <Image src={image} />
                        </NavLink>
                        <NavLink to={`/product/${product?.product?.id}`}>
                            <StyledName>{product?.product?.name}</StyledName>
                        </NavLink>
                        <StyledDescription>{productData?.description}</StyledDescription>
                        <StyledPrice>{productData?.price}</StyledPrice>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductCard;