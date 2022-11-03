import React from 'react'
import SDImage from './SDImage'

const ImageBar = ({images}) => {
    return (
        <section className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {images.map((image, i) => {
                        return <div className="flex flex-wrap w-1/3" key={images[i].imgID}>
                            <SDImage
                                imgSrc={images[i].imgSrc}
                                imgID={images[i].imgID}
                                imgCaption={images[i].imgCaption} />
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default ImageBar