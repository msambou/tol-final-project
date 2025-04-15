import { Grid, Paper, Typography } from '@mui/material';

const statBoxStyles = {
  padding: 2,
  textAlign: 'center',
  color: 'white',
  borderRadius: 2,
};

// Optional colors based on category
const statColors = {
  strengths: '#4caf50',       // Green
  misconceptions: '#fbc02d',  // Amber
  errors: '#e53935',          // Red
  improvements: '#1e88e5',    // Blue
};

const StatisticsSection = ({ strengths = 0, misconceptions = 0, errors = 0, improvements = 0 }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }} justifyContent="center">
      <Grid item xs={12} md={3}>
        <Paper sx={{ ...statBoxStyles, bgcolor: statColors.strengths }}>
          <Typography variant="subtitle1">Strengths</Typography>
          <Typography variant="h4" id="strengthCount">{strengths}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper sx={{ ...statBoxStyles, bgcolor: statColors.misconceptions }}>
          <Typography variant="subtitle1">Misconceptions</Typography>
          <Typography variant="h4" id="misconceptionCount">{misconceptions}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper sx={{ ...statBoxStyles, bgcolor: statColors.errors }}>
          <Typography variant="subtitle1">Coding Errors</Typography>
          <Typography variant="h4" id="errorCount">{errors}</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper sx={{ ...statBoxStyles, bgcolor: statColors.improvements }}>
          <Typography variant="subtitle1">Improvements</Typography>
          <Typography variant="h4" id="improvementCount">{improvements}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatisticsSection;
