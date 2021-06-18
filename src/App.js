import Header from "./components/Header";
import Menu from "./components/Menu";
import Feed from "./components/Feed";


function App() {

  return (
    <div>
      <div className="flex w-full justify-between"> 
        <Menu />
        <div className="flex w-full flex-col">
          <Header/>
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
