'use client'
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Component
import Logo from "./Logo"
import Profile from "./Profile"
import Theme from "./Theme";

// Icons
import { GoHome, GoBookmark } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

type Props = {}

function Nav({}: Props) {

    const [scrollY, setScrollY] = useState<number>(0);
    const navRef = useRef<HTMLDivElement>(null);

    const [lastScrollY, setLastScrollY] = useState<number>(0);
    useEffect(() => {
        const onScroll = () => {
            setScrollY(window.scrollY);
        };
        const navElement = navRef.current;

        window.addEventListener('scroll', onScroll);
        if (scrollY < 30) {
            navElement?.classList.remove('-translate-y-20');
        } else if (scrollY > lastScrollY) {
            navElement?.classList.add('-translate-y-20');
        } else if (scrollY < lastScrollY && scrollY !== 0) {
            navElement?.classList.remove('-translate-y-20');
        }
        setLastScrollY(scrollY )
        return () => {
        window.removeEventListener('scroll', onScroll);
        };
    }, [scrollY]);

    return (
        <nav ref={navRef} className='h-16 w-screen border-b-items fixed left-0 top-0
        flex-y-center justify-between px-4 xl:px-12 bg-base transition-300 z-999 shadow-md'>
            <header className='flex-center gap-3 h-full'>
                <Logo size={32}/>
                <div className="hidden sm:block">
                    <h4 className="text-lg -mb-4">Dormitory</h4>
                    <span className="text-[10px] opacity-70">@LOEI</span>
                </div>
            </header>
            <div className="flex-y-center gap-4">
                <ul className="flex-y-center">
                    <Link href="/" className="flex-y-center gap-2 transition-500 py-2 ps-10
                    overflow-hidden w-[4.5rem] rounded-lg opacity-50 hover:opacity-100 hover:w-32 px-2">
                        <GoHome className="min-w-6 text-xl"/>
                        <p className="text-nowrap">หน้าหลัก</p>
                    </Link>
                    <Link href="/" className="flex-y-center gap-2 transition-500 py-2
                    overflow-hidden w-10 rounded-lg opacity-50 hover:opacity-100 hover:w-32 px-2">
                        <RxDashboard className="min-w-6 text-xl"/>
                        <p className="text-nowrap">จัดการหอพัก</p>
                    </Link>
                    <Link href="/" className="flex-y-center gap-2 transition-500 py-2
                    overflow-hidden w-10 rounded-lg opacity-50 hover:opacity-100 hover:w-32 px-2">
                        <GoBookmark className="min-w-6 text-xl"/>
                        <p className="text-nowrap">รายการโปรด</p>
                    </Link>
                    <Link href="/" className="flex-y-center gap-2 transition-500 py-2
                    overflow-hidden w-10 rounded-lg opacity-50 hover:opacity-100 hover:w-32 px-2">
                        <MdOutlineDateRange className="min-w-6 text-xl"/>
                        <p className="text-nowrap">รายการจอง</p>
                    </Link>
                </ul>
                <Theme/>
                <button className="rounded-full outline outline-0 outline-indigo-400 
                hover-outline transition-150 flex-y-center gap-2">
                    <p className="ps-2 hidden sm:block max-w-20 text-ellipsis text-nowrap overflow-hidden">
                        Account
                    </p>
                    <Profile size={35}/>
                </button>
            </div>
        </nav>
    )
}

export default Nav