"use client";

import { MoonIcon, QuestionIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, type ButtonProps } from "./button";

export function ThemeToggle({ ...props }: ButtonProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => { setMounted(theme !== undefined); }, [theme]);

  const handleToggle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  if (!mounted) return <Button loading {...props} />;

  return <Button className="relative" onClick={handleToggle} icon={resolvedTheme === "light" ? SunIcon : resolvedTheme === "dark" ? MoonIcon : QuestionIcon} {...props} />
}
