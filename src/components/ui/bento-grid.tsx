import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </div>
  );
};

export const BentoGridItem = ({
  className,
  url,
  completion,
  title,
  description,
  header,
  icons,
}: {
  className?: string;
  url?: string;
  completion?: string
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icons: string[];
}) => {
  return (
      <a
        className={cn(
          "z-20 h-full row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-blue-black border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
        href={url}
        target="_blank"
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans flex justify-between font-bold text-white mb-2 mt-2">
            <p>{title}</p>
            <p className="font-julius font-normal">{completion}</p>
          </div>
          <div className="font-sans font-normal text-stone-100 text-xs">
            {description}
          </div>
          <div className="flex items-center space-x-3 mt-1">
            {icons.map((icon, id) => {
              return(
                <img key={Math.random()} src={`./project_icon/${icon}.svg`} width="20" height="20" alt={`${icon}`}/>
              )
            })}
          </div>
        </div>
      </a>
  );
}