import { Box, Flex } from "@mantine/core";
import StreamHeader from "../../components/StreamHeader";
import StreamPost from "../../components/StreamPost";

export default function StreamPage({}) {
  const iterable = [1, 2, 3];

  const posts = iterable.map((item) => {
    return (
      <Box key={item}>
        <StreamPost />
      </Box>
    );
  });

  return (
    <Flex direction="column" rowGap="xl">
      <StreamHeader />
      <Flex direction="column" gap="md">
        {posts}
      </Flex>
    </Flex>
  );
}
