export default function Badge({ text, type = "info" }) {
  const colors = {
    success: "green",
    warning: "orange",
    error: "red",
    info: "blue",
  };

  return (
    <span
      style={{
        background: colors[type],
        color: "white",
        padding: "5px 10px",
        borderRadius: "20px",
        margin: "5px",
        display: "inline-block",
        fontSize: "12px",
      }}
    >
      {text}
    </span>
  );
}