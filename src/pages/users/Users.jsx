
import image from '../../assets/image.png'
import DashboardLayout from '../../components/DashboardLayout';

function Users() {
  return (
    
      <div className="container-dashaord">
            <h3>User Management</h3>
            <table className='table'>
              <tr>
                <th>Store Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>City</th>
                <th>Address</th>
                <th>Country</th>
                <th>Balance</th>
                <th>Status</th>
              </tr>
              <tr className='row-1'>
                <td className='c'><img src={image}/>Chop Asap</td>
                <td>app@chopasap.com</td>
                <td>672765292</td>
                <td>Yaounde</td>
                <td>Yaounde Cameroon</td>
                <td>Cameroon</td>
                <td>2300 cfa</td>
                <td><span className="active">Verified</span></td>
              </tr>
              <tr className='row-2'>
                <td className='c'><img src={image}/>Correct Chop</td>
                <td>app@chopasap.com</td>
                <td>672765292</td>
                <td>Yaounde</td>
                <td>Yaounde Cameroon</td>
                <td>Cameroon</td>
                <td>2300 cfa</td>
                <td><span className="active">Verified</span></td>
              </tr>
            </table>

          </div>


    
  )
}

export default Users