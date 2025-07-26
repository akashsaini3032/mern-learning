import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header=()=>{
  const navigate = useNavigate();
  const cartData= useSelector(state=>state.mycart.cart);
  console.log(cartData);
  const cartLength=cartData.length;
    return(
        <>
          <div id="header">
            {cartLength}
          <FaShoppingCart  onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}}/>
          </div>
        
        </>
    )
}


export default Header;