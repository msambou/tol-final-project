import React, { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  Button,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

// 👇 Define the prop types for your modal
type UploadZipModalProps = {
  open: boolean;
  handleClose: () => void;
};

const UploadZipModal: React.FC<UploadZipModalProps> = ({ open, handleClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a .zip file before submitting.");
      return;
    }

    // Upload logic here
    console.log('Submitted file:', file);

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="upload-zip-modal-title">
      <Box sx={style}>
        <Typography id="upload-zip-modal-title" variant="h6" component="h2" gutterBottom>
          Submit Student Code
        </Typography>
        <Typography sx={{ mb: 3 }} color="text.secondary">
          Upload a <strong>.zip</strong> file containing students' code. Once submitted, the analysis will be available on your dashboard.
        </Typography>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".zip"
            onChange={handleFileChange}
            style={{ marginBottom: '20px' }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button onClick={handleClose} variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default UploadZipModal;
