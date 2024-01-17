import FilterAndSort from "./components/FilterAndSort"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Products from "./components/Products"

const App = () => {
  return (
    <div className="flex-col ">
      <Navigation />
      <Hero />
      <FilterAndSort />
      <Products />
    </div>
  )
}

export default App
