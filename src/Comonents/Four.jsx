import React from "react";
import Image5 from "../Image/image5.png"
import Ellipse from "../Image/Ellipse.png"
import Icons from "../Image/icons.png"

const Four=()=>{
    return(
        <div className="bg-[#1E1E1E] w-[400px] h-[361px] ml-[1062px] mt-[20px] px-[30px] py-[30px]">
            <div className="flex flex-row justify-between">
                <p className="text-[24px] text-white">New Customers</p> 
                <div>
                    <img src={Image5} alt="Image5" className="pt-[11px]"/>
                </div>
            </div>
            <div className="mt-[40px]">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row ">
                        <img src={Ellipse} alt="Ellipse" className="w-[50px] h-[50px]"/>
                        <div className="pl-[15px]">
                            <p className="text-[20px] text-white">Scorates Ijimayo</p>
                            <p className="text-[#757575] font-light">Customer ID #1123</p>
                        </div>
                    </div>
                    <img src={Icons} alt="Icons" className="w-[70px] h-[30px] mt-[10px]"/>
                </div>
                <div className="flex flex-row justify-between mt-[20px]">
                    <div className="flex flex-row ">
                        <img src={Ellipse} alt="Ellipse" className="w-[50px] h-[50px]"/>
                        <div className="pl-[15px]">
                            <p className="text-[20px] text-white">Nicolas Kun</p>
                            <p className="text-[#757575] font-light">Customer ID #1123</p>
                        </div>
                    </div>
                    <img src={Icons} alt="Icons" className="w-[70px] h-[30px] mt-[10px]"/>
                </div>
                <div className="flex flex-row justify-between mt-[20px]">
                    <div className="flex flex-row ">
                        <img src={Ellipse} alt="Ellipse" className="w-[50px] h-[50px]"/>
                        <div className="pl-[15px]">
                            <p className="text-[20px] text-white">Makima Denjieh</p>
                            <p className="text-[#757575] font-light">Customer ID #1123</p>
                        </div>
                    </div>
                    <img src={Icons} alt="Icons" className="w-[70px] h-[30px] mt-[10px]"/>
                </div>
            </div>
        </div>
    );
}

export default Four