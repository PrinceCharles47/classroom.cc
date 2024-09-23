import {
  Table,
  Checkbox,
  Avatar,
  NumberInput,
  TextInput,
  Badge,
  Box,
  Card,
  keys,
} from "@mantine/core";
import { useState } from "react";

const students = [
  { id: 1, name: "Prince Clemente", score: 50, status: "draft" },
  { id: 2, name: "Charles Miranda", score: 75, status: "returned" },
  { id: 3, name: "Prince Miranda", score: 50, status: "draft" },
  { id: 4, name: "Charles Clemente", score: 75, status: "returned" },
];

const tableHeaders = ["Name", "Status", "Score"];

export default function SubmissionPage({}) {
  const [selectedRows, setSelectedRow] = useState([]);
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState(students);

  const updateSelectedRows = (item, isChecked) => {
    if (isChecked) {
      setSelectedRow([...selectedRows, item]);
    } else {
      setSelectedRow(selectedRows.filter((row) => row !== item));
    }
  };

  const filterData = (data, value) => {
    if (!value) {
      return setTableData(students);
    }

    const query = value.toLowerCase().trim();
    let filterResult = data.filter((item) =>
      keys(data[0]).some((key) =>
        item[key].toString().toLowerCase().includes(query)
      )
    );

    return setTableData(filterResult);
  };

  const handleSearch = (searchItem) => {
    console.log(!searchItem);

    setSearch(searchItem.toLowerCase());
    filterData(tableData, searchItem);
  };

  const tableRows = tableData.map((student) => {
    return (
      <Table.Tr key={student.id}>
        <Table.Td>
          <Checkbox
            aria-label="Selected row"
            checked={selectedRows.includes(student.name)}
            onChange={(event) =>
              updateSelectedRows(student.name, event.currentTarget.checked)
            }
          />
        </Table.Td>

        <Table.Td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "0.75rem",
            }}
          >
            <Avatar size="sm" name={student.name} color="initials" />
            {student.name}
          </div>
        </Table.Td>
        <Table.Td>
          <Badge>{student.status}</Badge>
        </Table.Td>
        <Table.Td>{student.score}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer>
      <TextInput
        value={search}
        onChange={(e) => handleSearch(e.currentTarget.value)}
        size="md"
        radius="xl"
        mb="lg"
        placeholder="Search for a student..."
      />
      <Table verticalSpacing="sm" highlightOnHover withRowBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th />
            {tableHeaders.map((header) => {
              return <Table.Th key={header}>{header}</Table.Th>;
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{tableRows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
