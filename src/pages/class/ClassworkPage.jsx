import {
  Box,
  Image,
  Button,
  TextInput,
  Group,
  Card,
  Divider,
} from "@mantine/core";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import ClassworkItem from "../../components/ClassworkItem";
import Classworks from "../../components/Classworks";
import sampleImage from "../../assets/sample1.jpg";

export default function ClassworkPage({}) {
  return (
    <Box>
      <Card withBorder radius="md">
        <Card.Section>
          <Image src={sampleImage} height={150} />
        </Card.Section>

        <Group mt="md">
          <TextInput
            placeholder="Search an activity..."
            radius="xl"
            style={{ flexGrow: 1 }}
          />
          <Button
            color="#6458EC"
            radius="xl"
            leftSection={<IconCirclePlusFilled size={20} />}
          >
            Create
          </Button>
        </Group>
      </Card>

      {/* <Divider my="md" /> */}

      <Box mt="lg">
        <Classworks />
      </Box>

      {/* <Flex direction="column" gap="md">
        <ClassworkItem />
      </Flex> */}
    </Box>
  );
}
