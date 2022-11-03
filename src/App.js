import { useState } from 'react';
import './index.css';
import SDImage from './components/SDImage';
//import defaultImage from './assets/defaultImage'


function App() {
  const [role, setRole] = useState('Unlisted'); {/* name of var, function to set it, and default value of it  */ }
  const [mainImg, setMainImg] = useState({imgSrc: "https://imagen.research.google/main_gallery_images/a-marble-statue-of-a-koala-dj.jpg", imgID: 0, imgCaption: "asdasd"})
  const [images, setImages] = useState([
    {imgSrc: "https://imagen.research.google/main_gallery_images/a-dragon-fruit-wearing-karate-belt.jpg", imgCaption: ""},
    {imgSrc: "https://imagen.research.google/main_gallery_images/a-dragon-fruit-wearing-karate-belt.jpg", imgCaption: ""},
    {imgSrc: "https://imagen.research.google/main_gallery_images/a-dragon-fruit-wearing-karate-belt.jpg", imgCaption: ""},
    
  ])

    function updateMainImg() {
      setMainImg({...mainImg, imgSrc: "https://imagen.research.google/main_gallery_images/sprouts-in-the-shape-of-text-imagen.jpg"})
    }

    function updateBarImages() {
      images.unshift({imgSrc: "https://imagen.research.google/main_gallery_images/cactus.jpg", imgID: 0, imgCaption: "asdasdasdasdasd"})
      images.pop()
      setImages(images)
    }

  return (
    <div className="App">
      <button onClick={updateMainImg}>CLICK HERE</button>
      <button onClick={updateBarImages}>CLICK HERE2</button>
      <SDImage imgSrc={mainImg.imgSrc} imgID={mainImg.imgID} imgCaption={mainImg.imgCaption}/>
      <div className='flex flex-wrap'>
        {images.map((image) => {
          return <SDImage imgSrc={image.imgSrc}/>
        })}
      </div>
    </div>
  );//      <ImageBar images={images} />
}

export default App;
