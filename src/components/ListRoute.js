import { Box, Heading } from '@chakra-ui/react';
import ListRouteItem from './ListRouteItem';
import { ReactComponent as TotalsLogo } from '../logo.svg';

const ListRoute = ({ userList, remove }) => (
  <>
    {userList.length ? (
      userList.map((item, index) => (
        <ListRouteItem
          key={item.id}
          city={item.city}
          dir={item.dir}
          zone={item.name}
          price={item.price}
          zipcode={item.zipcode}
          index={index}
          remove={remove}
          _id={item.id}
        />
      ))
    ) : (
      <Box pt={{ base: 32, md: 0}} textAlign="center">
        <Box display="flex" justifyContent="center">
          <TotalsLogo width="30%" fill="#2D3748" />
        </Box>

        <Heading size={{ base: 'md', md: ''}} color="gray.700">
          No data yet
        </Heading>
      </Box>
    )}
  </>
);

export default ListRoute;
