import { MouseEventHandler } from "react"

const RoundGradientButton: React.FC<{onClick: MouseEventHandler, children: React.ReactNode}> = ({onClick, children}) => {

    return <button className="rounded-full bg-gradient-to-r from-[#FF307B] to-[#FF9A2A] text-white h-10 w-12 md:h-14 md:w-16" onClick={onClick}>{children}</button>
}

export default RoundGradientButton;