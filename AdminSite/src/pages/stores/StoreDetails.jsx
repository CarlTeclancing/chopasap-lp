import resto from '../../assets/resto.png'
import { useContext, useEffect, useState } from 'react';
import image from '../../assets/image.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Wallet from '../../assets/wallet.svg';
import ArrowLeft from '../../assets/arrow-right.png';
import { AppContext } from '../../context/AppContextProvider';
import { deleteDocument } from '../../../firebase/crud';
import { fireStoreCollections } from 'chop_asap_types';


function StoreDetails( { id } ) {

    const [activeTab, setActiveTab] = useState(1);
    const [images, setImages] = useState([]);
      const { users, products, storeOrders, stores, removeItemWithId} = useContext(AppContext);
      if (!Array.isArray(stores)) {
        return null
      }
      const nav = useNavigate()
      const {id} = useParams()
      const store = stores.find(item=>item.id === id)
      const owner = users.find(item=>item.id === store.owner)
      const storeProductsList = products.filter(item=> store.products?.some(id=>item.id === id))
      const storeOrdersList = storeOrders.filter(item=> store.orders?.some(id=>item.id === id))
      
   
      const deleteStore = ()=>{
        const confirmed  =  confirm("Are you sure you want to delet this store??")
      confirmed && deleteDocument(fireStoreCollections.StoreCollection, id).then(()=>{
          nav("/stores")
          alert("Deleted")
      }).catch(e=>{
          console.log(e);  
          alert("Unable to delete")
      })
      }

      useEffect(()=>{

      },[])
      
      // Do same to get products, orders, owner's wallet, private and public details 
      if (!store || !owner) {
        return null
      }
    //   console.log(store);
      
  return (
    

    <>
    
        <div className="container-dashaord">
                {/* attarch variableto display store name in the place of chop asap */}
                <h3>Store | {store.name}</h3>
                <div style={{display:'flex', gap:10}}>

                <button>Edit</button>
                <button onClick={deleteStore} >Delete</button>
                <button>Mark as public</button>
                </div>
              
                <div className="section">
                    <div className="row-main">
                        <img src={store.image} className='shop-img' alt="" style={{aspectRatio: 1}} />
                        <div className="row-l">
                            <h4>{store.name}</h4>
                            <p className='text-left'>{store.description}</p>
                            <div className="flex-row-a">
                                <h6>Address <span className="active-a">{store.address.city}</span></h6>
                                <h6>Opens at <span className="active-a">{store.openHour}</span></h6>
                                <h6>closeHour at <span className="active-a">{store.closeHour}</span></h6>
                            </div>

                            <div className="flex-row-a">
                                <span className="active-a">{store.orders?.length} Orders</span>
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
                    className={activeTab == 3?'tab-el-active':'tab-el'}>Transactions</button>
                <button
                    onClick={()=>setActiveTab(4)} 
                    className={activeTab == 4?'tab-el-active':'tab-el'}>Accessories</button>
                <button
                    onClick={()=>setActiveTab(5)} 
                    className={activeTab == 5?'tab-el-active':'tab-el'}>Owner Account</button>
            </div>



            <div className={activeTab==1?"products-container":"none"}>
                {
                    storeProductsList.map((item)=>{
                        return  <div className="product">
                                <img src={item.image} className='product-img' alt="" />
                                <div className="product-details">
                                    <h4>{item.name}</h4>
                                </div> 
                            </div>
                    })
                }
                </div>

                <div className={activeTab ==2?"orders-container":"none"}>

                    <table className='table'>
                    <tr>
                        <th>Order ID</th>
                        <th>No Product</th>
                        <th>User Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Order Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        storeOrdersList.map(item=>
                       {
                        const buyer = users.find(user=>user.id === item.buyerId)
                        
                        return(

                    <tr className='row-1'>
                        <td className='c'>{item.id}</td>
                        <td>{item.orders.length}</td>
                        <td>{buyer.firstName}</td>
                        <td>{buyer.phone}</td>
                        <td>{buyer.email}</td>
                        <td><span className="active">{item.delivery ? "Delivery" : "Reservation"}</span></td>
                        <td>{item.status}</td>
                        {/* add function to change pending order to deliverd done manualy */}
                        <td>Manual Delivered</td>
                    </tr>
                        )}
                    )
                    }
                    </table>    
                </div>

                <div className={activeTab ==5?"user-container":"none"}>

                    <table className='table'>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr className='row-1'>
                    <td>{owner.firstName}</td>
                    <td>{owner.lastName}</td>
                        <td>{owner.email}</td>
                        <td>{owner.phone}</td>
                        <td><span className="active">Verified</span></td>
                        <td><Link to={`/dashboard/users/${owner.id}`}>View More</Link></td>
                    </tr>
                    </table>    
                </div>

                <div className={activeTab ==3?"row-fluid":"none"}>
                     <div className="wallet">
                         <div className="row-200">
                             <span className='flex-center'><img src={Wallet} alt="" /> User Balance</span>
                         </div>

                         <div className="row-200">
                             <h3>{owner.wallet.balance}FCFA</h3>
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
    </>

    
  )
}

export default StoreDetails