import {
  Card,
  Avatar,
  Text,
  Group,
  ActionIcon,
  Accordion,
  Center,
  Box,
} from "@mantine/core";
import { IconDotsVertical, IconChecklist } from "@tabler/icons-react";

export default function ClassworkItem({}) {
  return (
    <Accordion chevronPosition="left" variant="contained" radius="md">
      <Accordion.Item value="item-1">
        <AccordionControl />
        <Accordion.Panel>Hello</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function AccordionControl({}) {
  return (
    <Center>
      <Accordion.Control>
        <Group>
          <Avatar radius="xl">
            <IconChecklist />
          </Avatar>
          <div>
            <Text size="sm" fw={400}>
              LABORATORY ACTIVITY NO.1
            </Text>
            <Text size="xs" c="dimmed">
              Assignment | February 10, 2024
            </Text>
          </div>
        </Group>
      </Accordion.Control>

      <ActionIcon variant="subtle" radius="xl" color="white" size="lg">
        <IconDotsVertical size={20} />
      </ActionIcon>
    </Center>
  );
}
