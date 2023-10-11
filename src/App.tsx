import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

function App() {
  

  return (
    <>
    <section className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">SEO Analyser</h1>
        <p className="text-gray-500">Analyse the SEO of any URL</p>
        <div className="flex flex-row items-center mt-3">
        <Input className="w-[500px] mr-3" type="text" placeholder="https://example.com" />
        <Button variant="outline">Go!</Button>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
