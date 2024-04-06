import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  ShowMore,
  Partners,
  HowItWorks,
  Advantages,
  Download,
} from "@/components";
import BestExperience from "@/components/BestExperience";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 4,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <Partners />
      <HowItWorks />
      <BestExperience />

      <div className="padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <p className="section__subtitle">Best services</p>
          <h1 className="section__title">Explore our car catalogue</h1>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 4) / 4}
              isNext={(searchParams.limit || 4) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>

      <Advantages />
      <Download />
    </main>
  );
}
