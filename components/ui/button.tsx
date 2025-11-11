import { cn } from "@/lib/cn";
import { IconProps, type Icon } from "@phosphor-icons/react";
import { SpinnerIcon } from "@phosphor-icons/react/dist/ssr";
import { Root, Slottable } from "@radix-ui/react-slot";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  slots: {
    root: cn(
      "inline-flex flex-row justify-between items-center transition-all",
      "border shadow-[0_1px_0_var(--tw-shadow-color)] -translate-y-[1px]",
      "[--bg-op:100%] [--fg-op:100%] [--bd-op:100%]",
      "disabled:contrast-75 disabled:grayscale-75",
      "active:translate-y-0 active:shadow-[0_0_0_var(--tw-shadow-color)]"
    ),
    icon: cn(""),
  },
  variants: {
    variant: {
      def: {
        root: "bg-def-a-bg/(--bg-op) text-def-a-fg/(--fg-op) border-def-a-bd/(--bd-op) shadow-def-a-bd/(--bd-op)",
      },
      pri: {
        root: "bg-pri-a-bg/(--bg-op) text-pri-a-fg/(--fg-op) border-pri-a-bd/(--bd-op) shadow-pri-a-bd/(--bd-op)",
      },
      sec: {
        root: "bg-sec-a-bg/(--bg-op) text-sec-a-fg/(--fg-op) border-sec-a-bd/(--bd-op) shadow-sec-a-bd/(--bd-op)",
      },
      ter: {
        root: "bg-ter-a-bg/(--bg-op) text-ter-a-fg/(--fg-op) border-ter-a-bd/(--bd-op) shadow-ter-a-bd/(--bd-op)",
      },
      inf: {
        root: "bg-inf-a-bg/(--bg-op) text-inf-a-fg/(--fg-op) border-inf-a-bd/(--bd-op) shadow-inf-a-bd/(--bd-op)",
      },
      suc: {
        root: "bg-suc-a-bg/(--bg-op) text-suc-a-fg/(--fg-op) border-suc-a-bd/(--bd-op) shadow-suc-a-bd/(--bd-op)",
      },
      wrn: {
        root: "bg-wrn-a-bg/(--bg-op) text-wrn-a-fg/(--fg-op) border-wrn-a-bd/(--bd-op) shadow-wrn-a-bd/(--bd-op)",
      },
      err: {
        root: "bg-err-a-bg/(--bg-op) text-err-a-fg/(--fg-op) border-err-a-bd/(--bd-op) shadow-err-a-bd/(--bd-op)",
      },
      ldn: {
        root: "bg-ldn-a-bg/(--bg-op) text-ldn-a-fg/(--fg-op) border-ldn-a-bd/(--bd-op) shadow-ldn-a-bd/(--bd-op)",
      },
    },
    size: {
      sm: { root: "px-[1px] py-[2px] text-sm font-light", icon: "size-5" },
      md: { root: "px-1 py-0.5 text-base font-base", icon: "size-6" },
      lg: { root: "px-2 py-1 text-lg font-semibold", icon: "size-8" },
    },
    kind: {
      solid: { root: "" },
      outline: { root: "not-hover:[--bg-op:50%]" },
      ghost: { root: "not-hover:[--bg-op:0%] not-hover:[--bd-op:0%] not-hover:translate-y-0 not-hover:text-inherit" },
    },
  },
  defaultVariants: { variant: "def", size: "md", kind: "solid" },
});

export type ButtonVarProps = VariantProps<typeof buttonVariants>;
export type ButtonProps = {
  loading?: boolean;
  asChild?: boolean;
  icon?: Icon;
  iconClassName?: string;
} & ComponentProps<"button"> &
  ButtonVarProps &
  Omit<IconProps, "size">;

export function Button({
  variant,
  size,
  kind,
  icon,
  iconClassName,
  color,
  weight,
  mirrored,
  className,
  children,
  loading,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Root : "button";
  const { root, icon: iconCN } = buttonVariants({ variant, size, kind });

  const iconProps: IconProps = { color, weight, mirrored };
  const Icon = loading ? SpinnerIcon : icon;

  return (
    <Comp className={cn(root(), className)} {...props}>
      {Icon && <Icon className={cn(iconCN(), loading && "animate-spin", iconClassName)} {...iconProps} />}
      <Slottable>{children}</Slottable>
    </Comp>
  );
}
