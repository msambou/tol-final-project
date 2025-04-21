"use client";
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
  const [scoreData, setScoreData] = React.useState([]);
  const [strengths, setStrengths] = React.useState("");
  const [misconceptions, setMisconceptions] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const [improvements, setImprovements] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [countStrengths, setcountStrengths] = React.useState(0)
  const [countMisconceptions, setcountMisconceptions] = React.useState(0)
  const [countErrors, setcountErrors] = React.useState(0)
  const [countImprovements, setcountImprovements] = React.useState(0)

  React.useEffect(() => {
    async function fetchLatestAnalysis() {
      try {
        const res = await fetch("http://127.0.0.1:8001/analyses/latest");
        const data = await res.json();

        const parsedResponse = JSON.parse(data.response);

        // set counts
        setcountStrengths(parsedResponse.overall_count_of_strengths || 0)
        setcountMisconceptions(parsedResponse.overall_count_of_misconceptions || 0)
        setcountErrors(parsedResponse.overall_count_of_coding_errors || 0)
        setcountImprovements(parsedResponse.overall_count_of_improvements || 0)

        // Set extracted values
        setStrengths(parsedResponse.overall_strengths_students_have || "");
        setMisconceptions(parsedResponse.overall_misconceptions_students_have || "");
        setErrors(parsedResponse.overall_coding_errors_students_have || "");
        setImprovements(parsedResponse.overall_improvements_students_need || "");
        setTopic(parsedResponse.topic_for_the_problem || "");

        setScoreData(parsedResponse.student_scores_out_of_hundred_as_list_in_multiples_of_10 || [])
        // console.log("scores", parsedResponse.student_scores_out_of_hundred_as_list_in_multiples_of_10)

        // Extract score list from topic field
        const scoreMatch = parsedResponse.topic_for_the_problem?.match(/\[\s*{[\s\S]*?}\s*\]/);
        if (scoreMatch) {
          const jsonStr = scoreMatch[0]
            .replace(/score:/g, '"score":')
            .replace(/count:/g, '"count":')
            .replace(/'/g, '"');

          const parsedScoreData = JSON.parse(jsonStr);
          setScoreData(parsedScoreData);
        }
      } catch (err) {
        console.error("Error fetching analysis:", err);
      }
    }

    fetchLatestAnalysis();
  }, []);

  return (
    <Box p={2}>
      <Alert severity="info" sx={{ mb: 2 }}>
        <Typography>
          Welcome to the Misconceptions Analyzer dashboard.
        </Typography>
      </Alert>

      {topic && (
        <Box mb={2}>
          <Typography variant="h6">Topic</Typography>
          <Typography>{topic}</Typography>
        </Box>
      )}

      <StatisticsSection strengths={countStrengths} errors={countErrors} improvements={countImprovements} misconceptions={countMisconceptions} />

      <Box mt={4}>
        <ScoreDistributionChart data={scoreData} />
      </Box>

      <br />
      <Typography variant="h4">Breakdowns</Typography>
      <Box mt={4}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Strengths</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography whiteSpace="pre-line">{strengths}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Misconceptions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography whiteSpace="pre-line">{misconceptions}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Coding Errors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography whiteSpace="pre-line">{errors}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Improvements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography whiteSpace="pre-line">{improvements}</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
