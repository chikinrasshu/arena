import { Root, Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib/cn";
import { ViewTransition } from "react";

export function FrameRoot({
  className,
  children,
  asChild,
  ...props
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Root : "div";

  return (
    <Comp
      className={cn(
        "absolute inset-0 flex flex-col overflow-hidden antialiased",
        "bg-emerald-400 text-emerald-900 border-emerald-800",
        className
      )}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

export function FrameHeader({
  className,
  children,
  asChild,
  depth = 0,
  ...props
}: {
  asChild?: boolean;
  depth?: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Root : "header";

  return (
    <ViewTransition name={`frame-header-${depth}`}>
      <Comp
        className={cn(
          "flex flex-row justify-between items-stretch border-b",
          "bg-emerald-400 text-emerald-900 border-emerald-800",
          className
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Comp>
    </ViewTransition>
  );
}

export function FrameHeaderNav({
  children,
  asChild,
  ...props
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Root : "nav";

  return (
    <Comp
      className={cn("inline-flex justify-start items-stretch", props.className)}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

export function FrameContents({
  children,
  className,
  containerClassName,
  asChild,
  depth = 0,
  ...props
}: {
  containerClassName?: string;
  asChild?: boolean;
  depth?: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Root : "main";

  return (
    <Comp
      className={cn(
        "relative flex-1 overflow-hidden",
        "bg-emerald-100 text-emerald-900 border-emerald-950",
        containerClassName
      )}
    >
      <ViewTransition name={`frame-contents-${depth}`}>
        <div
          className={cn(
            "absolute inset-0 flex flex-col overflow-auto",
            className
          )}
          {...props}
        >
          <Slottable>{children}</Slottable>
        </div>
      </ViewTransition>
    </Comp>
  );
}

export function FrameFooter({
  className,
  children,
  asChild,
  depth = 0,
  ...props
}: {
  asChild?: boolean;
  depth?: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = asChild ? Root : "footer";

  return (
    <ViewTransition name={`frame-footer-${depth}`}>
      <Comp
        className={cn(
          "flex justify-center items-center border-t",
          "bg-emerald-400 text-emerald-900 border-emerald-800",
          className
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Comp>
    </ViewTransition>
  );
}
