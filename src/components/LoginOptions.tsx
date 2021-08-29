import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
} from "@material-ui/core";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

export default function LoginOptions() {
  const [checked, setChecked] = useState(false);

  return (
    <StyledStack spacing={3} justifyContent="space-between">
      <StyledButton
        variant="outlined"
        startIcon={<FaPhoneSquareAlt color="green" size={20} />}
      >
        Log In With Phone Number
      </StyledButton>
      <StyledButton
        variant="outlined"
        startIcon={<AiFillGoogleSquare color="red" size={20} />}
      >
        Log In With Google
      </StyledButton>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <FormControlLabel
          checked={checked}
          onChange={() => setChecked(!checked)}
          control={<Checkbox checked={checked} sx={{ml: 1}}/>}
          label="I confirm the I have read and agree to the"
        />
        <Link component={RouterLink} to="#">
          terms & conditions
        </Link>
      </Stack>
    </StyledStack>
  );
}

const StyledStack = styled(Stack)({
  paddingTop: 10,
  height: "100%",
});

const StyledButton = styled(Button)(() => ({
  height: 48,
  justifyContent: "left",

}));
