export default function UserCard({ name, bio, avatar, skills }) {
  return (
    <div style={styles.card}>
      <img src={avatar} alt={name} style={styles.avatar} />

      <h2>{name}</h2>
      <p>{bio}</p>

      <div style={styles.skills}>
        {skills.map((skill, index) => (
          <span key={index} style={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "10px",
    width: "250px",
    margin: "10px",
  },
  avatar: {
    width: "100%",
    borderRadius: "10px",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    marginTop: "10px",
  },
  skill: {
    background: "#eee",
    padding: "4px 8px",
    borderRadius: "5px",
    fontSize: "12px",
  },
};