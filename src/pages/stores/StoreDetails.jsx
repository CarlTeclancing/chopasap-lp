
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import resto from '../../assets/resto.png'
import { useState } from 'react';
import image from '../../assets/image.png';
import { Link } from 'react-router-dom';
import Wallet from '../../assets/wallet.svg';
import ArrowLeft from '../../assets/arrow-right.png';

function StoreDetails() {

    const [activeTab, setActiveTab] = useState(1);


  return (
    <div className='dashboard-container'>
        <SideBar />

        <div className="main-section">
            <TopNav PageTitle={'Store Details'} />
            <div className="container-dashaord">
                {/* attarch variableto display store name in the place of chop asap */}
                <h3>Store | Chop asap</h3>
                <div className="section">
                    <div className="row-main">
                        <img src={resto} className='shop-img' alt="" />
                        <div className="row-l">
                            <h4>Chop Asap</h4>
                            <p className='text-left'>This is one of the best and oldest agency in Cameroon focusing on traveling from Yaoundé to bafoussam, yaounde to bamenda, bamenda to Yaoundé and all travels around the NWE, West Routs</p>
                            <div className="flex-row-a">
                                <h6>Ballance <span className="active-a">2000</span></h6>
                                <h6>Address <span className="active-a">Yaounde</span></h6>
                            </div>

                            <div className="flex-row-a">
                                <span className="active-a">133 Orders</span>
                                <span className="active-a">456k Revenue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tabs">
                <button
                    onClick={()=>setActiveTab(1)} 
                    className={activeTab == 1?'tab-el-active':'tab-el'}>Products</button>
                <button
                    onClick={()=>setActiveTab(2)} 
                    className={activeTab == 2?'tab-el-active':'tab-el'}>Orders</button>
                <button
                    onClick={()=>setActiveTab(3)} 
                    className={activeTab == 3?'tab-el-active':'tab-el'}>wallet & Transactions</button>
                <button
                    onClick={()=>setActiveTab(4)} 
                    className={activeTab == 4?'tab-el-active':'tab-el'}>User Account</button>
            </div>



            <div className={activeTab==1?"products-container":"none"}>
                <div className="product">
                    <img src={resto} className='product-img' alt="" />
                    <div className="product-details">
                        <h4>Product Name</h4>
                        <p>Product Description</p>
                        <h6>Price: 2000</h6>
                    </div> 
                </div>
                </div>

                <div className={activeTab ==2?"orders-container":"none"}>

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
                        <td>Manual Delivered</td>
                    </tr>
                    </table>    
                </div>

                <div className={activeTab ==4?"user-container":"none"}>

                    <table className='table'>
                    <tr>
                        <th>User Name</th>
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
                    </table>    
                </div>

                <div className={activeTab ==3?"row-fluid":"none"}>
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

export default StoreDetails