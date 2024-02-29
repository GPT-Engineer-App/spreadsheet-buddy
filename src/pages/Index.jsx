import React from "react";
import { ChakraProvider, Table, Thead, Tbody, Tr, Th, Td, Box, Flex, IconButton, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
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

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Render a table cell with formatting based on its type
  const renderCell = (value, type) => {
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
                <Td>{renderCell(row.date, "date")}</Td>
                <Td>{row.stockSymbol}</Td>
                <Td>{row.transactionType}</Td>
                <Td isNumeric>{row.quantity}</Td>
                <Td isNumeric>{renderCell(row.pricePerShare, "currency")}</Td>
                <Td isNumeric>{renderCell(row.totalAmount, "currency")}</Td>
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
