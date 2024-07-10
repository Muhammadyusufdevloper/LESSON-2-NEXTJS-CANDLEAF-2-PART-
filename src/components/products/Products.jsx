"use client";
import React, { memo } from 'react'
import "./Products.scss"
import Link from 'next/link'
import Image from 'next/image'

const Products = ({ limit, title, text, PRODUCT }) => {
    return (
        <>
            <section className='product'>
                <div className='container'>
                    <div className='product__info'>
                        <h2 className='product__title'>{title}</h2>
                        <p className='product__text'>{text} </p>
                    </div>
                    <div className='product__cards'>
                        {PRODUCT?.products?.slice(0, limit)?.map((el) => (
                            <div key={el?.id} className="product__card">
                                <Link href={`/product/${el?.id}`} className="product__card__img">
                                    <Image width={150} height={150} alt={el?.title} src={el?.images[0]} />
                                </Link>
                                <div className="product__card__info">
                                    <h3>{el?.title}</h3>
                                    <p>{el?.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Products)
