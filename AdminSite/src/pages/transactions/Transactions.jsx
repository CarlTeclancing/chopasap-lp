
import Wallet from '../../assets/wallet.svg';
import ArrowLeft from '../../assets/arrow-right.png';
import image from '../../assets/image.png';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContextProvider';
import TableWithNoLink from '../../components/NoLinkTableComponent';

function Transactions() {
        const { transactions } = useContext(AppContext); // ✅ use the context, not the provider
  return (
    
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

                     {/* <table className='table'>
                    <tr>
                        <th>Ref</th>
                        <th>Amount</th>
                        <th>USer</th>
                        <th>Profit</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Type</th>
                    </tr>
                    {
                        transactions.map(item=>(
                            <tr>
                                <td><img src={image}/></td>
                                <td>{item.amount}</td>
                                <td>{item.payer}</td>
                                <td>{item.profit}</td>
                                <td>{item.status}</td>
                                <td>{item.time}</td>
                                <td>{item.type}</td>
                            </tr>
                        ))
                    }


 
                    </table>  */}

                    <TableWithNoLink data={transactions} />
                     

                 </div>

    
  )
}

export default Transactions