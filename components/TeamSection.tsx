import { client } from "@/sanity/lib/client";
import { TeamGrid } from "./TeamGrid";

async function getTeam() {
  const query = `*[_type == "team"] | order(order asc) {
    name,
    role,
    image
  }`;
  return client.fetch(query);
}

export async function TeamSection() {
  const team = await getTeam();
  return <TeamGrid team={team} />;
}
