import SocialButton from "@/components/Buttons/SocialButton"

const SocialStep: React.FC<{submit: Function}> = ({submit}) => {
    return (
        <div className="flex justify-center items-center w-full space-x-4">
            <SocialButton icon="svgs/socials/instagram.svg"></SocialButton>
            <SocialButton icon="svgs/socials/twitter.svg"></SocialButton>
            <SocialButton icon="svgs/socials/facebook.svg"></SocialButton>
            <SocialButton icon="svgs/socials/linkedin.svg"></SocialButton>
            <SocialButton icon="svgs/socials/tiktok.svg"></SocialButton>
        </div>

    )
}

export default SocialStep;