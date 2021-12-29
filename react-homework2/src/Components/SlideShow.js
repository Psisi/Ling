import SimpleImageSlider from "react-simple-image-slider";
   
const SlideShow = (props) => {
    const {images} = props
    return (
        <div>
          <SimpleImageSlider
            width={600}
            height={420}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
    );
} 
export default SlideShow;
    