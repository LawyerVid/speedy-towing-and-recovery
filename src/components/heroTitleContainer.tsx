import React from 'react'
import Image from "next/image";
import heroImage from "../assets/hero.jpg"


interface HeroTitleContainerProps {

}

const TitleText = ({ children }: { children: string }) => {
    return (
        <h1 className={"text-[7vw] lg:text-6xl font-bold whitespace-nowrap"}>{children}</h1>
    )
}

const HeroTitleContainer = (props: HeroTitleContainerProps) => {
    return (
        <div className={"flex flex-col justify-center items-center gap-3"}>
            <TitleText>Speedy Recovery</TitleText>
            <Image
                src={heroImage}
                alt="Trucks aligned and ready to help"
                fill
                className={"!relative max-w-[min(768px,90vw)] lg:max-w-[35vw] h-auto"}
                priority
            />
            <TitleText>And Towing</TitleText>
            <p className={"text-sm text-gray-400"}>A limited libability company</p>
        </div>
    )
}


HeroTitleContainer.displayName = "HeroTitleContainer"


export default HeroTitleContainer;
