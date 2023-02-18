import Feature from "@/components/home/features/Feature";
import Hero from "@/components/home/Hero/Hero";
import LastProject from "@/components/home/last-project/LastProject";
import Education from "@/components/home/education/Education";
export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <LastProject />
      <Education />
    </>
  );
}
