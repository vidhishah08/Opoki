import React from "react";
import Image1 from "../Image/image2.png"
import Image2 from "../Image/image3.png"
import trend from "../Image/trend.png"
import trend1 from "../Image/trend1.png"
import graph from "../Image/graph.png"

const Three=()=>{
    return(
        <div className="px-[30px] py-[30x] bg-[#1E1E1E] h-[530px] w-[400px] ml-[1062px] mt-[-913px] ">
            <div className="py-[20px] px-[2px] flex flex-row ">
                <p className="text-white text-[16px] w-[300px]">Real-Time Sales</p>
                <div className="flex flex-row justify-between ml-[-130px] mt-[2px]">
                    <div className="flex flex-row mr-[18px]">
                        <img src={Image1} alt="Image2" className="mr-[8px] w-[15px] h-[17px] pt-[2px]"/>
                        <p className="text-[#]757575 text-[12px] text-white pb-[2px]">TODAY</p>
                    </div>
                    <div className="flex flex-row ">
                        <img src={Image2} alt="Image2" className="mr-[8px] w-[15px] h-[17px] pt-[2px]"/>
                        <p className="text-[#]757575 text-[12px] text-white pb-[2px]">YESTERDAY</p>
                    </div>   
                </div>
            </div>
            <div className="flex flex-row mt-[20px]">
                <div className="mr-[30px]">
                    <p  className="text-[12px] text-white">TOTAL SALES</p>
                    <div className="flex flex-row">
                        <p className="text-white text-[24px] font-semibold pr-[2px]">$32,133</p>
                        <div className="mt-[15px] ml-[5px]"><img src={trend} alt="trend" className="w-[53px] h-[15px]"/></div>
                    </div>   
                </div>
                <div className="">
                    <p  className="text-[12px] text-white">AVG. SALES PER DAY</p>
                    <div className="flex flex-row">
                        <p className="text-white text-[24px] font-semibold pr-[2px]">$2,123</p>
                        <div className="mt-[15px] ml-[5px]"><img src={trend1} alt="trend1" className="w-[53px] h-[15px]"/></div>
                    </div>   
                </div>
            </div>
            <div>
                <img src={graph} alt="graph" className="pt-[40px]"/>
            </div>
        </div>
    );
}

export default Three;