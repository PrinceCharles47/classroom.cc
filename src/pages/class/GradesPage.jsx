import {
  Box,
  Flex,
  Container,
  Button,
  TextInput,
  Divider,
  Group,
} from "@mantine/core";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import StreamHeader from "../../components/StreamHeader";
import StreamPost from "../../components/StreamPost";

export default function GradesPage({}) {
  const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const posts = iterable.map((item) => {
    return (
      <Box key={item}>
        <StreamPost />
      </Box>
    );
  });

  return (
    <Container size="lg">
      <Group justify="end">
        <TextInput radius="xl" />
        <Button color="#6458EC" radius="xl" leftSection={<IconCirclePlusFilled size={20} />}>
          Create
        </Button>
      </Group>

      <Divider my="md" />
    </Container>
  );
}
