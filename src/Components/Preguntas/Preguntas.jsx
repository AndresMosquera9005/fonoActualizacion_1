import React, { useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import "../Estilos/Home.css"

function Preguntas() {
  const [openTab, setOpenTab] = useState("0");
  
  return (
    <div className="divCard">
      <Accordion defaultActiveKey={openTab}>
        <Accordion as={Button} variant="link" className="buttonHeader" onClick={() => setOpenTab("0")}>
          Javier Mosquera
        </Accordion>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="cardBody">
            Javier Andres Mosquera Rodriguez alias (yuca rica)
          </Card.Body>
        </Accordion.Collapse>
        
      </Accordion>
    </div>
  );
}

export default Preguntas;