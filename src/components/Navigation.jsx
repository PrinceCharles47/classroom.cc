import {
  AppShell,
  Burger,
  Group,
  Avatar,
  Text,
  Divider,
  NavLink,
  Box,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconCirclePlus,
  IconShoppingCart,
  IconArchive,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// navigation buttons
const links = [
  { name: "Home", icon: IconHome, path: "" },
  { name: "Crate Class", icon: IconCirclePlus, path: "create-class" },
  { name: "Store", icon: IconShoppingCart, path: "store" },
  { name: "Archived Classes", icon: IconArchive, path: "archived-classes" },
  { name: "Settings", icon: IconSettings, path: "settings" },
];

const subjects = [
  { code: "PROG3L", section: "CCIS3E" },
  { code: "PROG3L", section: "CCIS3F" },
  { code: "ELEC1_NA", section: "CCIS5B" },
];

export default function Navigation({ children }) {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState("Home");
  const navigate = useNavigate()

  const redirect = (path, routeName) => {
    setActive(routeName)
    navigate(path)
  }

  const generalOptions = links.map((link) => {
    return (
      <NavLink
        key={link.name}
        label={link.name}
        leftSection={<link.icon size={20} />}
        active={active === link.name}
        onClick={() => redirect(`/${link.path}`, link.name)}
        variant="subtle"
        autoContrast
      />
    );
  });

  const subjectOptions = subjects.map((subject) => {
    return (
      <NavLink
        key={subject.section}
        label={subject.code}
        description={subject.section}
        leftSection={<Avatar size="sm" name={subject.code} color="initials" />}
        active={active === subject.section}
        onClick={() => setActive(subject.section)}
        variant="subtle"
        autoContrast
      />
    );
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <UserButton />
          <Divider my="sm" />
        </AppShell.Section>

        <AppShell.Section>
          {/* General options */}
          <Text size="xs" fw={500} c="dimmed">
            General
          </Text>
          <Box>{generalOptions}</Box>
        </AppShell.Section>

        <Divider my="sm" />

        <AppShell.Section>
          {/* Teaching options */}
          <Text size="xs" fw={500} c="dimmed">
            Teaching
          </Text>
          <Box>{subjectOptions}</Box>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main
        style={{
          position: "relative",
          height: "100dvh",
          overflow: "auto",
        }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

function UserButton({}) {
  return (
    <UnstyledButton style={{ flexWrap: "nowrap" }}>
      <Group>
        <Avatar radius="md" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500} lineClamp={1}>
            Prince Charles Clemente
          </Text>

          <Text c="dimmed" size="xs" lineClamp={1}>
            @prnc_chrls
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
