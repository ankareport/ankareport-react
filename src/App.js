import { ReportDesigner } from './components/ReportDesigner';
import { ReportRenderer } from './components/ReportRenderer';
import { data } from './data/data';
import { dataSource } from './data/data-source';
import { layout } from './data/layout';

function App() {
  return (
    <div className="App">
      <div style={{
        border: '1px solid black',
        width: '500px',
        margin: 'auto',
      }}>
        <ReportRenderer
          data={data}
          layout={layout}
        />
      </div>
    </div>

  );
  /*
  return (
    <div className="App">
      <ReportDesigner
        dataSource={dataSource}
        layout={layout}
        onChange={(e) => console.log("onchange:", e)}
      />
    </div>
  );
  */
}

export default App;
