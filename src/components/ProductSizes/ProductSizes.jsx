import React, {useEffect, useState} from 'react';
import { Space, Button } from 'antd';
import {
    StyledWrap,
} from './ProductSizesStyled';
import {getSizes} from "../../services/api";

const ProductSizes = () => {
    const [productDataSize, setProductDataSize] = useState([]);
    console.log(productDataSize)

    useEffect(() => {
        getSizes().then((response) => {
            setProductDataSize(response);
        })
    }, []);

    return (
        <>
            {
                productDataSize && (
                    <StyledWrap>
                        <div>Sizes:</div>
                        <Space direction="vertical">
                            <Space wrap>
                                {productDataSize &&
                                    productDataSize?.map((item, index) => {
                                        return <Button  key={index} size={'small'}>
                                            {item.label}-{item.number}
                                        </Button>
                                    })
                                }
                            </Space>
                        </Space>
                    </StyledWrap>
                )
            }
        </>
    )
}

export default ProductSizes;