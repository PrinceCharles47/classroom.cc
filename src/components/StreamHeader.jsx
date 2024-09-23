import {
  Card,
  Text,
  BackgroundImage,
  Divider,
  Avatar,
  Group,
  Input,
  ActionIcon,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import sampleImage from "../assets/sample1.jpg";

export default function StreamHeader({}) {
  return (
    <Card withBorder radius="md">
      <Card.Section>
        <BackgroundImage src={sampleImage}>
          <Group align="end" justify="space-between" p="md" style={{ height: '150px' }}>
            <div>
              <Text size="xl" fw={500}>PROG3L</Text>
              <Text size="sm">
                Class Code: fw7g9s
              </Text>
            </div>

            <ActionIcon variant="subtle" radius="xl" color="white" size="lg">
              <IconDotsVertical size={20} />
            </ActionIcon>
          </Group>
        </BackgroundImage>
      </Card.Section>

      {/* <Group justify="space-between" mt="md">
        <div>
          <Text size="md">PROG3L</Text>
          <Text size="sm" c="dimmed">
            Class Code: fw7g9s
          </Text>
        </div>

        <ActionIcon variant="subtle" radius="xl" color="white" size="lg">
          <IconDotsVertical size={20} />
        </ActionIcon>
      </Group>

      <Card.Section>
        <Divider my="md" />
      </Card.Section> */}

      <Group mt="md">
        <Avatar radius="xl" />
        <Input
          component="button"
          variant="filled"
          pointer
          radius="xl"
          style={{ flexGrow: 1 }}
        >
          <Input.Placeholder>Make an announcement</Input.Placeholder>
        </Input>
      </Group>
    </Card>
  );
}
