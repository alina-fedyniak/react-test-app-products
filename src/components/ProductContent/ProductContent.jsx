import React, {useEffect, useState, useCallback} from 'react';
import { Image, Space, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
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
    const sizes = productData?.colors?.at(0).sizes.join(', ');
    console.log(productData?.colors?.at(0).sizes)

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
                        <Swiper>
                            {
                                productByColor?.images?.map((item) => (
                            <SwiperSlide>
                                <StyledImg>
                                    <Image src={item}/>
                                </StyledImg>
                            </SwiperSlide>
                                ))
                            }
                        </Swiper>
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
                            <StyledSizes>Sizes: {sizes}</StyledSizes>
                        </StyledBlockInfo>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductContent;