import Japan1 from './assets/Japan1.jpeg';
import Japan2 from './assets/Japan2.jpeg';
import Japan3 from './assets/Japan3.jpeg';
import sea1 from './assets/sea1.jpeg';


export const dataList = [
  { 
    id:1,
    userName: "Bob",
    avatar: Japan1,
    content:'The landscape stretched out before me, a breathtaking panorama of rolling hills blanketed in vibrant green, with the golden glow of the setting sun casting a warm, serene light over the calm river winding through the valley.',
    img:[Japan1 , Japan2 , Japan3],
  },

  {
    id:2,
    userName:"Lily",
    avatar:Japan3,
    content:'The landscape stretched out before me, a breathtaking panorama of rolling hills blanketed in vibrant green, with the golden glow of the setting sun casting a warm, serene light over the calm river winding through the valley.',
    img:[sea1],
  },

  {
    id:3,
    userName : "Army",
    avatar:Japan2,
    content:'The landscape stretched out before me, a breathtaking panorama of rolling hills blanketed in vibrant green, with the golden glow of the setting sun casting a warm, serene light over the calm river winding through the valley.',
    img:null,
  }
]


export const generateComment = (num) => {
  const getRandomTime = () => {
    const now = new Date();
    const randomOff = Math.floor(Math.random() - 1000 * 60 * 60 * 24  ) ; 
    const randomTime = new Date(now.getTime() - randomOff);
    return randomTime.toLocaleString('zh-CN' , {
      month : '2-digit',
      day : '2-digit',
      hour:'2-digit',
      minute:'2-digit',
      hour12:false,
    });
  }
  const comments = [];
  for (let i = 0 ; i < num ; i++) {
    comments.push({
      id : i+1 ,
      author: `User${i+1}`,
      avatar:Japan1,
      content:`this is a comment from User${i+1},1111111111111111111111111111111111111111111111111111111111111111111111`,
      time : getRandomTime(),
    })
  }
  return comments;
}