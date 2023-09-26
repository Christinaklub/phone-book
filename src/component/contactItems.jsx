import React from "react";

export default function contactProps(props) {

      return (
        <article className="contactForm">
          <input name="Firstname" id={props.contact.content} />
          <input name="Lastname" id={props.contact.content} />
          <input type="number" id={props.contact.content} />
          <input name="Mail" id={props.contact.content} />
          <input name="firma" id={props.contact.content} />
          <input name="Stilling" id={props.contact.content} />
        </article>
      );
    }
    