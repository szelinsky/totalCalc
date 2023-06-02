import React from 'react';
import {
  Box,
  Tag,
  Text,
  Badge,
  Spacer,
  Card,
  CardBody,
  CloseButton
} from '@chakra-ui/react';

const ListRouteItem = ({ city, dir, zone, price, index, remove, _id }) => {
  return (
    <Card mb={2}>
      <CardBody>
        <Box display="flex" alignItems="center">
          <Tag color="blue.500" mr="2">
            {index + 1}
          </Tag>
          <Text mr="3">
            {city}
            {dir ? `, ${dir}` : ''}
          </Text>
          <Badge variant="outline" colorScheme="blue">
            {zone}
          </Badge>
          <Spacer />
          <Text fontWeight="bold" color="green.500" mr={5}>
            + ${price}
          </Text>
          <CloseButton size="sm" onClick={() => remove(_id)}/>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ListRouteItem;
