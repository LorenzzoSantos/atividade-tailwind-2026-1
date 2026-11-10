// EXERCÍCIO 3: seção hero
export default function Hero() {
  return (
    <section id="inicio" className="bg-linear-to-br from-amber-100 to-orange-200 py-20 `md: py-32` px-4 justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900">O café que abraça a sua manhã</h1>
      <p>
        Grãos selecionados de pequenos produtores, torrados artesanalmente e
        servidos com carinho desde 2010.
      </p>
      <div>
        <a href="#cardapio">Ver cardápio</a>
        <a href="#sobre">Nossa história</a>
      </div>
    </section>
  )
}
