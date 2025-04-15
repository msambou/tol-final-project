// ScoreDistributionChart.tsx
"use client"
import { Card, CardContent } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';

type ScoreData = {
  score: number; // or string if you want "0-10", "11-20", etc.
  count: number;
};

type Props = {
  data: ScoreData[];
};

const ScoreDistributionChart = ({ data }: Props) => {
  return (
    <Card>
      <CardContent>
        <ResponsiveContainer width="90%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="score">
              <Label value="Score" offset={-30} position="insideBottom" />
            </XAxis>
            <YAxis allowDecimals={false}>
              <Label
                value="Number of Students"
                angle={-90}
                position="insideLeft"
                offset={-5}
              />
            </YAxis>
            <Tooltip />
            <Bar dataKey="count" fill="#1976d2" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ScoreDistributionChart;
