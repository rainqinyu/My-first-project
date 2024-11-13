
import { useNavigate } from 'react-router-dom';
import './App.css';
import { dataList } from './dataList';
import { useImageModel } from './useImageModel';
import { Image } from './Image';

function Home() {

 const navigate = useNavigate();

 const handleReview = (id) => {
  navigate(`/detail/${id}`)
 }

//  const {
//   selectImage , 
//   setSelectImage , 
//   nextImage , 
//   preImage , 
//   handleMouseEnter , 
//   handleMouseLeave , 
//   handleImage , 
//   isVisible,
//   currentIndex
// } = useImageModel(dataList.img)

  return (
    <div className='one-box'>
      {dataList.map((item)=>{
        const {
          selectImage , 
          setSelectImage , 
          nextImage , 
          preImage , 
          handleMouseEnter , 
          handleMouseLeave , 
          handleImage , 
          isVisible,
          currentIndex
        } =  useImageModel(item.img);
        return (
        <div key={item.id} className='box'>
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
              <img src={imgs} key={index}  onClick={()=>handleImage(index)}/>
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
          <div className='bottom'>
            <button>
              <svg className="feather feather-repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              <span>转发</span>
            </button>
            <button onClick={()=>{handleReview(item.id)}}>
              <svg className="feather feather-message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>评论</span>
            </button>
            <button>
              <svg className="feather feather-thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              <span>赞</span>
            </button>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Home;


