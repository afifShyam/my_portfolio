import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const id = useParams().id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
