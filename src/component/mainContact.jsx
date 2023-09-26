import contact from "./contactItems";

export default function MainContent() {

    const contact = [{
        firtname: 'name', 
        lastname: 'lastname', 
        email: 'mail',
        telefon: 123,
        firma: 'firma',
        stilling: 'stilling',
        }
    ];
    
      return (
        <main>
          <div className="list">
            <div className="container">
              <input name="Firstname" />
              <input name="Lastname" />
              <input name="Mail" />
              <input type="number" />
              <input name="Frima" />
              <input name="Stilling" />
              <button className="submit">Save</button>
            </div>

            
            {contact.map(contact=>
            {
              return {contact}
            })}
          </div>
        </main>
      );
    }
    