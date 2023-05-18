import SendIcon from "@mui/icons-material/Send";
import { Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import InputLogin from "../components/InputLogin";
import TradeContext from "../context/TradeContext";
import RequestAPI from "../utils/RequestAPI";

function Login() {
  const { apiKey } = useContext(TradeContext);
  const navigate = useNavigate();

  const LoginKey = () => {
    RequestAPI(apiKey, "countries", navigate);
  };

  return (
    <>
      <h1>Login</h1>
      <Grid
        container
        component="form"
        spacing={1}
        direction="column"
        p={1}
        noValidate
        autoComplete="off"
        sx={{ overflow: "auto", maxHeight: "86vh" }}
      >
        <InputLogin xs={2} md={2} lg={2} />
        <Grid item>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
            onClick={() => LoginKey()}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
