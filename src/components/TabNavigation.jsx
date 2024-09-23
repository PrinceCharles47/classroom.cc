import { Tabs, Container } from "@mantine/core";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function TabNavigation({ tabs, hiddenOnSmallBreakpoint, isFluid = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const smallBreakpoint = useMediaQuery("(max-width: 48em");

  const tabsList = tabs.map((tab) => {
    return (
      <Tabs.Tab
        key={tab.name}
        value={tab.path}
        visibleFrom={hiddenOnSmallBreakpoint.includes(tab.name) ? "md" : null}
      >
        {tab.name}
      </Tabs.Tab>
    );
  });

  return (
    <>
      <Tabs
        value={location.pathname}
        mb="sm"
        pt="md"
        onChange={(value) => navigate(value)}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "var(--mantine-color-dark-7)",
        }}
      >
        <Tabs.List justify={smallBreakpoint ? "center" : null}>
          {tabsList}
        </Tabs.List>
      </Tabs>

      <Container fluid={isFluid} mt="xl" size="lg">
        <Outlet />
      </Container>
    </>
  );
}
