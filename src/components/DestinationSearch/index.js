// Write your code here
import './index.css'
const DestinationSearch = props => {
  const {result} = props
  const {id, name, imgUrl} = result
  return (
    <li className="container" key={id}>
      <img src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationSearch
