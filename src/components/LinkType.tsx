import React from "react";
import { Card, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { primaryDark, primaryLight, } from "../constants/theme";
import { IconType } from "react-icons/lib";


interface schema {
  setLinkType: (arg: string) => void;
  linkType: string;
  link: string;
  Icon: IconType
}



export default function LinkType({ setLinkType, linkType, link, Icon }: schema) {
  return (
    <StyledCard
      onClick={() => setLinkType(link)}
      sx={linkType === link ? selectedCardStyle : undefined}
    >
      <StyledIcon>
        <Icon size={50} color={primaryDark} />
      </StyledIcon>
      <Typography variant="caption">{link}</Typography>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: 150,
  height: 150,
  textAlign: "center",
  padding: theme.spacing(5, 0),
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StyledIcon = styled("div")(() => ({}));


const selectedCardStyle = {
  backgroundColor: primaryLight,
  border: `1px solid ${primaryDark}`,
};
