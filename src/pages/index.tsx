import Feature from "@/components/home/features/Feature";
import Hero from "@/components/home/Hero/Hero";
import LastProject from "@/components/home/last-project/LastProject";
import Education from "@/components/home/education/Education";
import Projects from "@/components/home/projects/projects";
export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <LastProject />
      <Education />
      <Projects />
    </>
  );
}
