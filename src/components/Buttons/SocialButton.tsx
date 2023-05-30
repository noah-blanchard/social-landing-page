import Image from "next/image"
import { MouseEventHandler, useState } from "react"

const SocialButton: React.FC<{icon: string, children?: React.ReactNode, onClick: Function}> = ({icon, children, onClick}) => {

    const [active, setActive] = useState<Boolean>(false);

    return (
        <div onClick={() => {setActive(!active); onClick();}} className={`flex border bg-transparent items-center justify-center rounded-[24px] h-20 w-20 md:h-[102px] md:w-[102px] cursor-pointer backdrop-blur ${active && "transition-shadow shadow-[0_0px_20px_rgba(_255,_185,_82,_0.8)]"}`}>
            <div className="hidden md:inline-block">
                <Image src={icon} alt={icon} width={75} height={75}/>
            </div>
            <div className="md:hidden inline-block">
                <Image src={icon} alt={icon} width={50} height={50}/>
            </div>
        </div>
    )
}

export default SocialButton;