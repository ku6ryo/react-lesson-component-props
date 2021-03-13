import "./Person.css";

/**
 * 以下のような形で使います。
 * name, age を指定するとそれらを表示してくれます
 * <Person name="Taro", age="20" />
 * 
 * 関数の引数 props は name, age をプロパティとして持っています。
 */
export default function Person (props) {
  const { name, age } = props;
  return (
    <div className="person">
      <div className="section">
        <div className="label">Name</div>:<div className="value">{name}</div>
      </div>
      <div className="section">
        <div className="label">Age</div>:<div className="value">{age}</div>
      </div>
    </div>
  )
}
