import MuiThemeWrapper from "./muiThemeWrapper";
import { Button } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

export function CopyTextBtn({ content, className }) {
  function handleCopy() {
    navigator.clipboard.writeText(content);
  }

  return (
    <MuiThemeWrapper>
      <Button size="small" variant="text" color="primary" onClick={handleCopy} className="p-0 min-w-0 min-h-0 normal-case">
        <span className={`p-1 text-xs align-bottom ${className}`}>Copy</span>
      </Button>
    </MuiThemeWrapper>
  );
}

export function CopyIconBtn({ content, className, color = "primary"}) {
  function handleCopy() {
    navigator.clipboard.writeText(content);
  }

  return (
    <MuiThemeWrapper>
      <Button size="small" variant="text" color={color} onClick={handleCopy} className="p-0 min-w-0 min-h-0 w-8 h-8">
        <ContentCopy className={`${className}`} />
      </Button>
    </MuiThemeWrapper>
  );
}