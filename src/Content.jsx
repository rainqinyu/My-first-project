
import { dataList } from './dataList';
import { Image } from './Image';
import { useImageModel } from './useImageModel';
export const Content = ({id}) => {
  const item = dataList.find((a)=>(a.id === parseInt(id)))
  // const [selectImage , setSelectImage] = useState(null);
  // const [currentIndex , setCurrentIndex] = useState(0);
  // const [isVisible , setIsVisible ] = useState(false);
  
  // const handleImage = (index) => {
  //   setSelectImage(item.img[index]);
  //   setCurrentIndex(index);
  // }
  // const nextImage = () => {
  //   const newIndex =( currentIndex + 1 ) % item.img.length;
  //   setSelectImage(item.img[newIndex]);
  //   setCurrentIndex(newIndex)
  // }

  // const preImage = () => {
  //   const newIndex = (currentIndex - 1 + item.img.length) % item.img.length ;
  //   setCurrentIndex(newIndex);
  //   setSelectImage(item.img[newIndex]);
  // }

  // const handleMouseEnter = () => {
  //   setIsVisible(true);
  // }

  // const handleMouseLeave = () => {
  //   setIsVisible(false);
  // }

  const {
          selectImage , 
          setSelectImage , 
          nextImage , 
          preImage , 
          handleMouseEnter , 
          handleMouseLeave , 
          handleImage , 
          isVisible,
          currentIndex,
        } = useImageModel(item.img, {id})

  return (
      <div className='content'>
        <div className='top'>
          <img src={item.avatar} className='img'/>
          <div>
            <div>{item.userName}</div>
            <div>时间</div>
          </div>
        </div>
        <div className='mid'>{item.content}</div>
        <div className='picture'>
          {item.img && item.img.map((imgs,index)=>(
            <img src={imgs} key={index} onClick={()=>handleImage(index)}/>
          ))}
        </div>
        {selectImage && (
          <Image 
           selectImage={selectImage} 
           setSelectImage={setSelectImage} 
           nextImage={nextImage} 
           preImage={preImage} 
           handleMouseEnter={handleMouseEnter}
           handleMouseLeave={handleMouseLeave}
           isVisible={isVisible}
           currentIndex = {currentIndex}
           item = {item}
           />
        )}
        <div style={{textAlign:'left'}}><img src="https://wx3.sinaimg.cn/large/53b515f0ly1gnlu3cynfmj20t306owhf.jpg" className='content_img'/></div>
      </div>
  )
}