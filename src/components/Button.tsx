import Button, { ButtonProps } from "@mui/material/Button";

const normalButtonSx = {
  width: 335,
  height: 40,
  backgroundColor: "primary.main",
  color: "background.default",
  fontSize: 14,
  lineHeight: 14,
  fontWeight: 700,
  textTransform: "none",
  "& &-root": {
    borderRadius: 4,
  },
  "&:hover": {
    backgroundColor: "background.default",
    border: "1px solid",
    borderColor: "primary.main",
    width: 343,
    color: "primary.main",
  },
};

const containedButtonSx = {
  // width: 60,
  // height: 29,
  border: "1px solid",
  borderColor: "primary.main",
  borderRadius: 20,
  padding: "8px 9px",
  minWidth: "unset",
  fontSize: 12,
  fontWeight: 600,
  color: "primary.main",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "primary.main",
    color: "background.default",
    borderColor: "primary.main",
  },
};

const outlinedButtonSx = {
  // width: 60,
  // height: 29,
  border: "1px solid",
  borderColor: "primary.main",
  backgroundColor: "primary.main",
  borderRadius: 20,
  padding: "7px 9px",
  fontSize: 12,
  fontWeight: 600,
  color: "background.default",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "background.default",
    color: "primary.main",
    borderColor: "primary.main",
  },
};

const buttonSxMap = {
  text: normalButtonSx,
  contained: containedButtonSx,
  outlined: outlinedButtonSx,
};

export default function ButtonSx({
  children,
  variant,
  ...restProps
}: ButtonProps) {
  return (
    <Button
      {...restProps}
      sx={(theme) => {
        const sxObj = variant ? buttonSxMap[variant] : buttonSxMap.text;
        return {
          ...sxObj,
          [theme.breakpoints.down("md")]: {
            width: "100%",
            "&:hover": {
              width: "100%",
            },
          },
        };
      }}
    >
      {children}
    </Button>
  );
}
