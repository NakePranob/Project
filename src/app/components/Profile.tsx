import Image from "next/image"

type Props = {
    size:number
}

function Profile({size}: Props) {
    return (
        <>
            <Image
                src="/images/profile/profile.webp"
                alt="My Logo"
                width={32}
                height={32}
                style={ {width: size, height: size} }
                className='rounded-full'
                priority
            />
        </>
    )
}

export default Profile