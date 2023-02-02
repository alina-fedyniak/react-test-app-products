import React, {useEffect, useState} from 'react';
import { Image } from 'antd';
import { useParams } from 'react-router-dom';
import {
    StyledWrap,
    StyledName,
    StyledDescription,
    StyledPrice,
    StyledColorName,
    StyledSizes,
    StyledImg,
    StyledBlockInfo,
} from './ProductContentStyled';
import {getProduct} from "../../services/api";

const ProductContent = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const productData = product?.colors?.shift();
    const image = productData?.images?.shift();

    useEffect(() => {
        getProduct(+id).then((product) => {
            setProduct(product);
        })
    }, []);

    return (
        <>
            {
                productData && (
                    <StyledWrap>
                        <StyledImg>
                            <Image src={image}/>
                        </StyledImg>
                        <StyledBlockInfo>
                            <StyledName>{product?.name}</StyledName>
                            <StyledDescription>{productData?.description}</StyledDescription>
                            <StyledPrice>{productData?.price}</StyledPrice>
                            <StyledColorName>{productData?.name}</StyledColorName>
                            <StyledSizes>sizes</StyledSizes>
                        </StyledBlockInfo>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductContent;