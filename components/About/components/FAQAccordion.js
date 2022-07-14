import {Typography, Accordion, AccordionSummary, AccordionDetails  } from '@mui/material';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import styles from './FAQAccordion.module.scss';

export default function FAQAccordion({ FAQ }) {
    return (
        <div className={styles.root}>
            {FAQ.map((FAQitem) => {
                const {question, answer} = FAQitem;
                return (
                    <Accordion disableGutters elevation={0} className={styles.accordion} square>
                        <AccordionSummary
                            expandIcon={<AddCircleOutlineIcon />}
                            id={question}
                        >
                            <Typography className={styles.question}> {question} </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.answer}>
                                {answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}