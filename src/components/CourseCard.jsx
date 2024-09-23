import { Card, Image, Text, Group, ActionIcon, Anchor } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import sample from "../assets/sample1.jpg";

export default function CourseCard({}) {
  return (
    <Card radius="md" withBorder>
      <Card.Section>
        <Image src={sample} height={125} />
      </Card.Section>

      <Group mt="md" justify="space-between" align="flex-start">
        <div>
          <Anchor c="white" href="/class">
            <Text size="md">PROG3L</Text>
          </Anchor>
          <Text size="xs" c="dimmed">
            CCIS3E
          </Text>
        </div>

        <ActionIcon variant="subtle" radius="xl" color="white">
          <IconDotsVertical size={20} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
