import { Link } from "react-router-dom";

type props  = {
    to: string;
    bg: string;
    text: string;
    textcolor: string;
    onclick?: () => Promise<void>
};

const NavigationLink = ( props:props) => {
  
    return (
        <Link
        className="nav-link"
         to={props.to}
        style={{background:props.bg, color:props.textcolor}}
        >
           {props.text}
        </Link>
    );
  
};

export default NavigationLink