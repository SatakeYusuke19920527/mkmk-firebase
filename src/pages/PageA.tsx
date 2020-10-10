import React, { useState } from 'react';
import { addData } from '../lib/firebase';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

const PageA: React.FC<{}> = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [country, setCountry] = useState<string>('');
  const fbAddData = () => {
    addData(name, age, country);
  };
  return (
    <div>
      <h1>PageA</h1>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Age"
        variant="outlined"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <TextField
        label="Country"
        variant="outlined"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Button variant="contained" onClick={fbAddData}>
        Default
      </Button>
      <Link to="/pageb">PageB</Link>
    </div>
  );
};

export default PageA;
