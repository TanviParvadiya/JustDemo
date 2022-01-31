
import './App.css';
import Demo from './demo';
import '../src/demo.css'
// import Script from '../src/script'

function App() {
  const api_json_data={
    "data": {
      "id": 3,
      "name": "true red",
      "year": 2002,
      "color": "#BF1932",
      "pantone_value": "19-1664"
    },
    "data1":[ {
      "id": 3,
      "name": "true red",
      "year": 2003,
      "color": "#BF1932",
      "pantone_value": "19-1664"
    },
    {
      "id": 3,
      "name": "true red",
      "year": 2052,
      "color": "#BF1932rf",
      "pantone_value": "19-1664"
    }],
   
    "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  };
  console.log(api_json_data);
  const data=api_json_data.data1[0].pantone_value;
  return (
    <>
      <Demo data={data}/>
      {/* <Script /> */}
    </>
  );
}

export default App;
