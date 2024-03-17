import React from 'react'



interface HeroInformationContainerProps {

}

const className = "sm:text-lg font-semibold flex flex-row"

const InfoText = ({ content }: { content: string }) => {
    return <p >{content}</p>
}

const HeroInformationContainer = (props: HeroInformationContainerProps) => {
    return (
        <div className={"flex flex-col justify-center items-center gap-2 [&_*]:uppercase [&_*]:whitespace-nowrap"}>
            <a
                href="tel:12192661203"
                className={`${className} flex flex-row group/textItem`}
            >
                <span
                    className={"w-[2px] h-full mr-2 bg-transparent transition-colors duration-150 group-hover/textItem:bg-sky-500"}
                />
                <span>{"Direct #: (219) 266-1203"}</span>
            </a>
            <a
                href="mailto:iskura@speedyrecoverytowing.com"
                className={`${className} flex flex-row group/textItem`}
            >
                <span
                    className={"w-[2px] h-full mr-2 bg-transparent transition-colors duration-150 group-hover/textItem:bg-sky-500"}
                />
                <span className={"hidden sm:inline-block"}>
                    {"Email: ISKURA@speedyrecoverytowing.com"}
                </span>
                <span className={"inline-block sm:hidden"}>
                    {"ISKURA@speedyrecoverytowing.com"}
                </span>
            </a>
            <InfoText content="10420 S. Circle Drive" />
            <InfoText content="Oak Lawn, Illinois 60453" />
        </div>
    )
}


HeroInformationContainer.displayName = "HeroInformationContainer"


export default HeroInformationContainer;
