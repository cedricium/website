import { cn } from "@/lib/utils";

function Preview({ caption, children, className, ...props }) {
  return (
    <figure
      className={cn(
        `w-full p-12 border rounded flex flex-col items-center justify-center gap-1`,
        className
      )}
      {...props}
    >
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export { Preview };
