import * as React from "react";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import StatisticsSection from "../components/Statistics";
import ScoreDistributionChart from "../components/ScoreDistribution";

export default function HomePage() {
  const scoreData = [
    { score: 10, count: 1 },
    { score: 20, count: 3 },
    { score: 30, count: 7 },
    { score: 40, count: 9 },
    { score: 50, count: 12 },
    { score: 60, count: 5 },
    { score: 70, count: 4 },
    { score: 80, count: 2 },
    { score: 90, count: 1 },
    { score: 100, count: 1 },
  ];

  return (
    <Box p={2}>
      <Alert severity="info" sx={{ mb: 2 }}>
        <Typography>
          Welcome to the Misconceptions Analyzer dashboard.
        </Typography>
      </Alert>

      <StatisticsSection />

      <Box mt={4}>
        <ScoreDistributionChart data={scoreData} />
      </Box>

      <br></br>
      <Typography variant="h4">Breakdowns</Typography>
      <Box mt={4}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Strengths</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Students demonstrated strong foundational knowledge in state management,
              effective use of React hooks, and consistent coding style.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Misconceptions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Some students misunderstood the difference between props and state,
              especially when passing data between nested components.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Coding Errors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Frequent errors included improper dependency arrays in useEffect,
              and inconsistent key usage in list rendering.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Improvements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Students could improve modularity by breaking components into smaller, reusable
              parts and adopting consistent naming conventions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
