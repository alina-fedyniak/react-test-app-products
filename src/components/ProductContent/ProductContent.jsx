import React, {useEffect, useState, useCallback} from 'react';
import { Image, Space } from 'antd';
import { useParams } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import {
    StyledWrap,
    StyledName,
    StyledPrice,
    StyledBlockInfo,
    StyledBtn,
} from './ProductContentStyled';
import {getProduct, getSizes} from "../../services/api";
import ProductSizes from "../ProductSizes/ProductSizes";

const ProductContent = () => {
    const { id } = useParams();
    const [active, setActive] = useState(1);
    const [productSize, setProductSize] = useState([]);
    const [productData, setProductData] = useState([]);
    const [product, setProduct] = useState(null);
    const productByColor = product ?? productData?.colors?.at(0);

    useEffect(() => {
        Promise.all([getProduct(+id),getSizes()]).then((values) =>
        {
            const [products, sizes] = values;
            setProductData(products);
            setProductSize(sizes);
        });
    }, []);

    const changeColor = useCallback((id) => {
            const product = productData?.colors?.find((item) => item.id === id);
            setProduct(product)
        },
        [setProduct, productData]
    );

    const handleActive = (id) => {
        setActive(id);
    };

    return (
        <>
            {
                productByColor && (
                    <StyledWrap>
                        <Swiper>
                            {
                                productByColor?.images?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div>
                                            <Image src={item}/>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <StyledBlockInfo >
                            <StyledName>{productData?.name}</StyledName>
                            <div>{productByColor?.description}</div>
                            <StyledPrice>{productByColor?.price} $</StyledPrice>
                            <Space direction="vertical">
                                <Space wrap>
                                    {productData?.colors &&
                                        productData?.colors?.map((item, index) => {
                                            return <StyledBtn onClick={() => {
                                                changeColor(item.id);
                                                handleActive(item.id)
                                            }}
                                                  key={index}
                                                  size={'large'}
                                                  $isActive={active === item.id}
                                            >
                                                {item.name}
                                            </StyledBtn>
                                        })
                                    }
                                </Space>
                            </Space>
                            <ProductSizes sizes={productSize} product={productByColor}/>
                        </StyledBlockInfo>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductContent;