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
            <InfoText content="17811 Bretz Drive" />
            <InfoText content="Homewood, Illinois 60430" />
            <a href="tel:12192661203" className={"font-semi-bold mt-4 lg:mt-0 bg-blue-700 text-white p-4 rounded hover:bg-blue-600 transition-colors duration-200"}>
                Open 24 hours
            </a>
        </div>
    )
}


HeroInformationContainer.displayName = "HeroInformationContainer"


export default HeroInformationContainer;
