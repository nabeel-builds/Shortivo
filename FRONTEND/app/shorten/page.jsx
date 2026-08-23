import ShortenForm from "./ShortenForm";

export default async function ShortenPage({ searchParams }) {
  const params = await searchParams;

  const initialUrl = params?.url || "";

  return <ShortenForm initialUrl={initialUrl} />;
}