'use client';

import React, { useState } from 'react';
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import ContactInfo from './info';

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    message: '',
    acceptedTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? target.checked : value 
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.acceptedTerms) return;
    setLoading(true);

    try {
      await axios.post('/api/contact', formData);
      setSent(true);
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        message: '',
        acceptedTerms: false
      });
    } catch (error) {
      console.error('Error sending message', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', lg: '1292px' },
        height: 'auto',
        padding: { xs: 2, sm: 3, md: 4, lg: '50px' },
        backgroundColor: '#E9F2F9',
        boxShadow: '0 0 8px #3A89C940',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        marginBottom: '10px',
        boxSizing: 'border-box',
        mx: 'auto'
      }}
      id='contato'
    >
      <ContactInfo />
      
      <Box sx={{ 
        width: '100%',
        ml: { lg: 4 },
        mt: { xs: 4, lg: 0 }
      }}>
        <Container maxWidth="sm" sx={{ p: 0 }}>
          <Paper 
            elevation={4} 
            sx={{ 
              padding: { xs: 2, sm: 3, md: '2rem' },
              borderRadius: '16px'
            }}
          >
            <Typography 
              variant={isMobile ? 'h5' : 'h4'} 
              align="center" 
              gutterBottom
              sx={{ 
                color: '#1b325f',
                mb: 2
              }}
            >
              Formulário de contato
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Nome ou Razão social"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="WhatsApp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={isMobile ? 3 : 4}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    sx={{ color: '#3A89C9' }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: '#1B325F', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    Concordo com os Termos e Condições de acordo com a LGPD e nossa Política de Privacidade
                  </Typography>
                }
                sx={{ mt: 1 }}
              />

              <Box textAlign="center" mt={3}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loading || !formData.acceptedTerms}
                  sx={{
                    backgroundColor: '#f26c4f',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '16px',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#d5553c',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#f26c4f80',
                    }
                  }}
                  startIcon={!loading && <SendIcon />}
                >
                  {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Enviar'}
                </Button>
                
                {sent && (
                  <Typography mt={2} color="#3A89C9" textAlign="center">
                    Mensagem enviada com sucesso!
                  </Typography>
                )}
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactForm;