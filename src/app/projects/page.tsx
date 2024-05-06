import { projects } from '@/components/Projects'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const Projects: React.FC = () => {
  return(
    <div id="project_page">
      <BentoGrid className="max-w-4xl mx-auto">
        {projects.map((item, i) => (
          <BentoGridItem
          key={Math.random()}
          title={item.name}
          url={item.url}
          description={item.description}
          header={<img alt={item.name} src={item.projectPath} className="object-cover flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-bl" />}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default Projects;