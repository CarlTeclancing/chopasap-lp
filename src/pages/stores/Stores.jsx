import React from 'react';
import image from '../../assets/image.png';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';

function Stores() {
  return (
    <DashboardLayout>
      <div className="container-dashaord">
            <h3>Store Management</h3>
            <table className='table'>
              <tr>
                <th>Store Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>City</th>
                <th>Address</th>
                <th>Country</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr className='row-1'>
                <td className='c'><img src={image}/>Chop Asap</td>
                <td>app@chopasap.com</td>
                <td>672765292</td>
                <td>Yaounde</td>
                <td>Yaounde Cameroon</td>
                <td>Cameroon</td>
                <td><span className="active">Verified</span></td>
                <td><Link to='/dashboard/stores/store-id='>View More</Link></td>
              </tr>
              <tr className='row-2'>
                <td className='c'><img src={image}/>Correct Chop</td>
                <td>app@chopasap.com</td>
                <td>672765292</td>
                <td>Yaounde</td>
                <td>Yaounde Cameroon</td>
                <td>Cameroon</td>
                <td><span className="active">Verified</span></td>
                <td><Link to='/dashboard/stores/store-id='>View More</Link></td>
              </tr>
            </table>

          </div>
    </DashboardLayout>
  )
}

export default Stores