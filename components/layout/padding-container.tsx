import React, { ReactNode } from "react";

const PaddingContainer = ({ children }: { children: ReactNode }) => {
  return <div className="wrapper-padding">{children}</div>;
};

export default PaddingContainer;
