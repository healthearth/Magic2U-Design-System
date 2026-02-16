import { DocLayout } from "../components/DocLayout";
import { AdoptionGraph } from "../adoption-graphs/AdoptionGraph";

export default function Home() {
  return (
    <DocLayout>
      <h1>Magic2U Design System</h1>
      <AdoptionGraph />
    </DocLayout>
  );
}

