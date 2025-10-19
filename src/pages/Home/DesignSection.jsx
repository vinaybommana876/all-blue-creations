import CircularGallery from "../../components/CircularGallery";
export default function DesignSection() {
    return (
        <>
            <section className="flex flex-col justify-center items-center text-center px-10 md:p-20">
                <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r p-2 from-[#e79098] to-black bg-clip-text text-transparent">
                    Our Desgins
                </h2>
            </section>
            <div className="relative h-[600px] -top-35 -md:top-60">
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div>
        </>
    );
}
