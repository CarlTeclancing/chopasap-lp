import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContextProvider';

function Orders() {
    const { storeOrders } = useContext(AppContext); // ✅ use the context, not the provider
  
    // if (!Array.isArray(storeOrders)) {
    //   return null
    // }
  return (
    
              <div className="orders-container">
              <h3 className="h3">orders</h3>

            <table className='table'>
            <thead>

            
            <tr>
                <th>Buyer ID</th>
                <th>Status</th>
                <th>Store</th>
                <th>City</th>
                <th>Geo Point</th>
                <th>Street</th>
                <th>Fees</th>
            </tr>
            </thead>
            <tbody>
            {
                storeOrders.map(item=>(
              <tr key={item.id} className='row-1'>
              
                <td>{item.buyerId}</td>
                <td>{item.status}</td>
                <td>{item.storeId}</td>
                <td>{item.deliver?.address.city} , {item.deliver?.address.region}</td>
                <td>{item.deliver?.address.geoPoint}</td>
                <td>{item.deliver?.address.street}</td>
                <td>{item.deliver?.fee}</td>
                
              </tr>
                ))

              }
              
            </tbody>
            </table>

          </div>


    
  )
}


export default Orders;