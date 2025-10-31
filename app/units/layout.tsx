import {
  FrameContents,
  FrameFooter,
  FrameHeader,
  FrameHeaderNav,
} from "@/components/frame";

export default function UnitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden antialiased bg-teal-400 text-teal-900">
      <FrameHeader depth={1}>
        <FrameHeaderNav>
          <span>Units Header</span>
        </FrameHeaderNav>
      </FrameHeader>
      <FrameContents depth={1}>{children}</FrameContents>
      <FrameFooter depth={1}>
        <span className="text-xs font-extralight">Units Footer</span>
      </FrameFooter>
    </div>
  );
}
