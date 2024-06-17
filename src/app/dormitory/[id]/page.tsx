import Image from "next/image"
import { GoBookmark } from "react-icons/go";

function page() {
    return (
        <>
            <div className='h-72 rounded-lg overflow-hidden -mx-2 -mt-2 mb-2 relative'>
                <Image
                    src={`/images/dormitory/1.png`}
                    alt="list DMT"
                    width={720}
                    height={450}
                    className='h-full w-full
                    object-cover object-center'
                />
                <button className="absolute w-10 h-10 rounded-full bg-black/50
                flex-center right-2 top-2 backdrop-blur-md text-xl">
                    <GoBookmark/>
                </button>
            </div>
        </>
    )
}

export default page