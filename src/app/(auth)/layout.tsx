import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Coffee01Icon, Coffee03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 p-6 bg-muted min-h-svh md:p-10">
      <div className="absolute top-4 right-4">
        <DarkmodeToggle />
      </div>
      <div className="flex flex-col w-full max-w-sm gap-6">
        <div className="flex items-center self-center gap-4 text-xl font-semibold">
          <div className="p-2 rounded-full bg-amber-500">
            <HugeiconsIcon icon={Coffee01Icon} size={28} />
          </div>
          POS Apps
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
