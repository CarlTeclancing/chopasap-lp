
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import Wallet from '../../assets/wallet.svg';
import ArrowLeft from '../../assets/arrow-right.png';
import image from '../../assets/image.png';

function Transactions() {
  return (
    <div className='dashboard-container'>
        <SideBar active={2} />

        <div className="main-section">
            <TopNav PageTitle={'Dashboard'} />
            <div className="row-fluid">
              <div className="collumn">


                     <div className="wallet">
                         <div className="row-200">
                             <span className='flex-center'><img src={Wallet} alt="" /> Total Balance</span>
                         </div>

                         <div className="row-200">
                             <h3>0.00FCFA</h3>
                             <img src={ArrowLeft} alt="" />
                         </div>
                        <button className='secondary-btn'>Edit Balance</button>
                         
                     </div>


                     <div className="wallet">
                         <div className="row-200">
                             <span className='flex-center'><img src={Wallet} alt="" /> User Balance</span>
                         </div>

                         <div className="row-200">
                             <h3>0.00FCFA</h3>
                             <img src={ArrowLeft} alt="" />
                         </div>
                        <button className='secondary-btn'>Edit Balance</button>
                         
                     </div>


                     <div className="wallet">
                         <div className="row-200">
                             <span className='flex-center'><img src={Wallet} alt="" /> Profit Balance</span>
                         </div>

                         <div className="row-200">
                             <h3>0.00FCFA</h3>
                             <img src={ArrowLeft} alt="" />
                         </div>
                        <button className='secondary-btn'>Edit Balance</button>
                         
                     </div>

              </div>
                     <h3 className='h3'>Recent Transactions</h3>

                     <table className='table'>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Trasaction Type</th>
                        <th>Reference</th>
                    </tr>
                    <tr className='row-1'>
                        <td className='c'><img src={image}/>808130482094</td>
                        <td>success</td>
                        <td>2000</td>
                        <td>Withdrawal</td>
                        <td>237 672765292 </td>
                    </tr>
                    </table> 
                     

                 </div>

        </div>
    </div>
  )
}

export default Transactions