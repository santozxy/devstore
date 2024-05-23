export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main className="">
      <h1>Opa testei</h1>
    </main>
  );
}
