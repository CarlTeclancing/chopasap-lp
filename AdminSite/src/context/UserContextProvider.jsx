import React, {useState, createContext, useEffect} from 'react';
import { onAuthChange } from '../../firebase/auth';

export const UserContext = createContext();

const UserContextProvider =( {children} )=> {

  const [user, setUser ] = useState(null);
  
  useEffect(()=>{
    onAuthChange((user)=>{
      setUser(user)
    })
  },[])
  return (

    <UserContext.Provider value={{user, setUser}}>
   
      {children}
    </UserContext.Provider>
    
  )
}

export default UserContextProvider;