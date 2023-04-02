import { Container } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
  },
  selected: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
}));

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now widely used in web development.",
  },
  {
    question: "What are the advantages of using React?",
    answer:
      "React offers several advantages, including easy reusability of code, efficient rendering with its virtual DOM, and a large and supportive community of developers.",
  },
  {
    question: "How do I get started with React?",
    answer:
      "To get started with React, you can follow the official documentation and tutorials available on the React website. You will need to have a basic understanding of HTML, CSS, and JavaScript to get started.",
  },
];

const FAQ = () => {
  const classes = useStyles();
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    if (selectedQuestion === question) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(question);
    }
  };

  return (
    <>
      {" "}
      <br />
      <br />
      <Container>
        <div className={classes.root}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              className={
                selectedQuestion === faq.question ? classes.selected : ""
              }
              expanded={selectedQuestion === faq.question}
            >
              <div
                className="faq-question"
                onClick={() => handleQuestionClick(faq.question)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={faq.question}
                  id={faq.question}
                >
                  <Typography
                    className={classes.heading}
                    variant="h8"
                    component="h8"
                    color={
                      selectedQuestion === faq.question
                        ? "primary"
                        : "textPrimary"
                    }
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
              </div>
              <div className="faq-answer text-left">
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </div>
            </Accordion>
          ))}
        </div>
      </Container>
    </>
  );
};

export default FAQ;
