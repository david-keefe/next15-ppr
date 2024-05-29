import { Suspense } from "react";
import { SlowComponent } from "./slow-component";
import { Loader } from "./loader";

// This demo has no dynamic fetch call, so this prevents Next.js from rendering this page statically
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1 className="text-lg font-bold mb-4">Partial Pre-Rendering Demo</h1>
      <Suspense fallback={<Loader />}>
        <SlowComponent delay={3000} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <SlowComponent delay={0} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <SlowComponent delay={1000} />
      </Suspense>
    </main>
  );
}
