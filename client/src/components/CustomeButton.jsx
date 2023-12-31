import React from "react";
import { Spinner, Tooltip } from "@chakra-ui/react";

import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor, getDarkerColor } from "../config/helpers";

export default function CustomButton({
  type,
  title,
  customStyles,
  handleClick,
}) {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  const generateHoverStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: getDarkerColor(snap.color),
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderColor: getDarkerColor(snap.color),
        color: getDarkerColor(snap.color),
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={{
        ...generateStyle(type),
        transition: "all 0.3s ease",
        ":hover": generateHoverStyle(type),
      }}
      onClick={handleClick}>
      {title === "Asking to AI..." ? (
        <Tooltip
          label="Please note that there may be a delay in our response time due to the server's response time."
          hasArrow
          placement="bottom">
          <span>
            {title}
            {title === "Asking to AI..." && <Spinner size="xs" />}
          </span>
        </Tooltip>
      ) : (
        title
      )}
    </button>
  );
}
