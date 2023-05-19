import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect, useState } from "react";

import ICountry from "../interfaces/ICountry";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import RequestAPI from "../utils/RequestAPI";

export default function SelectCountry(props: ISizeMandatory) {
  const [age, setAge] = useState("");
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const result = await RequestAPI(
          "a9ba8b0d74bdb2c28b0804297a95643f",
          "countries"
        );
        setCountries(result.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  const handleCountry = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>{age}</div>
      <Grid item {...props}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>País</InputLabel>
          <Select value={age} label="País" onChange={handleCountry}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione um país</FormHelperText>
        </FormControl>
      </Grid>
    </>
  );
}
