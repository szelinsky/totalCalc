import ListRouteItem from './ListRouteItem';

const ListRoute = ({ userList, remove }) => (
  <>
    {userList &&
      userList.reverse().map((item, index) => (
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
      ))}
  </>
);

export default ListRoute;
