import React, { useEffect, useRef, useState } from 'react'
import { getCode } from '../../firebase/functions'
import { onAuthChange, siginWithEmail } from '../../firebase/auth'
import { Router, useNavigate } from 'react-router-dom'

function AuthPage() {

  const [email, setEmail] = useState()
  const [code, setCode] = useState()
  const id = useRef()
  const nav = useNavigate()
  useEffect(()=>{
    onAuthChange((user)=>{
      if (user) {
       nav("/")
      }
    })
  },[])
  return (<>
    <form style={{display:"flex", flexDirection:"column" ,gap:19}} onSubmit={(e)=>{
      e.preventDefault()
      console.log(email);
      
      getCode(email).then(res=>{
        id.current = res
      }).catch(e=>{
        console.log(e);
        
      })
    }}>
        <div>
            <label>Email</label>
            <input value={email} type='email' onChange={(e)=>{
              setEmail(e.currentTarget.value)
            }} />
        </div>
      
        <div>
           <button type="submit">Get Code</button>
        </div>
    </form>
    <form style={{display:"flex", flexDirection:"column" ,gap:19}} onSubmit={(e)=>{
      e.preventDefault()
      console.log(id.current);
      
      siginWithEmail(email, id.current, code).then(res=>{
      
      }).catch(e=>{
        console.log(e);
        
      })
    }}>
      
        <div>
            <label value={email}  >Code</label>
            <input  onChange={(e)=>{
              setCode(e.currentTarget.value)
            }} />
        </div>
        <div>
           <button type="submit">Login</button>
        </div>
    </form>
  </>
  )
}

export default AuthPage