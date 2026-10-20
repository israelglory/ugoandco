import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...rest }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-site px-10 sm-down:px-5", className)} {...rest} />;
}
