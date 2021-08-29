import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import LinkType from "./LinkType";
import { FaBuysellads } from "react-icons/fa";
import { ImPushpin } from "react-icons/im";
import { primaryContrast } from "../constants/theme";
import AllBanners from "./AllBanners";

const links = {
  general: "General Ads",
  particular: "Particular Ad",
};

interface schema {
  linkType: string;
  setLinkType: (arg: string) => void;
  newWindow: boolean;
  setNewWindow: (arg: boolean) => void;
}
export default function BannerForm({
  linkType,
  setLinkType,
  newWindow,
  setNewWindow,
}: schema) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

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

      <Typography variant="subtitle1">Customise your banner</Typography>

      <FormControl>
        <InputLabel htmlFor="size-select">Size</InputLabel>
        <Select id="size-select" label="Size" value={`${selectedSize.width}x${selectedSize.height}`}>
          {sizes.map((size, index) => {
            const value = `${size.width}x${size.height}`;
            return (
              <MenuItem
                key={index}
                value={value}
                onClick={() => setSelectedSize(size)}
              >
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <AllBanners size={selectedSize} />

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

const sizes = [
  {
    width: 120,
    height: 240,
    style: {
      display: "flex",
      flexDirection: "column",
    },
  },
  {
    width: 120,
    height: 600,
    style: {
      display: "flex",
      flexDirection: "column",
    },
  },
  {
    width: 125,
    height: 125,
    style: {
      display: "flex",
      flexDirection: "column",
    },
  },
  {
    width: 160,
    height: 600,
    style: {
      display: "flex",
      flexDirection: "column",
    },
  },
  {
    width: 300,
    height: 250,
    style: {
      display: "flex",
      flexDirection: "column",
    },
  },
  {
    width: 728,
    height: 90,
    style: {
      display: "flex",
      flexDirection: "row",
    },
  },
  {
    width: 300,
    height: 600,
    style: {
      display: "flex",
      flexDirection: "column",
    },
  },
];

const StyledTextField = styled(TextField)({
  backgroundColor: primaryContrast,
});
