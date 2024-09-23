import { Tabs, Box, Container } from "@mantine/core";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import TabNavigation from "../components/TabNavigation";

const tabs = [
  { name: "Stream", path: "/class" },
  { name: "Classwork", path: "/class/class-work" },
  { name: "People", path: "/class/people" },
  { name: "Grades", path: "/class/grades" },
];

const hiddenOnSmallBreakpoint = ["Grades"];

export default function ClassPage({}) {
  return (
    <TabNavigation
      tabs={tabs}
      hiddenOnSmallBreakpoint={hiddenOnSmallBreakpoint}
    />
  );
}
