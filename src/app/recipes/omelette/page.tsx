import Image from "next/image"
import omelletepic from "@images/image-omelette.jpeg"

export default function Omelette() {
    return (
      <div>
        <main className="mt-[122px]">
          <div className="w-[736px] mx-auto rounded-3xl bg-white p-10">
            <Image
              className="rounded-[10px] mx-auto mb-10"
              src={omelletepic}
              alt="omelette"
              width={656}
              height={300}
            />

            <h1 className="mb-[15px]">Simple Omelette Recipe</h1>

            <p className="mb-[34px]">
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <section className="bg-rose-50 rounded-[14px] px-8 py-7 mb-[25px]">
              <h3>Preparation time</h3>
              <ul className="p-1.5 marker:text-rose-800">
                <li>Total: Approximately 10 minutes</li>
                <li>Preparation: 5 minutes</li>
                <li>Cooking: 5 minutes</li>
              </ul>
            </section>

            <h2 className="mb-5">Ingredients</h2>
            <ul className="marker:text-brown-800">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>

            <hr className="mt-8 mb-[25px]"/>

            <h2 className="mb-5">Instructions</h2>
            <ol className="marker:text-brown-800">
              <li>
                Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                You can add a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                the eggs evenly coat the surface.
              </li>
              <li>
                Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the 
                middle, sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the 
                fillings. Let it cook for another minute, then slide it onto a plate.
              </li>
              <li>
                Enjoy: Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>

            <hr className="mt-8 mb-[25px]"/>

            <h2 className="mb-5">Nutrition</h2>
            <p className="mb-[15px]">
              The table below shows nutritional values per serving without the additional fillings.
            </p>

            <table>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td className="nutrition-value">277kcal</td>
                </tr>

                <tr>
                  <td>Carbs</td>
                  <td className="nutrition-value">0g</td>
                </tr>

                <tr>
                  <td>Protein</td>
                  <td className="nutrition-value">20g</td>
                </tr>

                <tr>
                  <td>Fat</td>
                  <td className="nutrition-value">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
  