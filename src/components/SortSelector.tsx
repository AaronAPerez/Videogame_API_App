import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiSolidChevronsDown } from "react-icons/bi";
import useGameQueryStore from "../store";


const SortSelector = () => {

    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

   const sortOrder =  useGameQueryStore(s => s.gameQuery.sortOrder);
   const setSortOrder  = useGameQueryStore( s => s.setSortOrder);

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder )

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BiSolidChevronsDown />}>
          Order by : {currentSortOrder?.label || 'Relevence'}
        </MenuButton>
        <MenuList>
          {sortOrders.map(order => <MenuItem onClick={()=>setSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
