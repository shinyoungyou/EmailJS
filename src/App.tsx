import React from "react";

import Contact from "./components/Contact";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function App() {
  const [alert, setAlert] = React.useState<boolean>(false);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {alert && (
        <Stack spacing={2}>
          <Alert onClose={()=>setAlert(false)} severity="success">
            message sent!
          </Alert>
        </Stack>
      )}
      <Typography variant="h4" component="h1" gutterBottom>
        Hey, keep in touch with austyn!
      </Typography>
      <Contact setAlert={setAlert} />
    </Box>
  );
}

export default App;
