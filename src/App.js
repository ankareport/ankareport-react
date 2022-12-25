import { useState } from 'react';

import { ReportDesigner } from './components/ReportDesigner';
import { ReportRenderer } from './components/ReportRenderer';

import { data as defaultData } from './data/data';
import { dataSource as defaultDataSource } from './data/data-source';
import { layout as defaultLayout } from './data/layout';

function App() {
  const [designer, setDesigner] = useState();

  const [data, setData] = useState(defaultData);
  const [dataSource, setDataSource] = useState(defaultDataSource);
  const [layout, setLayout] = useState(defaultLayout);

  return (
    <div className="App">
      <div style={{
        width: '800px',
        height: '500px',
        border: '1px solid black',
        margin: '10px auto',
      }}>
        <ReportDesigner
          dataSource={dataSource}
          layout={layout}
          onChange={(e) => {
            console.log("onchange:", e);

            if (designer) {
              setLayout(designer.toJSON());
            }
          }}
          onCreate={(d) => {
            setDesigner(d);
          }}
        />
      </div>
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
}

export default App;
