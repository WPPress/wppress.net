import { clsx } from "clsx";

export default function Section({ className, children }) {
  return (
    <div className={clsx("py-20", className)}>
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
}
