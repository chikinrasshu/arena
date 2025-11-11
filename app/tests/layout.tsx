import { FrameContent, FrameRoot, FrameSidebar } from "@/components/ui/frame";

export default function TestsLayout({ children }: { children: React.ReactNode }) {
  return (<FrameRoot variant="pri">
    <FrameSidebar variant="pri">Sidebar</FrameSidebar>
    <FrameContent variant="pri">{children}</FrameContent>
  </FrameRoot>);
}
