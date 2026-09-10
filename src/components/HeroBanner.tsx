import bannerAsset from "@/assets/banner-stack.png";

export function HeroBanner({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Build Your Ideal

            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Explore frontend, backend, database, and tooling options, compare them side by side, and
            put together the stack that fits your next project.
            
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="btn-gradient rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Explore Technologies
            </button>
            <button className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              Learn More
            </button>
          </div>
        </div>

        <div className="order-first flex justify-center md:order-last">
         <img
  src={bannerAsset}
  alt="Isometric illustration of a layered development stack"
  className="w-[280px] md:w-[420px]"
/>
        </div>
      </div>
    </section>
  );
}
