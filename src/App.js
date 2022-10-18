import ShoppingList from "./components/ShoppingList";
import ShoppingListContextProvider from "./components/ShoppingListContext";

function App() {
  return (
    <div className="App segment very padding">
      <ShoppingListContextProvider>
          <ShoppingList></ShoppingList>
        </ShoppingListContextProvider>
    </div>
  );
}

export default App;
