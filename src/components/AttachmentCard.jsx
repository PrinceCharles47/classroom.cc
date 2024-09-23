import { Group, Text, Card, Image } from "@mantine/core";
import sampleImage from "../assets/sample1.jpg";

export default function AttachmentCard({}) {
  return (
    <Card withBorder radius="md" p="xs">
      <Card.Section>
        <Image src={sampleImage} height={50} />
      </Card.Section>
      <Group wrap="nowrap" mt="sm">
        <div>
          <Text size="xs" lineClamp={1}>
            Module_01_Laboratory_Activity
          </Text>

          <Text size="xs" c="dimmed">
            PDF
          </Text>
        </div>
      </Group>
    </Card>
  );
}
