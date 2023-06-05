import { useRef } from 'react';
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement
  // InputRightElement
} from '@chakra-ui/react';
import { FiMapPin, FiX } from 'react-icons/fi';
// import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const Search = ({ onChange, userEntry }) => (
  <Box mb={4} px={2}>
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={FiMapPin} fontSize="16px" />
      </InputLeftElement>
      <Input
        type="text"
        inputMode='numeric'
        pattern='[0-9]*'
        value={userEntry}
        onChange={onChange}
        placeholder="enter zipcode"
        maxLength={5}
        variant="filled"
      />
      {/* <InputRightElement>
          <CheckIcon color="green.500" />
          <Icon as={FiX} color='red.500' />
        </InputRightElement> */}
    </InputGroup>
  </Box>
);

export default Search;
