import React from "react";
import { ChakraProvider, Table, Thead, Tbody, Tr, Th, Td, Box, Flex, IconButton, useBreakpointValue, useDisclosure, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCopy, FaRegSave, FaTabletAlt } from "react-icons/fa";

// Sample data
const sampleData = [
  {
    date: "01/04/2023",
    stockSymbol: "AAPL",
    transactionType: "Buy",
    quantity: 50,
    pricePerShare: 150.0,
    totalAmount: 7500.0,
  },
  // Add more sample rows as necessary
];

// Add state to track editing status
const Index = () => {
  const [editingCell, setEditingCell] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Render a table cell with formatting based on its type
  const renderCell = (value, type, rowIndex, columnIndex) => {
    const isEditing = editingCell && editingCell.row === rowIndex && editingCell.column === columnIndex;

    if (type === "currency" && isEditing) {
      return <Input type="number" defaultValue={value.toFixed(2)} onBlur={() => setEditingCell(null)} autoFocus />;
    } else if (type === "date" && isEditing) {
      return <Input type="date" defaultValue={value} onBlur={() => setEditingCell(null)} autoFocus />;
    } else if (isEditing) {
      return <Input defaultValue={value} onBlur={() => setEditingCell(null)} autoFocus />;
    }
    switch (type) {
      case "currency":
        return `$${value.toFixed(2)}`;
      case "date":
        // Assuming date format is DD/MM/YYYY
        return value;
      // Add more cases for different data types
      default:
        return value;
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Flex justify="space-between" mb={4}>
          <IconButton icon={<FaRegCopy />} aria-label="Copy Data" />
          <IconButton icon={<FaRegSave />} aria-label="Save Data" />
          {isMobile && <IconButton icon={<FaTabletAlt />} aria-label="Optimize for Mobile" onClick={onOpen} />}
        </Flex>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Stock Symbol</Th>
              <Th>Transaction Type</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Price/Share</Th>
              <Th isNumeric>Total Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sampleData.map((row, index) => (
              <Tr key={index}>
                <Td onClick={() => setEditingCell({ row: index, column: 0 })}>{renderCell(row.date, "date", index, 0)}</Td>
                <Td onClick={() => setEditingCell({ row: index, column: 1 })}>{editingCell && editingCell.row === index && editingCell.column === 1 ? renderCell(row.stockSymbol, "text", index, 1) : row.stockSymbol}</Td>
                <Td onClick={() => setEditingCell({ row: index, column: 2 })}>{editingCell && editingCell.row === index && editingCell.column === 2 ? renderCell(row.transactionType, "text", index, 2) : row.transactionType}</Td>
                <Td isNumeric onClick={() => setEditingCell({ row: index, column: 3 })}>
                  {editingCell && editingCell.row === index && editingCell.column === 3 ? renderCell(row.quantity, "number", index, 3) : row.quantity}
                </Td>
                <Td isNumeric onClick={() => setEditingCell({ row: index, column: 4 })}>
                  {editingCell && editingCell.row === index && editingCell.column === 4 ? renderCell(row.pricePerShare, "currency", index, 4) : `$${row.pricePerShare.toFixed(2)}`}
                </Td>
                <Td isNumeric onClick={() => setEditingCell({ row: index, column: 5 })}>
                  {editingCell && editingCell.row === index && editingCell.column === 5 ? renderCell(row.totalAmount, "currency", index, 5) : `$${row.totalAmount.toFixed(2)}`}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Mobile Optimization Modal/Drawer would go here */}
      </Box>
    </ChakraProvider>
  );
};

export default Index;
