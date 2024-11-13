export const  Bottom = ({handleText , handleSubmit , text}) => {
  return (
    <div className='confirm'>
      <input placeholder='请提交评论...' onChange={handleText} value={text}/>
      <button onClick={handleSubmit}>提交</button>
    </div>
  )
}