import React, {  useContext } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const ContactsContext = React.createContext()
 
export function useContacts() {
  return useContext(ContactsContext)
}


export  function ContactProvider({children}) {
  const [contacts,setContact] = useLocalStorage("contacts",[])
  function createContact(id,name){
    setContact(prevContacts=>{
      return[...prevContacts,{id,name}]
    })
  }
  return (
    <ContactsContext.Provider value={{contacts,createContact}}>
      {children}
    </ContactsContext.Provider>
  )
}