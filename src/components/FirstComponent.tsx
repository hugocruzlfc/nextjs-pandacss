import React from "react";
import { circle, stack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

interface FirstComponentProps {}

const FirstComponent: React.FC<FirstComponentProps> = ({}) => {
  return (
    <div
      className={stack({
        direction: "row",
        p: "4",
        rounded: "md",
        shadow: "lg",
        bg: "green",
      })}
    >
      <div className={circle({ size: "5rem", overflow: "hidden" })}>
        <img
          src="https://via.placeholder.com/150"
          alt="avatar"
        />
      </div>
      <div
        className={css({
          mt: "4",
          fontSize: "xl",
          fontWeight: "semibold",
          color: "gray.600",
        })}
      >
        John Doe
      </div>
      <div className={css({ mt: "2", fontSize: "sm", color: "gray.600" })}>
        john@doe.com
      </div>
    </div>
  );
};

export default FirstComponent;
