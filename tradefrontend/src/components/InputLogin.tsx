import { Grid, TextField } from "@mui/material";
import React, { useContext } from "react";

import TradeContext from "../context/TradeContext";
import ISizeMandatory from "../interfaces/ISizeMandatory";

function InputLogin(props: ISizeMandatory) {
  const { apiKey, setApiKey } = useContext(TradeContext);

  const validationKey = ({ value }: HTMLInputElement | HTMLTextAreaElement) => {
    setApiKey(value);
  };

  return (
    <Grid item {...props}>
      <TextField
        fullWidth
        value={apiKey}
        onChange={(e) => validationKey(e.target)}
        helperText="Digite a chave de autenticação"
        id="outlined-basic"
        label="Login"
        variant="outlined"
      />
    </Grid>
  );
}

export default InputLogin;
