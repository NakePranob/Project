import Image from "next/image"

type Props = {
    size:number
}

function Logo({size}: Props) {
    return (
        <>
            <Image
                src="/logo-d.svg"
                alt="My Logo"
                width={size}
                height={size}
                style={ {width: size, height: size} }
                className='hidden dark:block'
                priority
            />
            <Image
                src="/logo-l.svg"
                alt="My Logo"
                width={32}
                height={32}
                style={ {width: size, height: size} }
                className='block dark:hidden'
                priority
            />
        </>
    )
}

export default Logo