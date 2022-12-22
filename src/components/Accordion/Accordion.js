import * as React from "react";
import MUIAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Accordion.scss"

export default function Accordion({ title, details, defaultExpanded }) {
  return (
    <MUIAccordion className="accordion" defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </MUIAccordion>
  );
}
