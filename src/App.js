import { ReportDesigner } from './components/ReportDesigner';
import { dataSource } from './data/data-source';
import { layout } from './data/layout';

function App() {
  return (
    <div className="App">
      <ReportDesigner
        dataSource={dataSource}
        layout={layout}
        onChange={(e) => console.log("onchange:", e)}
      />
    </div>
  );
}

export default App;
