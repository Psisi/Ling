import React, { useState, useEffect } from "react";
import styles from './SlideShow.module.css';

const SlideShow1 = (props) => {

    const {images} = props;
    const [ image, setImage ] = useState([]);
    const [ currentImageIdx, setCurrentImagIdx ] = useState(0);

    const prevSlide = () => {
        const resetToBack = currentImageIdx === 0;
        const idx = resetToBack ? images.length - 1 : currentImageIdx - 1;
        setCurrentImagIdx(idx);
        setImage(images[currentImageIdx]);
    };

    const nextSlide = () => {    
        const resetIndex = currentImageIdx === images.length - 1;
        const idx = resetIndex ? 0 : currentImageIdx + 1;
        setCurrentImagIdx(idx);
        setImage(images[currentImageIdx]);
    };

    useEffect(() => {
        setImage(images[currentImageIdx]);
    },[])

    return (
        <div className={styles.content}>
            <img src={image.url}/>
            <div className={styles.arrow}>
                <div className={styles.prev} onClick={prevSlide}>
                </div>
                <div className={styles.next} onClick={nextSlide}>
                </div>
            </div>
            <div className={styles.dotGroup}>
                {images.map((image,index) => (
                    <span key = {index} className={index === currentImageIdx? styles.active : styles.dot}></span>
                ))}
            </div>
        </div>
    )
}
export default SlideShow1;
