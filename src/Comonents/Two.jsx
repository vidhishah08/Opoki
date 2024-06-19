import React from "react";
import Image1 from "../Image/image2.png"
import Image2 from "../Image/image3.png"
import Image3 from "../Image/image4.png"
import Graph from "../Image/wave-graph.png"


const Two=()=>{
    return(
        <div className="bg-[#1E1E1E] mt-[20px] w-[900px] ml-[140px]">
            <div className="py-[20px] px-[30px] flex flex-row justify-between">
                <p className="text-white text-[16px]">Account and Monthly Recurring Revenue Growth</p>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row mr-[15px]">
                        <img src={Image1} alt="Image2" className="mr-[8px] w-[15px] h-[17px] pt-[2px]"/>
                        <p className="text-[#]757575 text-[12px] text-white pb-[2px]">GROWTH ACTUAL</p>
                    </div>
                    <div className="flex flex-row mr-[15px]">
                        <img src={Image2} alt="Image2" className="mr-[8px] w-[15px] h-[17px] pt-[2px]"/>
                        <p className="text-[#]757575 text-[12px] text-white pb-[2px]">ACTUAL</p>
                    </div>
                    <div className="flex flex-row">
                        <img src={Image3} alt="Image2" className="mr-[8px] w-[15px] h-[17px] pt-[2px]"/>
                        <p className="text-[#]757575 text-[12px] text-white pb-[2px]">PLAN</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row px-[30px] mt-[20px]">
                <div className="mr-[80px]">
                    <p className="text-[14px] text-[#757575]">MRR GROTWH</p>
                    <p className="text-[28px] text-white font-semibold">$620,076</p>
                </div>
                <div className="mr-[80px]">
                    <p className="text-[14px] text-[#757575]">AVG.MRR/CUSTOMER</p>
                    <p className="text-[28px] text-white font-semibold">$1,200</p>
                </div>
                <div className="mr-[80px]">
                    <p className="text-[14px] text-[#757575]">EXPANSION</p>
                    <p className="text-[28px] text-white font-semibold">$1,680</p>
                </div>
                <div>
                    <p className="text-[14px] text-[#757575]">CANCELLATIONS</p>
                    <p className="text-[28px] text-white font-semibold">$1,520</p>
                </div>
            </div>

            <div className="px-[30px] py-[30px] ">
                <img src={Graph} alt="Graph" className="w-[900px]"/>
            </div>
        </div>
    );
}

export default Two