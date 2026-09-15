import { cn } from "@/utils/cn";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.Icon;
        return (
          <div
            key={item.title}
            className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.06]"
          >
            <Icon className="h-8 w-8 text-neutral-400 transition-colors group-hover:text-sky-400" />
            <p className="text-sm font-medium text-neutral-300">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
