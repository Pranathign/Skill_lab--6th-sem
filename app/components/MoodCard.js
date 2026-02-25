export default function MoodCard({ date, mood, description }) {
  return (
    <div>
      <h2>{mood}</h2>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
}