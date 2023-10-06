import React, { useState } from 'react';
import { Container, Grid, Paper, Checkbox, FormControlLabel, Card, CardContent, Typography, Avatar } from '@mui/material';

// Dummy course data
const courses = [
  { "id": "30608", "name": "Mathematics 1" },
  { "id": "30609", "name": "Science 1" }
];

// Dummy student data
const students = [
  { "id": 1, "name": "Mckenzie Knight", "nationality": "Israel", "list_of_courses": [{ "id": "30608" }, { "id": "30609" }] },
  { "id": 2, "name": "Jane Doe", "nationality": "USA", "list_of_courses": [{ "id": "30608" }] },
  // Add more students as needed
];

function App() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [data, setData] = useState(students); // Updated to student data

  const handleFilterChange = (event) => {
    const value = event.target.name;
    let newFilters;

    if (selectedFilters.includes(value)) {
      newFilters = selectedFilters.filter((item) => item !== value);
    } else {
      newFilters = [...selectedFilters, value];
    }

    setSelectedFilters(newFilters);
    filterData(newFilters);
  };

  const filterData = (filters) => {
    if (filters.length === 0) {
      setData(students);
      return;
    }

    const filteredStudents = students.filter((student) => 
      filters.some((filter) => 
        student.list_of_courses.some((course) => course.id === filter)
      )
    );
    
    setData(filteredStudents);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Filter Section */}
        <Grid item xs={12} md={4}>
          <Paper>
            <h3>Filters</h3>
            {courses.map((course) => (
              <FormControlLabel
                key={course.id}
                control={<Checkbox checked={selectedFilters.includes(course.id)} onChange={handleFilterChange} name={course.id} />}
                label={course.name}
              />
            ))}
          </Paper>
        </Grid>
        {/* Content Section */}
        <Grid item xs={12} md={8}>
          <Paper>
            {data.map((student) => (
              <Card key={student.id} style={{ marginBottom: '15px' }}>
                <CardContent>
                  <Avatar>{student.name[0]}</Avatar>
                  <Typography variant="h5">{student.name}</Typography>
                  <Typography variant="subtitle1">{student.nationality}</Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
