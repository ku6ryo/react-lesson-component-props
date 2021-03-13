import './App.css';
import Person from './Person';

/**
 * Bob の情報です
 */
const bob = {
  name: "Bob",
  age: 18,
};

/**
 * Michael の情報です
 */
const michael = {
  name: "Michael",
  age: 24,
}

/**
 * この React アプリのルート(大元)です。
 */
function App() {
  return (
    <div className="app">
      {/* Bob を表示 name, age に値を渡しています */}
      <Person name={bob.name} age={bob.age} />
      {/* Michael を表示 */}
      <Person name={michael.name} age={michael.age} />
    </div>
  );
}

export default App;
