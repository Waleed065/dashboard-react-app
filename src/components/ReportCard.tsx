import { alpha, styled } from "@material-ui/core/styles";
import { Card, Tooltip, Typography } from "@material-ui/core";
// utils
import { fShortenNumber } from "../utils/formatNumber";
import { AiFillQuestionCircle } from "react-icons/ai";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
}));

const IconStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

interface schema {
  backgroundColor: string;
  color: string;

  earning: number;
  description: string;
  tip: string
}

export default function AppWeeklySales({
  backgroundColor,
  color,
  earning,
  description,
  tip
}: schema) {
  return (
    <RootStyle
      sx={{
        color,
        backgroundColor,
      }}
    >
      <Tooltip title={tip} arrow>
        <IconStyle
          sx={{
            color,
            backgroundImage: `linear-gradient(135deg, ${alpha(
              color,
              0
            )} 0%, ${alpha(color, 0.24)} 100%)`,
          }}
        >
          <AiFillQuestionCircle size={30} color={color} />
        </IconStyle>
      </Tooltip>

      <Typography variant="h3">${fShortenNumber(earning)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {description}
      </Typography>
    </RootStyle>
  );
}
