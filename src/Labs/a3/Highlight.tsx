import { ReactNode } from "react";
function Highlight({ children }: { children: ReactNode }) {
  return (
    <div>
    <h3>Highlight</h3>
    <span style={{ backgroundColor: "yellow", color: "red" }}>
      {children}
    </span>
    </div>
  );
}
export default Highlight;