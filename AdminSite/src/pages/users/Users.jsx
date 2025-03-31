
import { useContext } from 'react';
import image from '../../assets/image.png'
import DashboardLayout from '../../components/DashboardLayout';
import Table from '../../components/TableComponent';
import { AppContext } from '../../context/AppContextProvider';

function Users() {
  const {users} = useContext(AppContext)
  return (
    
      <div className="container-dashaord">
            <h3>User Management</h3>

            <Table />
            <table className='table'>
              <tr>
                <th>first name</th>
                <th>last name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Stores</th>
                <th>Orders</th>
                
                <th>Balance</th>
                <th>Status</th>
              </tr>
              {
                users.map(item=>(
              <tr key={item.id} className='row-1'>
              
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.stores?.length}</td>
                <td>{item.storeOrders?.length}</td>
                
                <td>{item.wallet.balance} cfa</td>
                <td><span className="active">Not Verified</span></td>
              </tr>
                ))

              }
          
            </table>

          </div>


    
  )
}

export default Users