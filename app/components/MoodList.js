import MoodCard from "./MoodCard";

export default function MoodList({ moods }) {
  return (
    <>
      {moods.map((mood) => (
        <MoodCard
          key={mood.date}
          date={mood.date}
          mood={mood.mood}
          description={mood.description}
        />
      ))}
    </>
  );
}