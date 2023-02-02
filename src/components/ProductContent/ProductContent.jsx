import React, {useEffect, useState, useCallback} from 'react';
import { Image, Space, Button } from 'antd';
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
    const { id } = useParams();
    const [productData, setProductData] = useState([]);
    const [product, setProduct] = useState(null);
    const productByColor = product ?? productData?.colors?.at(0);
    const image = productByColor?.images?.at(0);

    const changeColor = useCallback(
        (id) => {
            const product = productData?.colors?.find((item) => item.id === id);
            setProduct(product)
        },
        [setProduct, productData]
    );

    useEffect(() => {
        getProduct(+id).then((response) => {
            setProductData(response);
        })
    }, []);

    return (
        <>
            {
                productByColor && (
                    <StyledWrap>
                        <StyledImg>
                            <Image src={image}/>
                        </StyledImg>
                        <StyledBlockInfo>
                            <StyledName>{productData?.name}</StyledName>
                            <StyledDescription>{productByColor?.description}</StyledDescription>
                            <StyledPrice>{productByColor?.price}</StyledPrice>
                            <StyledColorName>{productByColor?.name}</StyledColorName>
                            <Space direction="vertical">
                                <Space wrap>
                                    {productData?.colors &&
                                        productData?.colors?.map((item, index) => {
                                            return <Button onClick={() => changeColor(item.id)} key={index} size={'large'}>
                                                {item.name}
                                            </Button>
                                        })
                                    }
                                </Space>
                            </Space>
                            <StyledSizes>sizes</StyledSizes>
                        </StyledBlockInfo>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductContent;