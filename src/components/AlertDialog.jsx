import React from "react";
import { styled, keyframes } from "@stitches/react";
// import { violet, blackA, red, mauve } from "@radix-ui/colors";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Button } from "./Styles";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: "rgba(119, 119, 119, 0.8)",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: "white",
  // borderRadius: 6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  minHeight: "168px",
  maxWidth: "660px",
  maxHeight: "85vh",
  padding: "29px 49px",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: "Black",
  fontSize: 24,
  fontWeight: 500,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: "Black",
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

// Your app...
const Flex = styled("div", { display: "flex" });

const defaultOptionButtons = {
  action: {
    show: true,
    variant: "filled",
    label: "Ok",
    onClick: () => {},
  },
  cancel: {
    show: true,
    variant: "filled",
    label: "Cancel",
    onClick: () => {},
  },
};

const AlertDialogDefatult = ({
  title,
  children,
  alertTrigger,
  onConfirm,
  buttons = defaultOptionButtons,
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>{alertTrigger}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      {children}

      <Flex css={{ justifyContent: "flex-end" }}>
        <AlertDialogCancel asChild>
          <Button
            theme={{ variant: buttons.cancel?.variant }}
            style={{ margin: "0px 8px" }}
          >
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button
            onClick={buttons.action.onClick}
            theme={{ variant: buttons.action?.variant }}
            style={{ margin: "0px 8px" }}
          >
            Ok
          </Button>
        </AlertDialogAction>
      </Flex>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDefatult;
