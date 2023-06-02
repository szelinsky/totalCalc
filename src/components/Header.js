import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { BiUser, BiMoon } from "react-icons/bi";

import { SunIcon } from '@chakra-ui/icons';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py={1}>
      <Flex alignItems="center">
        <Heading as="h1" size="md">
          Totals Calc
        </Heading>
        <Spacer />
        {/* <Button variant='ghost'>
          <Icon as={BiUser} fontSize='18px' />
        </Button> */}
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? <Icon as={BiMoon} fontSize='18px' /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
