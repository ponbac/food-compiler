import { MultipleQueriesQuery } from "@algolia/client-search";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
} from "react-instantsearch-dom";
import CustomHit from "./custom-hit";
import CustomSearchBox from "./custom-search-box";

const AlgoliaSearch = () => {
  const searchPlaceholder = (): string => {
    const exampleFood = [
      "Råbiff",
      "Vitlökspizza",
      "Pad Thai",
      "Tryffelpasta",
      "Sushi",
    ];
    return exampleFood[Math.floor(Math.random() * exampleFood.length)];
  };

  const algoliaClient = algoliasearch(
    "MMNHDYL5BD",
    "4b6d242a0ec45a1b306319ef8ab73e37"
  );

  const searchClient = {
    ...algoliaClient,
    search(requests: any[]) {
      if (requests.every(({ params }) => !params.query) && true) {
        // Remove false when done designing hits
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
          })),
        });
      }

      return algoliaClient.search(requests);
    },
  };

  return (
    <div className="">
      <InstantSearch searchClient={searchClient} indexName="courses">
        <div className="right-panel">
          <CustomSearchBox />
          <div className="mt-3">
            <Hits
              hitComponent={({ hit }) => {
                //console.log(hit);
                return (
                  <CustomHit
                    title={hit.title}
                    ingredients={hit.ingredients as unknown as string[]}
                    restaurant={hit.restaurant}
                    price={hit.price}
                  />
                );
              }}
            />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearch;
