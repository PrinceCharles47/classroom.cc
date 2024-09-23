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

const items = [
  {
    id: 1,
    name: "Laboratory Activity No.1",
    type: "Assignment",
    createdAt: "February 10, 2024",
  },
  {
    id: 2,
    name: "Laboratory Activity No.1",
    type: "Assignment",
    createdAt: "February 10, 2024",
  },
  {
    id: 3,
    name: "Laboratory Activity No.1",
    type: "Assignment",
    createdAt: "February 10, 2024",
  },
  {
    id: 4,
    name: "Laboratory Activity No.1",
    type: "Assignment",
    createdAt: "February 10, 2024",
  },
];

export default function Classworks({}) {
  const accordionItems = items.map((item) => {
    return (
      <Accordion.Item value={item.id.toString()} key={item.id}>
        <AccordionControl
          title={item.name}
          type={item.type}
          createdAt={item.createdAt}
        />
        <Accordion.Panel>
          <Text size="sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            commodi quidem unde cumque repellat maiores ut porro consequatur
            atque ratione voluptas eveniet error. Ducimus dolor exercitationem
            laboriosam ratione rem ullam?
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <Accordion chevronPosition="left" variant="default" radius="md">
      {accordionItems}
    </Accordion>
  );
}

function AccordionControl({ title, type, createdAt }) {
  return (
    <Center>
      <Accordion.Control>
        <Group>
          <Avatar radius="xl">
            <IconChecklist />
          </Avatar>
          <div>
            <Text size="sm" fw={400}>
              {title.toUpperCase()}
            </Text>
            <Text size="xs" c="dimmed">
              {`${type} | ${createdAt}`}
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
