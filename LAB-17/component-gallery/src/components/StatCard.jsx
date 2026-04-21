export default function StatCard({ title, value, icon }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    margin: "10px",
    textAlign: "center",
  },
  icon: {
    fontSize: "30px",
  },
};