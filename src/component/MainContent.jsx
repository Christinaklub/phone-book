import { useState } from "react";
import {contactProps} from "../component/contactItems";
import { ContactForm } from "../entitise/contactFrom";
import ReactModal from "react-modal";
import  Button  from "../component/Button";
import ContactItem from "./ContactItem";

export default function MainContent() {

const [name, setName] = useState("")
const [lastname, setLastname] = useState("")
const [number, setNumber] = useState("")
const [mail, setMail] = useState("")
const [firma, setFirma] = useState("")
const [stilling, setStilling] = useState("")



const contactDummyData = [
  new ContactForm('Christina', 'Klub', 'dfghj@gmail.com', 34463323, 'Student'),
  ];

  const [contact, setContact] = useState(contactDummyData);

    const handleContactClick = () => {
     const newContact = new ContactForm(name, lastname, number, mail, firma, stilling)
      setContact([...contact, newContact])
      handleCloseModal()
      setName('');
      setLastname ('');
      setNumber ('');
      setMail ('');
      setFirma('');
      setStilling('');
      setIsOpen(false)
    }


    const handleNameChange = (e) => {
      setName(e.target.value)
    }
    const handleLastnameChange = (e) => {
      setLastname(e.target.value)
    }
    const handleNumberChange = (e) => {
      setNumber(e.target.value)
    }
    const handleMailChange = (e) => {
      setMail(e.target.value)
    }
    const handleFirmaChange = (e) => {
      setFirma(e.target.value)
    }
    const handleStillingChange = (e) => {
      setStilling(e.target.value)
    }


    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal (){
      setIsOpen(true)
    }
    
    function handleCloseModal (){
      setIsOpen(false)
    }

    
    return (
      <main>
        <Button buttonText={"Create Contact"} onClick={handleOpenModal}></Button>
        <div className="list">
        <ReactModal isOpen={isOpen}>
          <div className="container">
            <p>Firstname</p>
            <input name="Firstname" placeholder="Name" value={name} onChange={handleNameChange} />
            <p>Lastname</p>
            <input name="Lastname" value={lastname} onChange={handleLastnameChange}/>
            <p>Phone Number</p>
            <input type="number" value={number} onChange={handleNumberChange}/>
            <p>Mail</p>
            <input name="Mail" value={mail} onChange={handleMailChange} />
            <p>Firma</p>
            <input name="Frima" value={firma} onChange={handleFirmaChange} />
            <p>Stilling</p>
            <input name="Stilling" value={stilling} onChange={handleStillingChange} />
            <div>
            <Button buttonText={"Create Contact"} onClick={handleContactClick} ></Button>
            <Button buttonText={"Cancel"} onClick={handleCloseModal}/>
            </div>
          </div>
          </ReactModal>

            
           {contact.map(content =>
            {
              return <ContactItem contactItem={content} /> 
            })}

          </div>
        </main>
      );
    }
    