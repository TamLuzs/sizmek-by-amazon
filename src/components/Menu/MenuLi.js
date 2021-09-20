//import './MenuLi.css';

function MenuLi(props) {
    console.log(props)
  return (

    <li className="Menu">
        {props.name}
    </li>
   
  );
}

export default MenuLi;