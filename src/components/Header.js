import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  useColorMode,
  Icon,
  Link
} from '@chakra-ui/react';
import { BiCoffeeTogo, BiMoon } from 'react-icons/bi';
import { SunIcon } from '@chakra-ui/icons';

// https://www.buymeacoffee.com/seregaze

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py={1}>
      <Flex alignItems="center">
        <Heading as="h1" size="md">
          Totals Calc
        </Heading>
        <Spacer />
        <Link href="https://www.buymeacoffee.com/seregaze" isExternal>
          <Button as='a' variant="ghost">
            <Icon as={BiCoffeeTogo} fontSize="18px" />
          </Button>
        </Link>
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? (
            <Icon as={BiMoon} fontSize="18px" />
          ) : (
            <SunIcon />
          )}
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
