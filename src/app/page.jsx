import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="relative mt-32">
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] bg-[#07ACFE]" />

        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#0D0D0D]" />
      </div>

      {/* Main Content */}
      <div className="px-[4%]">
        <Hero />
      </div>
    </>
  );
}
