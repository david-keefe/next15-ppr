export async function SlowComponent({ delay = 1000 }: { delay?: number }) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  return <div>Component rendered with {delay} delay</div>;
}
