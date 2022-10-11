import { withFilter } from './hoc/withFilter';
import { withSort } from './hoc/withSort';
import './styles.css';

function Hoc({
  list,
  enteredSearchValue,
  setEnteredSearchValue,
  sortMode,
  setSortMode,
}) {
  return (
    <div className="App">
      <div>Тодо лист, дебаунс, сортировка, фильтрация по вводу. На ХОКАХ</div>
      <div className="form">
        <input
          type="search"
          value={enteredSearchValue}
          onChange={(e) => setEnteredSearchValue(e.target.value)}
          placeholder="search todo"
        />
        <div className="form-radio">
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortMode === 'asc'}
            onChange={(e) => setSortMode(e.target.value)}
          />{' '}
          A-Z
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sortMode === 'desc'}
            onChange={(e) => setSortMode(e.target.value)}
          />{' '}
          Z-A
        </div>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default withFilter(withSort(Hoc, 'title'), 'title');
