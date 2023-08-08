import Image from "next/image";
import { Inter } from "next/font/google";
import LandingLayout from "@/components/layout/LandingLayout";
import Food from "@/components/home/homeSection/Food";
import HomePageContainer from "@/components/home/HomePageContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePageContainer />
    </main>
  );
}
Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
