function Button({value , onClick,id}){
  
  return(
    <button onClick={onClick} className="button" id={id} value={value}>{value}</button>
  )
}
export default Button
