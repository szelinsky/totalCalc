import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import { FiMapPin, FiX } from 'react-icons/fi';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const Search = ({ onChange, userEntry, error }) => (
  <Box mb={4} px={2}>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={FiMapPin} fontSize="16px" />
      </InputLeftElement>
      <Input
        focusBorderColor={error && 'red.500'}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={userEntry}
        onChange={onChange}
        placeholder="enter zipcode"
        maxLength={5}
        variant="filled"
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
      />
      <InputRightElement>
        {error && <InfoOutlineIcon color="red.500" />}
      </InputRightElement>
    </InputGroup>
  </Box>
);

export default Search;
