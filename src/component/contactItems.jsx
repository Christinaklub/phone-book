import React from "react";

export default function contact(props) {

      return (
        <article className="Kontakt form">
          <input name="Firstname" id={props.contact.content} />
          <input name="Lastname" id={props.contact.content} />
          <input type="number" id={props.contact.content} />
          <input name="Mail" id={props.contact.content} />
          <input name="firma" id={props.contact.content} />
          <input name="Stilling" id={props.contact.content} />
          <label htmlFor={props.contact.content}>{props.TodoItem.content}</label>
        </article>
      );
    }
    