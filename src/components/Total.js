import { Flex, Spacer, Box, Text, Button } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

function Total({ ordersQuantity, amount, getResults, totals, onOpen }) {
  return (
    <Box overflow="hidden" p={3}>
      <Flex align="center">
        <Box mr={10}>
          <Text fontSize="md" as="span" mr={2}>
            Total:
          </Text>
          <Text as="span" fontSize="xl">
            ${amount}
          </Text>
        </Box>

        <Box>
          <Text fontSize="md" as="span" mr={2}>
            Orders:
          </Text>
          <Text as="span" fontSize="xl">
            {ordersQuantity}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Button
            // aria-label="Search database"
            isDisabled={false}
            size="sm"
            // colorScheme='blue'
            leftIcon={<CopyIcon />}
            onClick={getResults}
          >
            Copy
          </Button>
        </Box>
        {/* <Stat pt={4}>
          <Button size="sm">Copy results</Button>
        </Stat> */}
      </Flex>
    </Box>
  );
}

export default Total;
