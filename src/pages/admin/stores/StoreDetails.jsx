import React from 'react';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import resto from '../../../assets/resto.png'

function StoreDetails() {
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
                        <img src={resto} alt="" />
                        <div className="row-l">
                            <h4>Chop Asap</h4>
                            <p>This is one of the best and oldest agency in Cameroon focusing on traveling from Yaoundé to bafoussam, yaounde to bamenda, bamenda to Yaoundé and all travels around the NWE, West Routs</p>
                            <h6>Ballance <span className="active">2000</span></h6>
                            <h6>Address <span className="active">Yaounde</span></h6>
                            <div className="col flex-column">
                                <div className="active">133 Orders</div>
                                <div className="active">456k Revenue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default StoreDetails