import Image from "next/image"
import omelletepic from "@images/image-omelette.jpeg"
import localFont from "next/font/local"
const outfit = localFont({ src: "../../../../public/fonts/outfit/Outfit-VariableFont_wght.ttf" })
const youngSerif = localFont({ src: "../../../../public/fonts/young-serif/YoungSerif-Regular.ttf" })

export default function Omelette() {
    return (
      <div>
        <main className="md:my-[124px]">
            <Image
              className="md:hidden w-full"
              src={omelletepic}
              alt="omelette"
              width={656}
              height={300}
            />
          <div className="w-full md:w-[736px] mx-auto md:rounded-3xl bg-white px-8 py-12 md:p-10">
            <Image
              className="hidden md:block md:rounded-[10px] mx-auto mb-7.5"
              src={omelletepic}
              alt="omelette"
              width={656}
              height={300}
            />

            <h1 className={`${youngSerif.className} mb-[15px]`}>Simple Omelette Recipe</h1>

            <p className={`${outfit.className} mb-7 leading-[150%]`}>
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <section className="bg-rose-50 rounded-[14px] px-8 py-6 mb-[25px]">
              <span className={`summary-title ${outfit.className} font-semibold`}>Preparation time</span>
              <ul className={`${outfit.className} marker:text-rose-800 list-outside pl-6`}>
                <li className="my-2"><b>Total:</b> Approximately 10 minutes</li>
                <li className="my-2"><b>Preparation:</b> 5 minutes</li>
                <li className="my-2"><b>Cooking:</b> 5 minutes</li>
              </ul>
            </section>

            <h2 className={`${youngSerif.className} mb-4`}>Ingredients</h2>
            <ul className={`${outfit.className} marker:text-brown-800 pl-2 list-outside pl-6`}>
              <li className="my-2">2-3 large eggs</li>
              <li className="my-2">Salt, to taste</li>
              <li className="my-2">Pepper, to taste</li>
              <li className="my-2">1 tablespoon of butter or oil</li>
              <li className="my-2">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>

            <hr className="mt-[30px] mb-[25px]"/>

            <h2 className={`${youngSerif.className} mb-4`}>Instructions</h2>
            <ol className={`${outfit.className} marker:text-brown-800 marker:font-bold marker:normal-nums list-outside pl-6 leading-[150%]`}>
              <li className="my-2 pl-4">
                <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                You can add a tablespoon of water or milk for a fluffier texture.
              </li>
              <li className="my-2 pl-4">
                <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="my-2 pl-4">
                <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                the eggs evenly coat the surface.
              </li>
              <li className="my-2 pl-4">
                <b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the 
                middle, sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li className="my-2 pl-4">
                <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the 
                fillings. Let it cook for another minute, then slide it onto a plate.
              </li>
              <li className="my-2 pl-4">
                <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>

            <hr className="mt-8 mb-[25px]"/>

            <h2 className={`${youngSerif.className} mb-4`}>Nutrition</h2>
            <p className={`${outfit.className} mb-[15px]`}>
              The table below shows nutritional values per serving without the additional fillings.
            </p>

            <table className={`${outfit.className}`}>
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
  