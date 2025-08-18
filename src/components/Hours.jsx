import React from "react";

export default function Hours() {
  const styles = {
    display: "block",
    width: "fit-content",
    padding: "5px",
    alignSelf: "center",
    color: "var(--white)",
    backgroundColor: "var(--rainbowRed)",
    fontWeight: "600",
    borderRadius: "4px",
  };
  const h2Style = {
    borderTop: "2px solid var(--white)",
    borderBottom: "2px solid var(--white)",
    borderColor: "var(--white)",
    color: "var(--white)",
    padding: "5px",
  };

  return (
    <div style={styles}>
      <h2 style={h2Style}>
        Open 10am-8pm
        <span style={{ fontWeight: "100" }}> : CLOSED TUESDAYS</span>
      </h2>
    </div>
  );
}
