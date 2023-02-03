import React from 'react';
import { Space, Button } from 'antd';

const ProductSizes = (props) => {

    const sizesAll = props.sizes.map((item) => {
        item.active = props.product.sizes.includes(item.id)
        return item
    });

    return (
        <>
            {
                sizesAll && (
                    <div>
                        <div>Sizes:</div>
                        <Space direction="vertical">
                            <Space wrap>
                                {props &&
                                    sizesAll?.map((item, index) => {
                                        return <Button
                                                        key={index} size={'small'}
                                                        disabled={!item.active}
                                        >
                                            {item.label}-{item.number}
                                        </Button>
                                    })
                                }
                            </Space>
                        </Space>
                    </div>
                )
            }
        </>
    )
}

export default ProductSizes;