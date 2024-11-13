// import { generateComment } from './dataList';

export const Comment = ({activeTab , comments}) => {
 
  const renderComment = () => {
    switch(activeTab){
      case 'Tab1':
        return (
          <div>
            {comments.map((comment)=>(
              <div key={comment.id} className='comment'>
                <div>
                  <img src={comment.avatar} className='img comment_img'/>
                </div>
                <div className='comment_bottom'>
                  <div>{comment.author}</div>
                  <div className='comment_content'>{comment.content}</div>
                  <div >{comment.time}</div>
                </div>
              </div>
            ))}
          </div>
        )
      case 'Tab2':
        return(
          <div>
            {comments.map((comment)=>(
              <div key={comment.id} className='comment'>
                <div>
                  <img src={comment.avatar} className='img comment_img'/>
                </div>
                <div className='comment_bottom'>
                  <div>{comment.author}</div>
                  <div className='comment_content'>{comment.content}</div>
                  <div className='comment_bottom_btn'>
                    <div>{comment.time}</div>
                    <div className='comment_bottom_btn_2'>
                      <div>
                        <svg class="feather feather-thumbs-up" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                      </div>
                      <div>
                        <svg class="feather feather-message-circle" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            ))}
          </div>
        )
      case 'Tab3':
        return (
          <div>
            {comments.map((comment)=>(
              <div key={comment.id}>{comment.author}</div>
            ))}
          </div>
        )
    }
  }
  return (
    <div className='renderComment'>
      {renderComment()}
    </div>
  )
}