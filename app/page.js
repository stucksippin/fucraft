

import Image from "next/image";
import welcome_pic from "../public/image/welcome_pic.png"
import bedroom from "../public/image/range/bedroom.png"
import dinning from "../public/image/range/dinning.png"
import living from "../public/image/range/living.png"
import { Button } from "antd";
import BreefCatalog from "@/components/BreefCatalog";
import getBreefFurniture from "@/libs/getBreefFurniture";
import Link from "next/link";
import SliderInstance from "@/components/SliderInstance";


export default async function MainPage() {
    const furnitures = await getBreefFurniture()
    return (
        <div className="mainPage">

            <div className="mainPage_welcome_block relative" >
                <Image className="mx-auto" src={welcome_pic} alt="welcome picture with furniture" />
                <div className="absolute left-[50%] bottom-[20%] flex flex-col bg-[#FFF3E3] p-8">
                    <span className="text-[45px] text-[#BAA898] font-semibold mb-5">Изучите Нашу <br /> Новую Коллекцию</span>
                    <span className="mb-5 text-[18px]">Magna ad nulla proident exercitation incididunt duis occaecat est cillum non eu amet sint. Duis officia </span>
                    <button className="w-fit py-3 px-8 text-[12px] bg-[#BAA898] text-white hover:bg-[#FFF3E3] hover:text-black hover:border border-black font-semibold  rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" type="text">ПОСМОТРЕТЬ</button>
                </div>
            </div>

            <div className="mainPage_range container mt-[100px]">

                <div className="range_title text-center pt-[10%] pb-10">
                    <h2 className="title">Ассортимент мебели для всех уголков </h2>
                    <span>Lorem amet enim laboris est enim velit nostrud.</span>
                </div>
                <SliderInstance />
            </div>


            <BreefCatalog furnitures={furnitures} />
            <Link className="flex justify-center mt-10" href={"/catalog"}><button className="w-fit py-3 px-8 text-[12px] border border-black  font-semibold hover:bg-[#FFF3E3] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" type="text">БОЛЬШЕ</button></Link>

        </div>
    );
}
