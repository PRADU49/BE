import { useScrollProgress } from "../../hooks/useScrollProgress";

function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ScrollProgressBar;
