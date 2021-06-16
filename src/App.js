import Header from "./components/Header";
import Menu from "./components/Menu";
import Feed from "./components/Feed";


function App() {
  return (
    <div>
      
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
            <img  className="h-12 w-12" src="" alt="" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">
            ChitChat
          </div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>


      <Header/>
      <Menu />
      <Feed />
    </div>
  );
}

export default App;
