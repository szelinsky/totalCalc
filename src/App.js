import { useState, useEffect } from 'react';
import { data } from './data';
import { Box, Container, useColorModeValue, useToast } from '@chakra-ui/react';
import Header from './components/Header';
import Search from './components/Search';
import Total from './components/Total';
import ListRoute from './components/ListRoute';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [routeList, setRouteList] = useState([]);
  const [isError, setIsError] = useState(false);

  const toast  = useToast();
  const bg = useColorModeValue('gray.50', 'gray.900');

  const findLocation = (inputZipcode) => {
    const foundLocation = data
      .flatMap((zone) => zone.zones)
      .find((location) => location.zipcode === inputZipcode);

    if (foundLocation) {
      const foundZone = data.find((zone) => zone.zones.includes(foundLocation));
      setRouteList([
        ...routeList,
        {
          id: Math.floor(Math.random() * 9000) + 1000,
          name: foundZone.name,
          price: foundZone.price,
          ...foundLocation
        }
      ]);

      setInputValue('');
    } else {
      setIsError(true);
    }
  };

  const removeItem = (id) => {
    setRouteList([...routeList.filter((item) => item.id !== id)]);
  };

  useEffect(() => {
    inputValue.length === 5 ? findLocation(inputValue) : setIsError(false);
    if (isError && inputValue.length === 5) {
      toast({
        title: 'Zipcode not found.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [inputValue, isError, toast]);

  const handleChange = (event) => {
    const { value, maxLength } = event.target;
    const zipcode = value.slice(0, maxLength);
    setInputValue(zipcode);
  };

  const totalAmount = routeList.reduce((total, zone) => total + zone.price, 0);


  return (
    <>
      <Box
        as="header"
        position="fixed"
        top="0"
        zIndex={10}
        w="100%"
        backgroundColor={bg}
        overflow="hidden"
      >
        <Container maxW="md">
          <Header />
          <Search onChange={handleChange} userEntry={inputValue} />
        </Container>
      </Box>
      <Container as="main" maxW="md" mt="105px" mb="100px">
        <ListRoute userList={routeList} remove={removeItem} />
      </Container>
      <Box position="fixed" bottom="0" w="100%" backgroundColor={bg}>
        <Container maxW="md">
          <Total ordersQuantity={routeList.length} amount={totalAmount} />
        </Container>
      </Box>
    </>
  );
}

export default App;
