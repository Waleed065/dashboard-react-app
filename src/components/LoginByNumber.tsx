import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import countries from "../utils/countries";
import { Stack } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

function countryToFlag(isoCode: string) {
  return isoCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

export default function CountrySelect() {
  return (
    <Stack spacing={3} sx={{pt: 1}}>
      <Autocomplete
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Country Code" />
        )}
        renderOption={(props, option) => (
          <Box component="li" sx={{ fontSize: 16 }} {...props}>
            <span>{countryToFlag(option.code)}</span>
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
      />
      <TextField label="Contact Number" variant="outlined" type="number" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={false}
      >
        Verify
      </LoadingButton>
    </Stack>
  );
}
