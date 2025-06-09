import AdminComponent from "@/components/(8) Admin";
import { Metadata } from "next";

// Meta data
export const metadata: Metadata = {
  title: "Admin Panel | BIGBEASTISHANK",
  description: "Admin panel for BBI to read his data from database!",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  keywords: ["AdminPanel"],

  openGraph: {
    title: "Admin Panel | BIGBEASTISHANK",
    description: "Admin panel for BBI to read his data from database!",
  },
};
/////////////////////////////

export default function Admin() {
  return (
    <div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
      <AdminComponent />
    </div>
  );
}
