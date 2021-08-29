import { Theme } from "@material-ui/core";
import { merge } from "lodash";
import card from "./card";
import lists from "./lists";
import paper from "./paper";
import input from "./input";
import button from "./button";
import tooltip from "./tooltip";
import backdrop from "./backdrop";
import typography from "./typographyTheme";
import iconButton from "./iconButton";
import autocomplete from "./autoComplete";
import { Components } from "@material-ui/core/styles/components";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme):Components {
  return merge(
    card(theme),
    lists(theme),
    paper(),
    input(theme),
    button(theme),
    tooltip(theme),
    backdrop(theme),
    typography(theme),
    iconButton(theme),
    autocomplete(theme)
  );
}
