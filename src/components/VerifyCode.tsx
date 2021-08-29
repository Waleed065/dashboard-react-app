import React, { useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import { Box, Stack, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { LoadingButton } from "@material-ui/lab";

export default function VerifyCode() {
  const [loading, setLoading] = useState(false);

  const handleVerifyCode = (code: string) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <StyledStack spacing={3} justifyContent="space-between">
      <Box>
        <ReactCodeInput
          type={"number"}
          fieldHeight={50}
          fieldWidth={"16.6666%"}
          fields={6}
          //   ref={codeRef}
          onComplete={handleVerifyCode}
          required={true}
          loading={loading}
        />

        <Typography sx={{mt: 1}}>
          We've sent you a confirmation code, kindly verify that it's you.
        </Typography>
      </Box>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
      >
        Verify
      </LoadingButton>
    </StyledStack>
  );
}

const StyledStack = styled(Stack)({
  paddingTop: 10,
  height: "100%",
});
