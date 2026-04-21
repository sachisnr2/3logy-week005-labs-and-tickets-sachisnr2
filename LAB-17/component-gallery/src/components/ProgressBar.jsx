export default function ProgressBar({ label, percentage, color }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>

      <div style={styles.barBg}>
        <div
          style={{
            ...styles.barFill,
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "10px 0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  barBg: {
    background: "#eee",
    height: "10px",
    borderRadius: "5px",
    overflow: "hidden",
  },
  barFill: {
    height: "10px",
    transition: "0.3s",
  },
};