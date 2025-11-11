import { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const frameVariants = tv({
  slots: {
    root: "absolute inset-0 grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] [grid-template-areas:'hdr_hdr_hdr''sbs_cnt_sbe''ftr_ftr_ftr'] overflow-hidden",
    content: "[grid-area:cnt] relative overflow-auto",
    sidebar:
      "data-[side=start]:[grid-area:sbs] data-[side=end]:[grid-area:sbe] flex flex-col justify-between items-center data-[side=start]:border-e data-[side=end]:border-s",
    header: "[grid-area:hdr] flex flex-row justify-between items-center border-b",
    footer: "[grid-area:ftr] flex flex-row justify-between items-center border-t",
  },
  variants: {
    variant: {
      def: {
        root: "bg-def-b-bg text-def-b-fg border-def-b-bd shadow-def-b-bd/25",
        content: "bg-def-a-bg text-def-a-fg border-def-a-bd shadow-def-a-bd/25",
        sidebar: "bg-def-b-bg text-def-b-fg border-def-b-bd shadow-def-b-bd/25",
        header: "bg-def-b-bg text-def-b-fg border-def-b-bd shadow-def-b-bd/25",
        footer: "bg-def-b-bg text-def-b-fg border-def-b-bd shadow-def-b-bd/25",
      },
      pri: {
        root: "bg-pri-b-bg text-pri-b-fg border-pri-b-bd shadow-pri-b-bd/25",
        content: "bg-pri-a-bg text-pri-a-fg border-pri-a-bd shadow-pri-a-bd/25",
        sidebar: "bg-pri-b-bg text-pri-b-fg border-pri-b-bd shadow-pri-b-bd/25",
        header: "bg-pri-b-bg text-pri-b-fg border-pri-b-bd shadow-pri-b-bd/25",
        footer: "bg-pri-b-bg text-pri-b-fg border-pri-b-bd shadow-pri-b-bd/25",
      },
      sec: {
        root: "bg-sec-b-bg text-sec-b-fg border-sec-b-bd shadow-sec-b-bd/25",
        content: "bg-sec-a-bg text-sec-a-fg border-sec-a-bd shadow-sec-a-bd/25",
        sidebar: "bg-sec-b-bg text-sec-b-fg border-sec-b-bd shadow-sec-b-bd/25",
        header: "bg-sec-b-bg text-sec-b-fg border-sec-b-bd shadow-sec-b-bd/25",
        footer: "bg-sec-b-bg text-sec-b-fg border-sec-b-bd shadow-sec-b-bd/25",
      },
      ter: {
        root: "bg-ter-b-bg text-ter-b-fg border-ter-b-bd shadow-ter-b-bd/25",
        content: "bg-ter-a-bg text-ter-a-fg border-ter-a-bd shadow-ter-a-bd/25",
        sidebar: "bg-ter-b-bg text-ter-b-fg border-ter-b-bd shadow-ter-b-bd/25",
        header: "bg-ter-b-bg text-ter-b-fg border-ter-b-bd shadow-ter-b-bd/25",
        footer: "bg-ter-b-bg text-ter-b-fg border-ter-b-bd shadow-ter-b-bd/25",
      },
      inf: {
        root: "bg-inf-b-bg text-inf-b-fg border-inf-b-bd shadow-inf-b-bd/25",
        content: "bg-inf-a-bg text-inf-a-fg border-inf-a-bd shadow-inf-a-bd/25",
        sidebar: "bg-inf-b-bg text-inf-b-fg border-inf-b-bd shadow-inf-b-bd/25",
        header: "bg-inf-b-bg text-inf-b-fg border-inf-b-bd shadow-inf-b-bd/25",
        footer: "bg-inf-b-bg text-inf-b-fg border-inf-b-bd shadow-inf-b-bd/25",
      },
      suc: {
        root: "bg-suc-b-bg text-suc-b-fg border-suc-b-bd shadow-suc-b-bd/25",
        content: "bg-suc-a-bg text-suc-a-fg border-suc-a-bd shadow-suc-a-bd/25",
        sidebar: "bg-suc-b-bg text-suc-b-fg border-suc-b-bd shadow-suc-b-bd/25",
        header: "bg-suc-b-bg text-suc-b-fg border-suc-b-bd shadow-suc-b-bd/25",
        footer: "bg-suc-b-bg text-suc-b-fg border-suc-b-bd shadow-suc-b-bd/25",
      },
      wrn: {
        root: "bg-wrn-b-bg text-wrn-b-fg border-wrn-b-bd shadow-wrn-b-bd/25",
        content: "bg-wrn-a-bg text-wrn-a-fg border-wrn-a-bd shadow-wrn-a-bd/25",
        sidebar: "bg-wrn-b-bg text-wrn-b-fg border-wrn-b-bd shadow-wrn-b-bd/25",
        header: "bg-wrn-b-bg text-wrn-b-fg border-wrn-b-bd shadow-wrn-b-bd/25",
        footer: "bg-wrn-b-bg text-wrn-b-fg border-wrn-b-bd shadow-wrn-b-bd/25",
      },
      err: {
        root: "bg-err-b-bg text-err-b-fg border-err-b-bd shadow-err-b-bd/25",
        content: "bg-err-a-bg text-err-a-fg border-err-a-bd shadow-err-a-bd/25",
        sidebar: "bg-err-b-bg text-err-b-fg border-err-b-bd shadow-err-b-bd/25",
        header: "bg-err-b-bg text-err-b-fg border-err-b-bd shadow-err-b-bd/25",
        footer: "bg-err-b-bg text-err-b-fg border-err-b-bd shadow-err-b-bd/25",
      },
      ldn: {
        root: "bg-ldn-b-bg text-ldn-b-fg border-ldn-b-bd shadow-ldn-b-bd/25",
        content: "bg-ldn-a-bg text-ldn-a-fg border-ldn-a-bd shadow-ldn-a-bd/25",
        sidebar: "bg-ldn-b-bg text-ldn-b-fg border-ldn-b-bd shadow-ldn-b-bd/25",
        header: "bg-ldn-b-bg text-ldn-b-fg border-ldn-b-bd shadow-ldn-b-bd/25",
        footer: "bg-ldn-b-bg text-ldn-b-fg border-ldn-b-bd shadow-ldn-b-bd/25",
      },
    },
    size: {
      sm: {
        root: "p-0 text-xs font-light",
        content: "p-0 text-xs font-light",
        sidebar: "p-px gap-px text-xs font-light",
        header: "px-px py-px gap-px text-xs font-extralight",
        footer: "px-px py-px gap-px text-xs font-extralight",
      },
      md: {
        root: "p-0 text-base font-base",
        content: "p-0 text-base font-base",
        sidebar: "p-1 gap-1 text-base font-base",
        header: "px-1 py-0.5 gap-1 text-sm font-light",
        footer: "px-1 py-0.5 gap-1 text-sm font-light",
      },
      lg: {
        root: "p-0 text-xs font-semibold",
        content: "p-0 text-xs font-semibold",
        sidebar: "p-2 gap-2 text-xs font-semibold",
        header: "px-2 py-1 gap-2 text-xs font-base",
        footer: "px-2 py-1 gap-2 text-xs font-base",
      },
    },
  },
  defaultVariants: { variant: "def", size: "md" },
});

type FrameBaseProps = { asChild?: boolean };
type FrameVarProps = VariantProps<typeof frameVariants>;
export type FrameRootProps = FrameBaseProps & FrameVarProps & ComponentProps<"div">;
export type FrameContentProps = FrameBaseProps & FrameVarProps & ComponentProps<"main">;
export type FrameSidebarProps = FrameBaseProps & FrameVarProps & ComponentProps<"aside"> & { side?: "start" | "end" };
export type FrameHeaderProps = FrameBaseProps & FrameVarProps & ComponentProps<"header">;
export type FrameFooterProps = FrameBaseProps & FrameVarProps & ComponentProps<"footer">;

export function FrameRoot({ variant, asChild, className, ...props }: FrameRootProps) {
  const Comp = asChild ? Slot : "div";
  const { root } = frameVariants({ variant, className });

  return <Comp className={root()} {...props} />;
}

export function FrameContent({ variant, asChild, className, ...props }: FrameContentProps) {
  const Comp = asChild ? Slot : "main";
  const { content } = frameVariants({ variant, className });

  return <Comp className={content()} {...props} />;
}

export function FrameSidebar({ variant, side = "start", asChild, className, ...props }: FrameSidebarProps) {
  const Comp = asChild ? Slot : "aside";
  const { sidebar } = frameVariants({ variant, className });

  return <Comp className={sidebar()} data-side={side} {...props} />;
}

export function FrameHeader({ variant, asChild, className, ...props }: FrameHeaderProps) {
  const Comp = asChild ? Slot : "header";
  const { header } = frameVariants({ variant, className });

  return <Comp className={header()} {...props} />;
}

export function FrameFooter({ variant, asChild, className, ...props }: FrameFooterProps) {
  const Comp = asChild ? Slot : "footer";
  const { footer } = frameVariants({ variant, className });

  return <Comp className={footer()} {...props} />;
}
