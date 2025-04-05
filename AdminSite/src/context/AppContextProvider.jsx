import React, { createContext, useContext, useEffect, useState } from 'react'
import { demoProducts, demoStoreOrders, demoStores, demoUsers } from '../constantsDemo'
import { onAuthChange } from '../../firebase/auth'
import { listAll } from '../../firebase/crud'
import { fireStoreCollections } from 'chop_asap_types'
import { UserContext } from './userContextProvider'
import { getPreviewImageLink } from '../../firebase/storage'

 export const AppContext = createContext()

function AppContextProvider({children}) {
    const [stores, setStores] = useState([])
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [transactions, setTransactions] = useState([])
    const [storeOrders, setstoreOrders] = useState([])
    const {user} = useContext(UserContext)

    console.log({products,stores, storeOrders, users});

   function removeItemWithId(target, id){
        if (target === fireStoreCollections.StoreCollection) {
            setStores(prev=>[...prev].filter(item=>item.id!==id))
        }   
        if (target === fireStoreCollections.ProductCollection) {
            setProducts(prev=>[...prev].filter(item=>item.id!==id))
        }   
    }

    useEffect(()=>{
      if(user) {
        listAll(fireStoreCollections.StoreCollection).then(async (res)=>{
          
            for(let key in res) {
                res[Number(key)].image = await getPreviewImageLink(res[Number(key)].image)
            }
            setStores(res)
        })
        listAll(fireStoreCollections.ProductCollection).then( async res=>{
            for(let key in res) {
                res[Number(key)].image = await getPreviewImageLink(res[Number(key)].image)
            }
            setProducts(res)
        })
        listAll(fireStoreCollections.StoreOrdersCollection).then(res=>{
            setstoreOrders(res)
        })
        listAll(fireStoreCollections.TransactionCollection).then(res=>{
            setTransactions(res)
        })
        listAll(fireStoreCollections.UserPrivateCollection).then(res=>{
            let usersRes = [...res]
            console.log({private:res});
            
            listAll(fireStoreCollections.UserPublicCollection).then(res=>{
                console.log({public:res});
               usersRes = usersRes.map((item)=>{
               
                return {...item, ...res.find(pub=>pub.id === item.id )}
               })

               listAll(fireStoreCollections.WalletCollection).then(res=>{
           
                usersRes = usersRes.map((item)=>{
                    return {...item, wallet:res.find(wallet=>wallet.id === item.id)}
                   })

                   setUsers(usersRes)
            })
               
            })

        })
      }   
    },[user])

  return (
   <AppContext.Provider value={{stores, transactions, products, users, storeOrders, removeItemWithId}}>
        {children}
   </AppContext.Provider>
  )
}

export default AppContextProvider