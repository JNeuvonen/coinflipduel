import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TEXT } from '../../utils/constants'
const AccordionWrapper = ({ accordionTitle, accordionDetails, styles }) => {
  return (
    <Accordion style={styles}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ height: 30, width: 30 }} />}
      >
        <span style={{ fontSize: 20, fontWeight: 700, color: TEXT }}>
          {accordionTitle}
        </span>
      </AccordionSummary>
      <AccordionDetails>
        <span style={{ fontSize: 17, fontWeight: 400, color: TEXT }}>
          {accordionDetails}
        </span>
      </AccordionDetails>
    </Accordion>
  )
}
export default AccordionWrapper
