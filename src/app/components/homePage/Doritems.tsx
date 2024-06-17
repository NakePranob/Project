import Image from "next/image"
import Link from "next/link"

// Icons
import { HiOutlineLocationMarker } from "react-icons/hi"
import { FaStar } from "react-icons/fa6"

type Props = {}

function Doritems({}: Props) {
    return (
        <section className="rounded-md border-items relative pb-14 hover:scale-95
        col-span-6 md:col-span-4 xl:col-span-3 shadow-md bg-base transition-150">
            <Link href={"/dormitory/1"} 
                className='absolute left-0 top-0 w-full h-full z-20'>
            </Link>
            <div className='w-full aspect-square sm:aspect-video 
            rounded-t-md overflow-hidden'>
                <Image
                    src={`/images/dormitory/1.png`}
                    alt="list DMT"
                    width={720}
                    height={450}
                    className='h-full w-full
                    object-cover object-center'
                />
            </div>
            <div className='text-sm lg:text-md pt-2 px-2'>
                <p className='text-ellipsis text-nowrap overflow-hidden max-w-[90%] sm:max-w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <Link href={"/"} 
            className='text-xs absolute bottom-2 left-2 flex gap-1 z-30 hover:text-indigo-400'>
                    <HiOutlineLocationMarker/>ตำแหน่งหอพัก
            </Link>
            <p className='text-xs absolute bottom-7 left-2 flex items-center gap-1'>
                <FaStar className='text-yellow-300'/> 5.0
            </p>
            <h1 className='absolute bottom-[0.2rem] right-2 text-xl sm:text-2xl font-bold text-indigo-500'>
                <span className='text-sm'>฿</span>2500
            </h1>
        </section>
    )
}

export default Doritems