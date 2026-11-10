const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="flex bg-white-600 sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <a href="#">☕ Grão Dourado</a>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
