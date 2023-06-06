import { useState, useEffect } from 'react';
import { data } from './data';
import {
  Box,
  Container,
  useColorModeValue,
  useToast,
  IconButton
} from '@chakra-ui/react';
import Header from './components/Header';
import Search from './components/Search';
import Total from './components/Total';
import ListRoute from './components/ListRoute';

import { CopyIcon } from '@chakra-ui/icons';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [routeList, setRouteList] = useState([]);
  const [zoneTotals, setZoneTotals] = useState([]);
  const [isError, setIsError] = useState(false);

  const toast = useToast();
  const bg = useColorModeValue('gray.50', 'gray.900');

  const getResults = () => {
    const zoneTotalsData = [];
    routeList.forEach((item) => {
      const zoneIndex = zoneTotalsData.findIndex(
        (zoneItem) => zoneItem.name === item.name
      );

      if (zoneIndex !== -1) {
        zoneTotalsData[zoneIndex].orders += 1;
        zoneTotalsData[zoneIndex].total = item.price;
      } else {
        zoneTotalsData.push({
          name: item.name,
          orders: 1,
          total: item.price
        });
      }
    });
    setZoneTotals(zoneTotalsData);
    // console.log(zoneTotalsData)
  };

  const findLocation = (inputZipcode) => {
    const foundLocation = data
      .flatMap((zone) => zone.zones)
      .find((location) => location.zipcode === inputZipcode);

    if (foundLocation) {
      const foundZone = data.find((zone) => zone.zones.includes(foundLocation));
      setRouteList([
        {
          id: Math.floor(Math.random() * 9000) + 1000,
          name: foundZone.name,
          price: foundZone.price,
          ...foundLocation
        },
        ...routeList
      ]);

      setInputValue('');
    } else {
      setIsError(true);
    }
  };

  const removeItem = (id) => {
    setRouteList([...routeList.filter((item) => item.id !== id)]);
  };

  const calculationItems = zoneTotals.map((zoneItem) => (
    <li key={zoneItem.name}>
      {zoneItem.name} ({zoneItem.orders} orders * {zoneItem.total} =
      {zoneItem.orders * zoneItem.total})
    </li>
  ));

  useEffect(() => {
    inputValue.length === 5 ? findLocation(inputValue) : setIsError(false);
    if (isError && inputValue.length === 5) {
      toast({
        description: 'Zipcode not found.',
        status: 'error',
        duration: 3000,
        position: 'bottom'
        // containerStyle: {
        //   marginTop: '300px',
        //   background: 'green.500'
        // }
      });
    }
  }, [inputValue, isError, toast, routeList]);

  const handleChange = (event) => {
    const { value, maxLength } = event.target;
    const zipcode = value.slice(0, maxLength);
    setInputValue(zipcode);
  };

  const totalAmount = routeList.reduce((total, zone) => total + zone.price, 0);

  console.log(zoneTotals);

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
          <Search
            onChange={handleChange}
            userEntry={inputValue}
            error={isError}
          />
        </Container>
      </Box>
      <Container as="main" maxW="md" mt="105px" mb="100px">
        <ListRoute userList={routeList} remove={removeItem} />
      </Container>
      <Box position="fixed" bottom="0" w="100%" backgroundColor={bg} as="footer">
        <Container maxW="md">
          <Total ordersQuantity={routeList.length} amount={totalAmount} />
        </Container>
      </Box>
      {/* <IconButton
        aria-label="Search database"
        icon={<CopyIcon />}
        onClick={getResults}
      />

      {zoneTotals && (
        <div>
          <ul>{calculationItems}</ul>
        </div>
      )} */}
    </>
  );
}

export default App;
