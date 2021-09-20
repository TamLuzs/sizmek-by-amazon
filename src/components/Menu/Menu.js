//import './Menu.css';
import MenuLi from './MenuLi'

function Menu() {
  return (

    <ul className="Menu">
        < MenuLi name="home"/>
        < MenuLi name="Contato"/>
        < MenuLi name="FAQ"/>
    </ul>
   
  );
}

export default Menu;