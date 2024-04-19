import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MuiThemeWrapper from '@/components/utils/muiThemeWrapper';

import { useState, useEffect } from 'react';
import React from 'react';

export default function ModelSwitch({ models, changeModel }) {

  const [chosenModel, setChosenModel] = useState("");

  // useEffect hook to set chosenModel to the first model when models are fetched
  useEffect(() => {
    // Check if models array is not empty
    if (models.length > 0) {
      // Set chosenModel to the first model in the models array
      setChosenModel(models[0]);
    }
  }, [models]); // This effect depends on the models array

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    setChosenModel(selectedModel);    // Model name displayed as selected
    changeModel(selectedModel);  // Change model used in POST request data
  };

  return (
    <MuiThemeWrapper>
      <FormControl>
        <InputLabel id="model-label">Model</InputLabel>
        <Select
          labelId="model-label"
          id="model"
          label="Model"
          value={chosenModel}
          onChange={handleModelChange}
        >
          {models.map((m, i) => (
            <MenuItem key={i} value={m}>{m}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </MuiThemeWrapper>
  );
};
