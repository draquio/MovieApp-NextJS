import Link from "next/link"

const FooterComponent = () => {
  return (
    <footer className="mt-auto py-5 border-t-[1px] w-full mx-auto px-3 text-center">
      <Link href="https://draquioportfolio.vercel.app/" target="_blank" >© Sergio Mercado (Draquio) | Fullstack Developer</Link>
    </footer>
  )
}

export {FooterComponent}
