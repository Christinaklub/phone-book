import { useState } from "react";
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
  new ContactForm('Christina', 'Klubnes', 'Christina@hotmail.com', 34463323, 'Millonær', 'OnlyFans'),
  ];

  const [contact, setContact] = useState(contactDummyData);

    const handleContactClick = () => {
     const newContact = new ContactForm(name, lastname, mail, number, firma, stilling)
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
        <ReactModal classname="modal" isOpen={isOpen}>
          <div className="container">
            <p>Firstname</p>
            <input name="Firstname" placeholder="Your name" value={name} onChange={handleNameChange} />
            <p>Lastname</p>
            <input name="Lastname" placeholder="Your lastname" value={lastname} onChange={handleLastnameChange}/>
            <p>Phone Number</p>
            <input type="number" placeholder="12345678" value={number} onChange={handleNumberChange}/>
            <p>Mail</p>
            <input name="Mail" placeholder="Your@email.com" value={mail} onChange={handleMailChange} />
            <p>Firma</p>
            <input name="Frima" placeholder="Firma" value={firma} onChange={handleFirmaChange} />
            <p>Stilling</p>
            <input name="Stilling" placeholder="Stilling" value={stilling} onChange={handleStillingChange} />
            <div className="modalButtons">
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
    