import SendIcon from "@mui/icons-material/Send";
import { Grid, Button } from "@mui/material";
import React, { useContext } from "react";

import InputLogin from "../components/InputLogin";
import TradeContext from "../context/TradeContext";
import RequestAPI from "../utils/RequestAPI";

function Login() {
  const { apiKey } = useContext(TradeContext);
  const LoginKey = () => {
    RequestAPI(apiKey, "countries");
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
        {/* <Name isRequired={false} xs={12} md={6} /> */}
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
