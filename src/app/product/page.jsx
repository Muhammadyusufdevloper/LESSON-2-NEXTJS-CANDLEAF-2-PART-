import { getData } from '@/api/fetchGet'
import Products from '@/components/products/Products'
import React from 'react'

const Product = async ({ limit, title, text }) => {
    let data = await getData("/products")
    return (
        <>
            <section>
                <Products limit={limit} title={title} text={text} PRODUCT={data} />
            </section>
        </>
    )
}

export default Product
