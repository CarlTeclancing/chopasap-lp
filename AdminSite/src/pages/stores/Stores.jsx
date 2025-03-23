import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider'; // ✅ import the context
import Table from '../../components/TableComponent';

const Stores = () => {
  const { stores } = useContext(StoreContext); // ✅ use the context, not the provider

  return (
    <div className="container-dashboard">
      <div className="orders-dashboard">
        <Table data={stores} />
      </div>
      
    </div>
  );
};

export default Stores;
