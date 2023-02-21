import React from 'react';
import { Image } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    StyledWrap,
    StyledName,
    StyledPrice,
    StyledImg,
} from './ProductCardStyled';

const ProductCard = (product) => {
    const productData = product?.product?.colors?.at(0);
    const image = productData?.images?.at(0);

    return (
        <>
            {
                product && (
                    <StyledWrap>
                        <NavLink to={`/product/${product?.product?.id}`}>
                            <StyledImg>
                                <Image src={image} />
                            </StyledImg>
                        </NavLink>
                        <NavLink to={`/product/${product?.product?.id}`}>
                            <StyledName>{product?.product?.name}</StyledName>
                        </NavLink>
                        <div>{productData?.description}</div>
                        <StyledPrice>{productData?.price}</StyledPrice>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductCard;