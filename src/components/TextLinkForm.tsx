import React from "react";
import { Checkbox, FormControlLabel, Stack, TextField, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import LinkType from "./LinkType";
import { FaBuysellads } from "react-icons/fa";
import { ImPushpin } from "react-icons/im";
import { primaryContrast } from "../constants/theme";


const links = {
  general: "General Ads",
  particular: "Particular Ad",
};

interface schema{
    linkType: string;
    setLinkType: (arg: string) => void;
    newWindow: boolean;
    setNewWindow: (arg: boolean) => void
}
export default function TextLinkForm({linkType, setLinkType, newWindow, setNewWindow}:schema) {
  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">Select Your Link Type</Typography>
      <Stack direction="row" spacing={2}>
        <LinkType
          link={links.general}
          linkType={linkType}
          setLinkType={setLinkType}
          Icon={FaBuysellads}
        />
        <LinkType
          link={links.particular}
          linkType={linkType}
          setLinkType={setLinkType}
          Icon={ImPushpin}
        />
      </Stack>

      <Typography variant="subtitle1">
        Customise your destination link
      </Typography>
      <StyledTextField label="Label" variant="outlined" />
      <StyledTextField label="Anchor Text(link text)" variant="outlined" />
      <FormControlLabel
        checked={newWindow}
        onChange={() => setNewWindow(!newWindow)}
        control={<Checkbox checked={newWindow} />}
        label="Open in new window"
      />
    </Stack>
  );
}


const StyledTextField = styled(TextField)({
  backgroundColor: primaryContrast
})