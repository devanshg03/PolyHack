interface TopicProps {
  topic: string;
  popularity: number;
  type: string;
  impact: string;
}

export default function Topic({ topic, popularity, type, impact }: TopicProps) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <div className="bg-white text-black text-xs flex flex-row justify-between px-6 py-3 rounded-xl">
        <p className="capitalize">{topic}</p>
        <p>{popularity}</p>
        <p className="capitalize">{type}</p>
        <p className="capitalize">{impact}</p>
      </div>
    </div>
  );
}
