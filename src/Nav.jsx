import { useNavigate } from 'react-router-dom'

export const Nav = () => {
  const navigate = useNavigate() ;
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className='nav' onClick={handleBack}>
      <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.293,12.707a1,1,0,0,1,0-1.414l5-5A1,1,0,0,1,7.707,7.707L4.414,11H22a1,1,0,0,1,0,2H4.414l3.293,3.293a1,1,0,1,1-1.414,1.414Z"/></svg>
    </div>
  )
}