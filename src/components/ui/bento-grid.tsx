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
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  url?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
      <a
        className={cn(
          "z-20 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-blue-black border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
        href={url}
        target="_blank"
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-white mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-stone-100 text-xs">
            {description}
          </div>
        </div>
      </a>
  );
}