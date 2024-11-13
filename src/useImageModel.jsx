import { useState } from 'react';
export const useImageModel = (images) => {
 
  const [selectImage , setSelectImage] = useState(null);
  const [currentIndex , setCurrentIndex] = useState(0);
  const [isVisible , setIsVisible ] = useState(false);

  const handleImage = (index) => {
    setSelectImage(images[index]);
    setCurrentIndex(index);
  }
  const nextImage = () => {
    const newIndex =( currentIndex + 1 ) % images.length;
    setSelectImage(images[newIndex]);
    setCurrentIndex(newIndex)
  }

  const preImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length ;
    setCurrentIndex(newIndex);
    setSelectImage(images[newIndex]);
  }

  const handleMouseEnter = () => {
    setIsVisible(true);
  }

  const handleMouseLeave = () => {
    setIsVisible(false);
  }
  return (
    {
      selectImage , 
      setSelectImage , 
      nextImage , 
      preImage , 
      handleMouseEnter , 
      handleMouseLeave , 
      handleImage , 
      isVisible,
      currentIndex,
    }
  )
}