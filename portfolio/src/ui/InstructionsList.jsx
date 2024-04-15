import React from "react";

function InstructionsList({ instructions }) {
  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>Instructions</h2>
      <ul>
        {instructions.map((step, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstructionsList;
