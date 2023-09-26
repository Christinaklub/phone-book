import { useState } from "react";
import {contactProps} from "../component/contactItems";
import { ContactForm } from "../entitise/contactFrom";

export default function MainContent() {

const [content, setContent] = useState("")

    const contact = [
      {firtname: 'name', 
      lastname: 'lastname', 
      email: 'mail',
      telefon: 123,
      firma: 'firma',
      stilling: 'stilling',

      }
    ];

    const handleContactClick = () => {
    console.log ("I have clicked the button :D")
      
    }


    const handleContactChange = (e) => {
      setContent (e.target.value)
    }
    
    return (
      <main>
        <div className="list">
          <div className="container" value={content} onChange={handleContactChange}>
            <input name="Firstname" value={content} onChange={handleContactChange} />
            <input name="Lastname" value={content} onChange={handleContactChange}/>
            <input name="Mail" value={content} onChange={handleContactChange} />
            <input type="number" value={content} onChange={handleContactChange}/>
            <input name="Frima" value={content} onChange={handleContactChange} />
            <input name="Stilling" value={content} onChange={handleContactChange} />
            <button className="submit" onClick={handleContactClick} >Send</button>
          </div>

            
           {contact.map(content =>
            {
              return ContactForm

            })}

          </div>
        </main>
      );
    }
    