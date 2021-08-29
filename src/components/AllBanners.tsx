import React from "react";
import { styled } from "@material-ui/core/styles";
import { primaryLight, primaryMain } from "../constants/theme";

interface schema {
  size: {
    width: number;
    height: number;
    style: {
      [key: string]: any;
    };
  };
}
export default function AllBanners({ size }: schema) {
  const { width, height, style } = size;

  return (
    <StyledContainer>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noreferrer"
        style={{ ...mainStyle, ...style, width, height }}
      >
        <Banner />
      </a>
    </StyledContainer>
  );
}

function Banner() {
  return (
    <>
      <div style={topDivStyle}>
        <b>Stop Searching</b>
      </div>

        <div style={centerDivStyle}>Try Us!</div>
        <div style={bottomDivStyle}>
          <img
            alt="logo"
            src="https://firebasestorage.googleapis.com/v0/b/vurtos-f20da.appspot.com/o/assets%2Flogo.png?alt=media&token=0c9682a2-a005-4f56-b839-09436294f058"
            width={30}
            height={30}
          />
          Book Hotels, Cars and Security
        </div>

    </>
  );
}

const topDivStyle = {
  backgroundColor: primaryMain,
  flex: 1,
  padding: 5,
  color: "#fff",
  textAlign: "center" as any,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const centerDivStyle = {
  backgroundColor: primaryLight,
  flex: 1,
  padding: 5,
  textAlign: "center" as any,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const bottomDivStyle = {
  backgroundColor: "#fff",
  flex: 1,
  padding: 5,
  textAlign: "center" as any,
  display: "flex",
  flexDirection: "column" as any,
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
};

const mainStyle = {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column" as any,

  borderRadius: 5,
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  margin: "auto",
  textDecoration: "none",
};

const StyledContainer = styled("div")({
  overflow: "auto",
  padding: 5,
});
