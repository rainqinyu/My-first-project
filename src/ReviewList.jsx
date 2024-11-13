import { Comment } from './Comment';
import  {useState} from 'react';
import { generateComment } from './dataList';
import { Bottom } from './Bottom';
import Japan1 from './assets/Japan1.jpeg'
export const ReviewList = () =>{
  // const comments = generateComment(10);
  const [activeTab , setActiveTab] = useState('Tab2');
  const [text , setText] = useState("");
  const [comments , setComments] = useState(generateComment(10)) ; 
  const handleText = (e) => {
    setText(e.target.value);
  }

 const handleSubmit = () => {
  if(text.trim()){
    setComments([...comments , {id:comments.length + 1 , avatar:Japan1 , content : text , author : `User${comments.length + 1}`}]);
    setText("")
  }
 }
  return (
    <div className='review'>
      <div className='review_top'>
        <div className='review_top_1'>
          <div onClick={()=>setActiveTab("Tab1")}>
            <span>转发</span>
            <span>{comments.length}</span>
          </div>
          <div className= {activeTab === 'Tab1' ? 'review_top_2' : ""}></div>
        </div>
        <div className='review_top_1'>
          <div onClick={()=>setActiveTab('Tab2')}>
            <span>评论</span>
            <span>{comments.length}</span>
          </div>
          <div className={activeTab === 'Tab2'? 'review_top_2':''}></div>
        </div>
        <div className='review_top_1'>
          <div onClick={()=>setActiveTab('Tab3')}>
            <span>点赞</span>
            <span>{comments.length}</span>
          </div>
          <div className= {activeTab === 'Tab3' ? 'review_top_2' : ""}></div>
        </div>
      </div>
      <Comment activeTab={activeTab} comments={comments}/>
      <Bottom handleText={handleText} text={text} handleSubmit={handleSubmit}/>
    </div>
  )
}