import { Card, Avatar, Text, Group, ActionIcon, Anchor } from "@mantine/core";
import { IconDotsVertical, IconChecklist } from "@tabler/icons-react";

export default function StreamPost({}) {
  return (
    <Card withBorder radius="md" style={{ backgroundColor: "transparent" }}>
      <Group justify="space-between" style={{ flexWrap: "nowrap" }}>
        <Group style={{ flexWrap: "nowrap" }}>
          <Avatar radius="xl">
            <IconChecklist />
          </Avatar>
          <div>
            <Anchor c="white" href="/activity">
              <Text size="sm" fw={400} lineClamp={2}>
                Prince Charles Clemente posted a new assignment: LABORATORY
                ACTIVITY NO.1
              </Text>
            </Anchor>
            <Text size="xs" c="dimmed">
              Assignment | February 10, 2024
            </Text>
          </div>
        </Group>

        <ActionIcon variant="subtle" radius="xl" color="white" size="lg">
          <IconDotsVertical size={20} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
