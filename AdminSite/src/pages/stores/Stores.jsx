import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider'; // ✅ import the context
import Table from '../../components/TableComponent';
import { AppContext } from '../../context/AppContextProvider';
const Stores = () => {
  const { stores } = useContext(AppContext); // ✅ use the context, not the provider

  if (!Array.isArray(stores)) {
    return null
  }
  return (
    <div className="container-dashboard">
      <div className="orders-dashboard">
        <Table data={stores.map(item=>({
            id: item.id ,
            storeName: item.name,
            logo: item.image,
            city: item.address.city,
            address: item.address.street,
            country: item.address.country,
            status: item.verified ? "Verified" : "Not Verified"
      }))} />
      </div>
      
    </div>
  );
};

export default Stores;
