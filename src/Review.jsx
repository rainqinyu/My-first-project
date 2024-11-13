import {useParams} from 'react-router-dom'
import {Content} from './Content';
import {ReviewList} from './reviewList';
import {Nav} from './Nav';
export const Review = () => {
  const {id} = useParams();
  // const item = dataList.find((a)=>(a.id === parseInt(id)))
  return (
    <div>
      <Nav/>
      <Content id={id}/>
      <ReviewList/>
    </div>
  )
}