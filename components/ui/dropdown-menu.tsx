import { cn } from "@/lib/cn";
import {
  DropdownMenuArrow as DDMArrow,
  DropdownMenuCheckboxItem as DDMCheckboxItem,
  DropdownMenuContent as DDMContent,
  DropdownMenuGroup as DDMGroup,
  DropdownMenuItem as DDMItem,
  DropdownMenuItemIndicator as DDMItemIndicator,
  DropdownMenuLabel as DDMLabel,
  DropdownMenuPortal as DDMPortal,
  DropdownMenuRadioGroup as DDMRadioGroup,
  DropdownMenuRadioItem as DDMRadioItem,
  DropdownMenu as DDMRoot,
  DropdownMenuSeparator as DDMSeparator,
  DropdownMenuSub as DDMSub,
  DropdownMenuSubContent as DDMSubContent,
  DropdownMenuSubTrigger as DDMSubTrigger,
  DropdownMenuTrigger as DDMTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    trigger: "",
    content: "",
    arrow: "",
    item: "",
    group: "",
    label: "",
    checkboxItem: "",
    radioGroup: "",
    radioItem: "",
    itemIndicator: "",
    separator: "",
    subTrigger: "",
    subContent: "",
  },
  variants: {
    variant: {
      def: {},
      pri: {},
      sec: {},
      ter: {},
      inf: {},
      suc: {},
      wrn: {},
      err: {},
      ldn: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  },
  defaultVariants: { variant: "def", size: "md" },
});

export type DropdownMenuVarProps = VariantProps<typeof dropdownMenuVariants>;
export type DropdownMenuRootProps = ComponentProps<typeof DDMRoot>;
export type DropdownMenuTriggerProps = ComponentProps<typeof DDMTrigger> & DropdownMenuVarProps;
export type DropdownMenuPortalProps = ComponentProps<typeof DDMPortal>;
export type DropdownMenuContentProps = ComponentProps<typeof DDMContent> & DropdownMenuVarProps;
export type DropdownMenuArrowProps = ComponentProps<typeof DDMArrow> & DropdownMenuVarProps;
export type DropdownMenuItemProps = ComponentProps<typeof DDMItem> & DropdownMenuVarProps;
export type DropdownMenuGroupProps = ComponentProps<typeof DDMGroup> & DropdownMenuVarProps;
export type DropdownMenuLabelProps = ComponentProps<typeof DDMLabel> & DropdownMenuVarProps;
export type DropdownMenuCheckboxItemProps = ComponentProps<typeof DDMCheckboxItem> & DropdownMenuVarProps;
export type DropdownMenuRadioGroupProps = ComponentProps<typeof DDMRadioGroup> & DropdownMenuVarProps;
export type DropdownMenuRadioItemProps = ComponentProps<typeof DDMRadioItem> & DropdownMenuVarProps;
export type DropdownMenuItemIndicatorProps = ComponentProps<typeof DDMItemIndicator> & DropdownMenuVarProps;
export type DropdownMenuSeparatorProps = ComponentProps<typeof DDMSeparator> & DropdownMenuVarProps;
export type DropdownMenuSubProps = ComponentProps<typeof DDMSub>;
export type DropdownMenuSubTriggerProps = ComponentProps<typeof DDMSubTrigger> & DropdownMenuVarProps;
export type DropdownMenuSubContentProps = ComponentProps<typeof DDMSubContent> & DropdownMenuVarProps;

export function DropdownMenuRoot({ ...props }: DropdownMenuRootProps) {
  return <DDMRoot {...props} />;
}

export function DropdownMenuTrigger({ variant, size, className, ...props }: DropdownMenuTriggerProps) {
  const { trigger } = dropdownMenuVariants({ variant, size });
  return <DDMTrigger className={cn(trigger(), className)} {...props} />;
}

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return <DDMPortal {...props} />;
}

export function DropdownMenuContent({ variant, size, className, ...props }: DropdownMenuContentProps) {
  const { content } = dropdownMenuVariants({ variant, size });
  return <DDMContent className={cn(content(), className)} {...props} />;
}

export function DropdownMenuArrow({ variant, size, className, ...props }: DropdownMenuArrowProps) {
  const { arrow } = dropdownMenuVariants({ variant, size });
  return <DDMArrow className={cn(arrow(), className)} {...props} />;
}

export function DropdownMenuItem({ variant, size, className, ...props }: DropdownMenuItemProps) {
  const { item } = dropdownMenuVariants({ variant, size });
  return <DDMItem className={cn(item(), className)} {...props} />;
}

export function DropdownMenuGroup({ variant, size, className, ...props }: DropdownMenuGroupProps) {
  const { group } = dropdownMenuVariants({ variant, size });
  return <DDMGroup className={cn(group(), className)} {...props} />;
}

export function DropdownMenuLabel({ variant, size, className, ...props }: DropdownMenuLabelProps) {
  const { label } = dropdownMenuVariants({ variant, size });
  return <DDMLabel className={cn(label(), className)} {...props} />;
}

export function DropdownMenuCheckboxItem({ variant, size, className, ...props }: DropdownMenuCheckboxItemProps) {
  const { checkboxItem } = dropdownMenuVariants({ variant, size });
  return <DDMCheckboxItem className={cn(checkboxItem(), className)} {...props} />;
}

export function DropdownMenuRadioGroup({ variant, size, className, ...props }: DropdownMenuRadioGroupProps) {
  const { radioGroup } = dropdownMenuVariants({ variant, size });
  return <DDMRadioGroup className={cn(radioGroup(), className)} {...props} />;
}

export function DropdownMenuRadioItem({ variant, size, className, ...props }: DropdownMenuRadioItemProps) {
  const { radioItem } = dropdownMenuVariants({ variant, size });
  return <DDMRadioItem className={cn(radioItem(), className)} {...props} />;
}

export function DropdownMenuItemIndicator({ variant, size, className, ...props }: DropdownMenuItemIndicatorProps) {
  const { itemIndicator } = dropdownMenuVariants({ variant, size });
  return <DDMItemIndicator className={cn(itemIndicator(), className)} {...props} />;
}

export function DropdownMenuSeparator({ variant, size, className, ...props }: DropdownMenuSeparatorProps) {
  const { separator } = dropdownMenuVariants({ variant, size });
  return <DDMSeparator className={cn(separator(), className)} {...props} />;
}

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DDMSub {...props} />;
}

export function DropdownMenuSubTrigger({ variant, size, className, ...props }: DropdownMenuSubTriggerProps) {
  const { subTrigger } = dropdownMenuVariants({ variant, size });
  return <DDMSubTrigger className={cn(subTrigger(), className)} {...props} />;
}

export function DropdownMenuSubContent({ variant, size, className, ...props }: DropdownMenuSubContentProps) {
  const { subContent } = dropdownMenuVariants({ variant, size });
  return <DDMSubContent className={cn(subContent(), className)} {...props} />;
}
