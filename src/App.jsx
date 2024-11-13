import Home from './Home';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import {Review} from './Review';
// import {useMemo} from 'react';

export const App = () => {
  // let s = useMemo(() => 1, [])
  // let n = Math.random()
  // console.log(n)
  
  // if (n > 0.5) {
  //   s = useState(0)
  //   s = useMemo(() => 2, [])
  // }

  // console.log('s = ', s)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Review/>}/>
      </Routes>
    </Router>
  )
}



