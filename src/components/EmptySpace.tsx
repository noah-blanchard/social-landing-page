
const EmptySpace: React.FC<{height: number}> = ({height}) => {
    return(
        <div className={`w-full h-[{${height}px]`} />
    )
}

export default EmptySpace;