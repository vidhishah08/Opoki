import React from "react";
import Icon1 from "../Image/icon1.png"
import Icon2 from "../Image/icon2.png"
import Icon3 from "../Image/icon3.png"


const One=()=>{
    return(
        <div className="bg-[#1E1E1E] px-[30px] py-[30px] ml-[140px] mt-[-15px] w-[900px]">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-white text-[20px]">Your Most Recent Earnings</p>
                    <p className=" text-[#757575] text-[14px] pt-[-10px]">Your sales are referral earnings over the last 30 days</p>
                </div>
                <div>
                    <button className="bg-[#171717] text-[#757575] py-[5px] px-[20px]">Range</button>
                    <button className=" bg-[#343434] text-white py-[5px] px-[20px]">Period</button>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row mt-[50px]">
                    <div><img src={Icon1} alt="Icon1" className="w-[60px]"/></div>
                    <div className="ml-[20px]">
                        <p className="text-[#757575] text-[12px]" >GROSS EARNINGS</p>
                        <p className="text-[26px] text-white ">$ 2,321,203</p>
                    </div>
                </div>
                <div className="flex flex-row mt-[50px]">
                    <div><img src={Icon2} alt="Icon2" className="w-[60px]"/></div>
                    <div className="ml-[20px]">
                        <p className="text-[#757575] text-[12px]" >TAX WITHHELD</p>
                        <p className="text-[26px] text-white ">$ 121,423.20</p>
                    </div>
                </div>
                <div className="flex flex-row mt-[50px]">
                    <div><img src={Icon3} alt="Icon3" className="w-[60px]"/></div>
                    <div className="ml-[20px]">
                        <p className="text-[#757575] text-[12px]">NET EARNINGS</p>
                        <p className="text-[26px] text-white ">$ 2,199,799.8</p>
                    </div>
                </div>
            </div>

            <div className="mt-[30px]">
                <hr className="border-[#171717] mb-[4px]"/>  
                <div className="flex flex-row justify-between text-[#757575] mb-[4px]">
                    <p>DATE</p>
                    <p>SALES COUNT</p>
                    <p>GROSS EARNING</p>
                    <p>TAX WITHHELD</p>
                    <p>NET EARNINGS</p>
                </div>
                <hr className="border-[#171717]"/>
                <div className="flex flex-row ">
                    <div className="text-[#757575] text-[16px] mr-[50px]">
                        <p className="pt-[10px]">03/05/2022</p>
                        <p className="pt-[10px]">03/04/2022</p>
                        <p className="pt-[10px]">03/03/2022</p>
                        <p className="pt-[10px]">03/02/2022</p>
                        <p className="pt-[10px]">03/01/2022</p>
                    </div>
                    <div className="text-[16px] text-white text-left mr-[150px]">
                        <p className="pt-[10px]">1,050</p>
                        <p className="pt-[10px]">1,022</p>
                        <p className="pt-[10px]">776</p>
                        <p className="pt-[10px]">998</p>
                        <p className="pt-[10px]">1,221</p>
                    </div>
                    <div className="text-[16px] text-[#757575] mr-[129px]">
                        <p className="pt-[10px]">+$32,580.00</p>
                        <p className="pt-[10px]">+$30,065.10</p>
                        <p className="pt-[10px]">+$30,065.10</p>
                        <p className="pt-[10px]">+$30,065.10</p>
                        <p className="pt-[10px]">+$30,065.10</p>
                    </div>
                    <div className="text-[16px] text-[#757575] mr-[130px]">
                        <p className="pt-[10px]">-$3,023.10</p>
                        <p className="pt-[10px]">-$2,780.00</p>
                        <p className="pt-[10px]">-$2,780.00</p>
                        <p className="pt-[10px]">-$2,780.00</p>
                        <p className="pt-[10px]">-$2,780.00</p>
                    </div>
                    <div className="text-[16px] text-white">
                        <p className="pt-[10px]">$28,670.90</p>
                        <p className="pt-[10px]">$28,670.90</p>
                        <p className="pt-[10px]">$28,670.90</p>
                        <p className="pt-[10px]">$28,670.90</p>
                        <p className="pt-[10px]">$28,670.90</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default One;