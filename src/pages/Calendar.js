import React from 'react';
import { Container, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const CalendarPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
      />
    </Container>
  );
};

export default CalendarPage;
