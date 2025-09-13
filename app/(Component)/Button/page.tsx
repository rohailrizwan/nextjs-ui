import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  variant = "contained",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: "#112c71",
        fontWeight: 600,
        color: "#fff",
        borderRadius: "8px",
        padding: "8px 20px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#0d2258",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
