import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const id = useParams().id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
