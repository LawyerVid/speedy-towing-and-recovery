import HeroInformationContainer from "#/components/heroInformation";
import HeroTitleContainer from "#/components/heroTitleContainer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-24">
            <div className={"w-full md:w-5/6 max-w-screen-lg flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6"}>
                <HeroTitleContainer />
                <HeroInformationContainer />
            </div>
        </main>
    );
}
