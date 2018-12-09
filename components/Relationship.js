import Link from "next/link";

export default ({ relations }) => (
  <div>
    amis : <pre>{relations.friends}</pre>
    enemis : <pre>{relations.enemies}</pre>
  </div>
);
