import React from "react";
import Notify from "../Image/notification.png";
import Image1 from "../Image/Profile.png"
import Arrow from "../Image/arrow-down.png"

const Navbar=()=>{
    return(
        <div className="py-[64px] px-[55px] bg-[#171717] ml-[84px] mt-[-100px] flex flex-row justify-between ">
            <div className="mr-[]">
                <p className="text-[#616161] text-[10px]">DASHBOARD  /  <span className=" text-[#B8FD8E] ">MONITORING</span></p> 
                <p className="font-semibold text-white text-[24px] pt-[8px]">Welcome to Dashboard</p>
            </div>
            <div className="flex flex-row">
                <div className=""><img src={Notify} alt="Notify" className=" border-r-[#616161] border-r-[1px] pr-[33px] py-[2px]"/></div>
                <div className="flex flex-row pl-[33px] py-[2px]"><img src={Image1} alt="Image1" className="w-[42px] h-[42px] mr-[15px]" /><button className=""><img src={Arrow} alt="Arrow" className="mt-[-15px]"/></button></div>
            </div>
        </div>
    );
}

export default Navbar;