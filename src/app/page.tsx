import localFont from "next/font/local"
const outfit = localFont({ src: "/../../public/fonts/outfit/Outfit-VariableFont_wght.ttf" })
const youngSerif = localFont({ src: "/../../public/fonts/young-serif/YoungSerif-Regular.ttf" })

export default function Home() {
  return (
    <div>
      <main className="mt-[120px] text-center">
        <h1 className={`${youngSerif.className} mb-[15px]`}>Recipes page</h1>
        <section className="rounded-[14px] px-8 py-6 mb-[25px]">
          <ul className={`${outfit.className} marker:text-brown-800 pl-2 text-2xl`}>
            <li className="my-2"><a href="recipes/omelette" className="text-brown-800">Omelette</a></li>
          </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
