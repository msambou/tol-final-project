"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button
} from '@mui/material';

import UploadZipModal from '@/app/components/UploadZip';

type Analysis = {
  created_at: string;
  topic: string;
};


export default function AnalysesPage() {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState<Analysis[]>([]);


  const handleOpen = () => setOpen(true);
  const handleClose = (shouldReload = false) => {
    setOpen(false);
    if (shouldReload) {
      fetchAnalyses(); // re-fetch after upload
    }
  };

  const fetchAnalyses = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8001/analyses");
      const data = await res.json();
      setRows(data); // assuming the API returns an array of { date, topic }
    } catch (err) {
      console.error("Failed to fetch analyses:", err);
    }
  };

  React.useEffect(() => {
    fetchAnalyses();
  }, []);

  return (
    <>
      {/* Upload Modal */}
      <Button variant="contained" onClick={handleOpen}>
        New Analysis
      </Button>
      <UploadZipModal open={open} handleClose={handleClose} />

      {/* Analyses Table */}
      <br /><br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="analyses table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Topic</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
                <TableCell align="left">{row.topic}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
