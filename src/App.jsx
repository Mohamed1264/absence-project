

import BarChart from "./BarChart"
function App() {
  const data = [
    {label:'dd',value:80},
    {label:'gs',value:10},
    {label:'Id',value:0},
    {label:'Ai',value:5}
    
  ]

  return (
    <div className="">
     
      <BarChart data={data}/>

    </div>
  )
}

export default App
