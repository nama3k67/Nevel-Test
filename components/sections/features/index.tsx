import { Filter } from "./filter";
import { GamesProvider } from "./games";
import { Providers } from "./providers";

export function FeaturesSection() {
  return (
    <section className="relative w-full lg:py-12">
      <div className="container px-4 mx-auto flex flex-col gap-6 lg:gap-10">
        <Filter />
        <GamesProvider />
        <Providers />
      </div>
    </section>
  );
}
