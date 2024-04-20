import { ProgressType } from "@/types";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({
  max,
  value,
  step,
  onChange,
}: ProgressType) {
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
  );
}
