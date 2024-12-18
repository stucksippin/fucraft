import Image from "next/image";
import user from "../public/image/header/user.png"
import cart from "../public/image/header/cart.png"
import like from "../public/image/header/like.png"
import search from "../public/image/header/search.png"
import Link from "next/link";

import { NextAuthOptions } from "@/config";

export default async function Header() {

    return (
        <header className="header p-5">

            <nav className="flex justify-around">
                <Link href={"/"}><span className="font-bold">FUCRAFT</span></Link>
                <ul className="flex gap-x-5">
                    <Link className="hover:bg-[#FFF3E3] p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={'/'}>Главная</Link>
                    <Link className="hover:bg-[#FFF3E3] p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " href={'/catalog'}>Каталог</Link>
                    <Link className="hover:bg-[#FFF3E3] p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " href={'#'}>О нас</Link>
                    <Link className="hover:bg-[#FFF3E3] p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " href={'#'}>Контакты</Link>
                </ul>
                <ul className="flex gap-x-5">
                    <Link href={'/profile'}> <Image src={user} width={23} alt="user ico" /> </Link>
                    <Link href={'#'}><Image src={cart} width={23} alt="cart ico" /></Link>
                    <Link href={'#'}><Image src={like} width={23} alt="like ico" /></Link>
                    <Link href={'#'}><Image src={search} width={23} alt="search ico" /></Link>

                </ul>
            </nav>
        </header>
    )
}
