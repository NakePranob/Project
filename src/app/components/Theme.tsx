'use client'
import { useState, useEffect } from "react"
import { useTheme } from 'next-themes'

// icons
import { MdSunny } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

type Props = {}

function Theme({}: Props) {
    const [ isOpen, setIsOpen ] = useState(false);
    const { theme, setTheme } = useTheme();
    const [myTheme, setMythem] = useState<string>();

    useEffect(() => {
        setMythem(theme)
    },[theme])

    return (
        <>
            <button onClick={()=>setIsOpen(true)} 
            className="border-s-items ps-4 flex-center text-lg h-8
            hover:text-indigo-500 transition-300">
                <FaDisplay className={`${myTheme !== 'system' && 'hidden'}`}/>
                <MdSunny className={`${myTheme !== 'light' && 'hidden'}`}/>
                <IoMoon className={`${myTheme !== 'dark' && 'hidden'}`}/>
            </button>
            <span onClick={()=>setIsOpen(false)} 
            className={`fixed top-0 left-0 bg-black/20 dark:bg-black/50 h-screen w-screen
            ${!isOpen && "hidden"}`}></span>
            <div className={`fixed top-0 w-72 h-screen p-4 opacity-100 transition-500
            bg-base border-s-items ${isOpen ? "right-0" : "opacity-0 -right-72"}`}>
                <h1 className="border-b-items pb-1">
                    ปรับธีมเว็บไซต์
                </h1>
                <ul className='flex flex-col gap-2 pt-4'>
                    <li className='flex gap-4 items-center transition-100 h-12'>
                        <button onClick={()=>setTheme('system')} className={`relative w-full h-full 
                        flex-y-center rounded-md px-4
                        ${myTheme === 'system' ? 'bg-indigo-500 text-white' : 
                        'border-items text-black dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-150'}`}>
                            <FaDisplay className='min-w-4 absolute right-4'/>
                            <p>ปรับตามธีมอุปกรณ์</p>
                        </button>
                    </li>
                    <li className='flex gap-4 items-center transition-100 h-12'>
                        <button onClick={()=>setTheme('light')} className={`relative w-full h-full 
                        flex-y-center rounded-md px-4
                        ${myTheme === 'light' ? 'bg-indigo-500 text-white' : 
                        'border-items text-black dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-150'}`}>
                            <MdSunny className='min-w-4 absolute right-4'/>
                            <p>ธีมสว่าง</p>
                        </button>
                    </li>
                    <li className='flex gap-4 items-center transition-100 h-12'>
                        <button onClick={()=>setTheme('dark')} className={`relative w-full h-full 
                        flex-y-center rounded-md px-4
                        ${myTheme === 'dark' ? 'bg-indigo-500 text-white' : 
                        'border-items text-black dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-150'}`}>
                            <IoMoon className='min-w-4 absolute right-4'/>
                            <p>ธีมมืด</p>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Theme