import React from 'react'

export default function ContactItem({contactItem}) {
  return (
    <div className='contactCard'>
    <p> <span className='bold'> Firstname:</span> {contactItem.firstname}</p>
    <p> <span className='bold'>Lastname:</span> {contactItem.lastname}</p>
    <p> <span className='bold'>Email:</span> {contactItem.mail}</p>
    <p> <span className='bold'>Telefon:</span> {contactItem.phone}</p>
    <p> <span className='bold'>Firma:</span> {contactItem.firma}</p> 
    <p> <span className='bold'>Stilling:</span> {contactItem.stilling}</p>
    </div>
    
  )
}
