import { Container, Grid } from "@mantine/core";
import CourseCard from "../components/CourseCard";

export default function HomePage({}) {
  return (
    <Container fluid py="md">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <CourseCard />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <CourseCard />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <CourseCard />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <CourseCard />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
