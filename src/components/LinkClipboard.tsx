import React from "react";
import {
  Divider,
  Card,
  Stack,
  TextareaAutosize,
  Typography,
  Button,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { AiOutlineCopy } from "react-icons/ai";
import { primaryMain } from "../constants/theme";

export default function LinkClipboard() {
  return (
    <StyledCard>
      <Stack spacing={3}>
        <Typography variant="subtitle1">Copy your link</Typography>
        <Typography variant="subtitle2">Your partner link URL</Typography>
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <StyledTextarea minRows={6} placeholder="https://vurtos.com" />
          <Button
            variant="contained"
            startIcon={<AiOutlineCopy />}
            sx={{ height: 50 }}
          >
            Copy to clipboard
          </Button>
        </Stack>

        <Divider />

        <Typography variant="subtitle2">Your complete HTML code</Typography>
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <StyledTextarea minRows={6} placeholder="https://vurtos.com" />
          <Button
            variant="contained"
            startIcon={<AiOutlineCopy />}
            sx={{ height: 50 }}
          >
            Copy to clipboard
          </Button>
        </Stack>

      </Stack>
    </StyledCard>
  );
}

const StyledTextarea = styled(TextareaAutosize)({
    flex: 1,
    outlineColor: primaryMain
});

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
}));
