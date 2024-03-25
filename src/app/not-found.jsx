import GoBackButton from "@/utility/GoBackButton";
import HeadingBasic from "@/utility/HeadingBasic";

// Meta data
export const metadata = {
  title: "404 Not Found | BIGBEASTISHANK",
  description:
    "Lost in the digital maze! It appears you've stumbled upon a 404 Not Found - the elusive page seems to have slipped through the cracks. Fear not, intrepid explorer! While this page may be off the grid, our virtual compass is recalibrating to guide you back. Feel free to hit the back button, check the URL for typos, or visit our homepage to embark on a new adventure. We apologize for the inconvenience and appreciate your patience as we tidy up the virtual trail. Safe travels!",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Web Development",
    "Game development",
    "C++",
    "Unreal Engine",
    "Unity",
  ],
  images: "/img/main/pfp.png",
  locale: "en_US",

  openGraph: {
    title: "404 Not Found | BIGBEASTISHANK",
    description:
      "Lost in the digital maze! It appears you've stumbled upon a 404 Not Found - the elusive page seems to have slipped through the cracks. Fear not, intrepid explorer! While this page may be off the grid, our virtual compass is recalibrating to guide you back. Feel free to hit the back button, check the URL for typos, or visit our homepage to embark on a new adventure. We apologize for the inconvenience and appreciate your patience as we tidy up the virtual trail. Safe travels!",
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "Web Development",
      "Game development",
      "C++",
      "Unreal Engine",
      "Unity",
    ],
    images: "/img/main/pfp.png",
    locale: "en_US",
  },
};
//////////////////////////////

export default function NotFound() {
  return (
    <div className="flex flex-col px-5 min-h-[60vh]">
      <div className="my-auto">
        {/* Title description */}
        <HeadingBasic
          heading="404 Not Found"
          description={
            <>
              <p>
                Lost in the digital maze! It appears you've stumbled upon a
                404 Not Found - the elusive page seems to have slipped through
                the cracks. Fear not, intrepid explorer! While this page may be
                off the grid, our virtual compass is recalibrating to guide you
                back. Feel free to hit the back button, check the URL for typos,
                or visit our homepage to embark on a new adventure. We apologize
                for the inconvenience and appreciate your patience as we tidy up
                the virtual trail. Safe travels!
              </p>
            </>
          }
        />

        {/* Goback button */}
        <GoBackButton animationDelay={0.7} />
      </div>
    </div>
  );
}
