import { useState } from 'react';
import { Flex, Spacer, Box, Button } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Results = ({ zoneTotals }) => {
  const [isCopied, setIsCopied] = useState(false);

  const date = new Date().toLocaleDateString('en-US');
  const totalSum = zoneTotals.reduce(
    (acc, item) => acc + item.total * item.orders,
    0
  );

  const calculationItems = zoneTotals.map((zoneItem) => {
    return (
      'Regular ' +
      zoneItem.orders +
      'x' +
      zoneItem.total +
      '=$' +
      zoneItem.orders * zoneItem.total +
      '\n'
    );
  });

  const resultsSnipet =
    date + '\n' + `${calculationItems.join('')}total: $${totalSum}`;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <Box borderRadius="lg" bg='gray.800' p={4}>
      <Flex>
        <pre style={{ color: '#BEE3F8', fontSize: '14px' }}>{resultsSnipet}</pre>
        <Spacer />
        <CopyToClipboard text={resultsSnipet} onCopy={onCopyText}>
        <Button colorScheme='teal' size='xs'>{isCopied ? 'Copied!' : 'Copy'}</Button>
        </CopyToClipboard>
      </Flex>
    </Box>
  );
};

export default Results;
