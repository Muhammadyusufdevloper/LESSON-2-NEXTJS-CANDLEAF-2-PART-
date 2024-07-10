import { getData } from '@/api/fetchGet'
import SingleWrapper from '@/components/single-rout/SingleWrapper'
import React from 'react'

const SingleRout = async ({ params }) => {
    let { proID } = params
    let singleData = await getData(`/products/${proID}`)
    return (
        <>
            <section>
                <div className='w-full max-w-6xl px-16 mx-auto'>
                    <SingleWrapper product={singleData} />
                </div>
            </section>
        </>
    )
}

export default SingleRout