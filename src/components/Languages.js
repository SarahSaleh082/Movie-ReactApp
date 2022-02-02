import React, {useState, useContext} from 'react';
import {Dropdown} from "react-bootstrap";
import { LanguageContext } from "./../context/languageContext";
export default function Languages() {
    const { contextLang, setContextLang } = useContext(LanguageContext);
    const [language, setLanguage] = useState("");
    const handelChange = (value)=>{
        // setLanguage(event.target.value)
        setContextLang(value);
        console.log( value);
    }
  return <Dropdown onSelect={handelChange}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    En
  </Dropdown.Toggle>

  <Dropdown.Menu  >
    <Dropdown.Item eventKey={"en"}>En</Dropdown.Item>
    <Dropdown.Item eventKey={"ar"}>Ar </Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>;
}
