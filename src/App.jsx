import { Comment } from "./components/Comment"
import data from "./assets/data.json"
import { Current } from "./components/Current"

function App() {


  return (
   <div className="bg-gray-100 h-[100vh]">
    <Comment />
    <Comment />
    <Comment />
    <Comment />
    <Current />
    </div>
  )
}

export default App
