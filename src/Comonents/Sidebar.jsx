import React from "react";
import logo from "../Image/logo.png"
import menu from "../Image/menu.png"
import menu1 from "../Image/menu1.png"
import menu2 from "../Image/menu2.png"
import menu3 from "../Image/menu3.png"
import menu4 from "../Image/menu4.png"
import menu5 from "../Image/menu5.png"
import menu6 from "../Image/menu6.png"
import Image1 from "../Image/Image1.png"


const Sidebar=()=>{
    return(
        <div>
        <div className="bg-[#1E1E1E] px-[18px] py-[30px] w-[85px] h-[1075px]">
            <img src={logo} alt="logo" className="ml-[10px]"/>
            <div className="mt-[40px] mb-[600px] flex flex-col align-middle">
                <img src={menu} alt="menu"/>
                <img src={menu1} alt="menu3"/>
                <img src={menu2} alt="menu2"/>
                <img src={menu3} alt="menu3"/>
                <img src={menu4} alt="menu4"/>
            </div>
            <div>
                <img src={menu5} alt="menu5"/>
                <img src={menu6} alt="menu6"/>
            </div>
            
        </div>
        <div className="ml-[72px] mt-[-1040px]"><img src={Image1} alt="Image1"/></div>
        </div>
    );
}

export default Sidebar;