import { Paper, Typography } from "@material-ui/core";

// ----------------------------------------------------------------------
interface schema{
    searchQuery: string
}
export default function SearchNotFound({ searchQuery = "", ...rest }:schema) {
  return (
    <Paper {...rest}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
        using complete words.
      </Typography>
    </Paper>
  );
}
