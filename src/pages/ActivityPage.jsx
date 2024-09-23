import { useLocation } from "react-router-dom";
import TabNavigation from "../components/TabNavigation";

const tabs = [
  { name: "Instruction", path: "/activity" },
  { name: "Submissions", path: "/activity/submission" },
];

const hiddenOnSmallBreakpoint = ["Grades"];

export default function ActivityPage({}) {
  const location = useLocation();
  return (
    <TabNavigation
      tabs={tabs}
      hiddenOnSmallBreakpoint={hiddenOnSmallBreakpoint}
      isFluid={location.pathname === tabs[1].path}
    />
  );
}
