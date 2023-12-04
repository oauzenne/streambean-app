import React, { useRef } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import "../../Styles/DashboardPage.css";

const CopyButton = ({ textToCopy }) => {
  const textAreaRef = useRef(null);

  const handleCopyClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
    }
      alert("Link copied!")
  };

  return (
    <div>
      <textarea
        ref={textAreaRef}
        defaultValue={textToCopy}
        style={{ position: "absolute", left: "-9999px" }}
        readOnly
      />
      <button class="link-button" onClick={handleCopyClick}>
        {" "}
        meet.streambean.ai/TheManifestCodex{" "}
        <ContentCopyOutlinedIcon className="link-icon" />{" "}
      </button>
    </div>
  );
};

export default CopyButton;
