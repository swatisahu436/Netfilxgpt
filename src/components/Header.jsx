import { LOG_URL } from "../assets/ConstUrl";
const Header = () => {
    return (
        <div className=" absolute py-2 px-12 bg-gradient-to-b from-black z-10">
                <img src={LOG_URL}
                    alt="logo"  className="h-20  w-46  " />
         </div>   
    )
};
export default Header;