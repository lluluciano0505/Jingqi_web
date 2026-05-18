import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import { getSettings } from "@/lib/settings";
import { getAllProjects } from "@/lib/projects";
import { getExperienceBySection } from "@/lib/experience";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const settings = getSettings();
  const projects = getAllProjects();
  const { education, experience } = getExperienceBySection();
  const posts = getAllPosts();

  return (
    <main>
      <Hero settings={settings} />
      <ProjectsGrid projects={projects} />
      <ExperienceSection education={education} experience={experience} />
      <BlogSection posts={posts} />
    </main>
  );
}
