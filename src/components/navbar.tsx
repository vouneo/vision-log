import Link from "next/link"
import { ModeToggle } from "./theme-toggle"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "./ui/button"

function Navbar() {
    return (
      <nav className="flex justify-between">
        <h1>
            <a href="/">VisionLog</a>
        </h1>
        
        <div className="max-w-7xl mx-auto p-4">
          <Input
            type="text"
            placeholder="Buscar por nombre o número de trabajo."
            className="w-80 transition-colors dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 bg-white text-slate-900 placeholder:text-slate-500 border dark:border-slate-800 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-900"
          />
        </div>

        <div className="flex gap-x-2 items-center">
            <Link href="/new" 
                className={`
                    ${buttonVariants({ variant: "secondary" })}
                    transition-colors
                    dark:hover:bg-indigo-800
                    hover:bg-indigo-400
                    dark:bg-slate-900
                    bg-slate-100
                `}
            >
                Nuevo Trabajo
            </Link>
            <ModeToggle />
        </div>
      </nav>
  )
}

export default Navbar