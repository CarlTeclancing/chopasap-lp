
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';

function Orders() {
  return (
    <div className='dashboard-container'>
        <SideBar active={2} />

        <div className="main-section">
            <TopNav PageTitle={'Dashboard'} />

            
          <div className="orders-container">
            <h3 className="h3">orders</h3>

          <table className='table'>
          <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>User Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Order Type</th>
              <th>Status</th>
              <th>Action</th>
          </tr>
          <tr className='row-1'>
              <td className='c'>97593475779</td>
              <td>Achu with yello soup</td>
              <td>1500</td>
              <td>Yuven Carlson</td>
              <td>672765292</td>
              <td>info@crestlancing.com</td>
              <td><span className="active">Delivery</span></td>
              <td>Pending</td>
              {/* add function to change pending order to deliverd done manualy */}
              <td> <button className='secondary-btn-action'>Mark Delivered</button></td>
          </tr>
          </table>    
          </div>

        </div>
    </div>
  )
}

export default Orders