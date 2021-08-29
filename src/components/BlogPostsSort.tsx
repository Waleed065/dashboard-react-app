
import { MenuItem, TextField } from '@material-ui/core';

// ----------------------------------------------------------------------


interface schema{
    options: {
        value: string;
        label: string
    }[];
    onSort?: () => void
}
export default function BlogPostsSort({ options, onSort }:schema) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
