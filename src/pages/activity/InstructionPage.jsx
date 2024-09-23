import {
  Group,
  Title,
  Text,
  ActionIcon,
  Divider,
  Avatar,
  Textarea,
  Grid,
  Box,
  Flex,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconMessage,
  IconPaperclip,
  IconSend,
} from "@tabler/icons-react";
import AttachmentCard from "../../components/AttachmentCard";

export default function InstructionPage({}) {
  return (
    <Box mb="xl">
      <Group justify="space-between" style={{ flexWrap: "nowrap" }}>
        <div>
          <Title fw={500} size="h3" lineClamp={1}>
            LABORATORY ACTIVITY NO.1
          </Title>
          <Text size="sm" c="dimmed">
            Prince Charles Clemente | February 10, 2024
          </Text>
        </div>
        <ActionIcon variant="subtle" radius="xl" color="white" size="lg">
          <IconDotsVertical size={20} />
        </ActionIcon>
      </Group>
      <Group justify="space-between" mt="md">
        <Text size="xs" fw={500}>
          100 points
        </Text>
        <Text size="xs" fw={500}>
          Due on: February 27, 2024
        </Text>
      </Group>

      <Divider my="md" />

      <div>
        <Text size="sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          asperiores nam aliquam distinctio quisquam quas animi impedit magnam
          debitis sed quos velit fuga rem, accusamus commodi ipsam optio vel
          assumenda!
        </Text>

        <Grid mt="md">
          <Grid.Col span={12}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <IconPaperclip size={20} color="gray" />
              <Text size="sm" c="dimmed">
                Attachments
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
            <AttachmentCard />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
            <AttachmentCard />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
            <AttachmentCard />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 4 }}>
            <AttachmentCard />
          </Grid.Col>
        </Grid>

        <Divider my="md" />

        <Flex direction="column" gap="lg">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <IconMessage size={20} color="gray" />
            <Text size="sm" c="dimmed">
              Messages
            </Text>
          </div>

          <Flex align="flex-start" gap="md">
            <Avatar radius="xl" />
            <div>
              <Text size="sm" fw={500}>
                Prince Charles Clemente
              </Text>
              <Text size="sm" c="gray.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ipsam dolorum fugit ipsa eos.
              </Text>
            </div>
          </Flex>

          <Flex align="flex-start" gap="md">
            <Avatar radius="xl" />
            <div>
              <Text size="sm" fw={500}>
                Prince Charles Clemente
              </Text>
              <Text size="sm" c="gray.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ipsam dolorum fugit ipsa eos at voluptates quidem quod amet id
                possimus doloribus consequuntur repellat deserunt voluptatibus,
                voluptatem repudiandae est nulla.
              </Text>
            </div>
          </Flex>

          <Group>
            <Avatar radius="xl" />
            <Textarea radius="xl" size="xs" style={{ flexGrow: 1 }} />
            <ActionIcon variant="default" radius="xl" size="lg">
              <IconSend size={20} />
            </ActionIcon>
          </Group>
        </Flex>
      </div>
    </Box>
  );
}
