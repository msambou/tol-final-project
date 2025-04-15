"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination, Button
} from '@mui/material';


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UploadZipModal from '@/app/components/UploadZip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function AnalysesPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows = [
    { date: '2025-04-10', topic: 'React Hooks Overview' },
    { date: '2025-04-09', topic: 'Material UI Integration' },
    { date: '2025-04-08', topic: 'Redux Toolkit Basics' },
    // Add more rows as needed
  ];

  return <>

    {/* Modal */}
    <Button variant='contained' onClick={handleOpen}>New Analysis</Button>
    <UploadZipModal open={open} handleClose={handleClose}/>
    {/* End of Modal */}
    <br></br>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.topic}</TableCell>
              <TableCell align="center">
                  <Button variant="outlined" size="small">View</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}
