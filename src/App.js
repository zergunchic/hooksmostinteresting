import ShoppingList from "./components/ShoppingList";
import ShoppingListContextProvider from "./components/ShoppingListContext";

function App() {
  return (
    <div className="App">
      <ShoppingListContextProvider>
          <ShoppingList></ShoppingList>
        </ShoppingListContextProvider>
    </div>
  );
}

export default App;
