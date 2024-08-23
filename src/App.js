
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 3],
  ["Еда", 8],
  ["Интернет", 10],
  ["Компьтер", 6],
  ["сон", 8],
];

export const options = {
  title: "Мои активности",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
