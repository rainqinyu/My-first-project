import { useState } from 'react'


export const Image = ({selectImage , setSelectImage ,nextImage ,preImage,handleMouseEnter,handleMouseLeave,isVisible,currentIndex,item}) => {
  const [isLarge , setIsLarge ] = useState(true);
  const handleImage = () => {
    setIsLarge (!isLarge)
  }
  return (
    <div className='overlay' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isVisible && (
      <div  className='overlay_cancel'>
        <div>{currentIndex+1} / {item.img.length}</div>
        <div className='overlay_cancel_right'>
          <div onClick={handleImage}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 40 40">
              <linearGradient id="-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1" x1="31.916" x2="25.088" y1="31.849" y2="26.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b2b2b2"></stop><stop offset=".999"></stop></linearGradient><polygon fill="url(#-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1)" points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"></polygon><path fill="#b2b2b2" d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11	c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15	c4.903,0,9.243-2.363,11.98-6H24.313z"></path>
            </svg>
          </div>
          <button onClick={()=>setSelectImage("")} className='cancel'> × </button>
        </div>
      </div>
      )}
      <img src={selectImage} className={ isLarge ? 'full_image ' : 'large_image' }/>
      {isVisible && (
        <div>
          <button onClick={preImage} className=' btn btn_left'> ← </button>
          <button onClick={nextImage} className='btn btn_right'> → </button>
        </div>
        )
      }
    </div>
  )
}