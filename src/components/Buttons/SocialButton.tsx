import Image from "next/image"
import { useState } from "react"

const SocialButton: React.FC<{icon: string, children?: React.ReactNode}> = ({icon, children}) => {

    const [active, setActive] = useState<Boolean>(false);

    return (
        <div onClick={() => setActive(!active)} className={`flex border bg-transparent items-center justify-center rounded-[24px] h-[102px] w-[102px] cursor-pointer backdrop-blur ${active && "transition-shadow shadow-[0_0px_20px_rgba(_255,_185,_82,_0.8)]"}`}>
            <Image src={icon} alt={icon} width={75} height={75}/>
        </div>
    )
}

export default SocialButton;