import UserCard from "./components/UserCard";
import ProgressBar from "./components/ProgressBar";
import Badge from "./components/Badge";
import StatCard from "./components/StatCard";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Component Gallery</h1>

      {/* USER CARDS */}
      <h2>User Cards</h2>
      <div style={{ display: "flex" }}>
        <UserCard
          name="USMAN IDRIS"
          bio="Frontend Developer"
          avatar="https://i.pravatar.cc/150?img=1"
          skills={["React", "CSS", "JS"]}
        />

        <UserCard
          name="ABBAS JOHN"
          bio="Backend Developer"
          avatar="https://i.pravatar.cc/150?img=2"
          skills={["Node", "Express", "MongoDB"]}
        />
      </div>

      {/* PROGRESS BARS */}
      <h2>Progress Bars</h2>
      <ProgressBar label="React" percentage={80} color="blue" />
      <ProgressBar label="CSS" percentage={60} color="green" />

      {/* BADGES */}
      <h2>Badges</h2>
      <Badge text="Success" type="success" />
      <Badge text="Warning" type="warning" />
      <Badge text="Error" type="error" />

      {/* STATS */}
      <h2>Statistics</h2>
      <div style={{ display: "flex" }}>
        <StatCard title="Users" value="1200" icon="👥" />
        <StatCard title="Sales" value="$5,000" icon="💰" />
      </div>
    </div>
  );
}