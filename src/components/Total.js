import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Button
} from '@chakra-ui/react';

function Total({ ordersQuantity, amount }) {
  return (
    <Box overflow="hidden" p={4}>
      <StatGroup>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>${amount}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Orders</StatLabel>
          <StatNumber>{ordersQuantity}</StatNumber>
        </Stat>
        {/* <Stat pt={4}>
          <Button size="sm">Copy results</Button>
        </Stat> */}
      </StatGroup>
    </Box>
  );
}

export default Total;
