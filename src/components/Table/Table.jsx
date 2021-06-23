import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faSearch} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css'

export const Table = ({ data }) => {
  const history = useHistory();
	const [initialData, setInitialData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [sortState, setSortState] = useState({
		column: 'name',
		direction: 'asc'
	});

	function handleClick(id) {
		return history.push(`/${id}`)
	} 
	
	function searchByName(searchTerm) {
		if (searchTerm) {
			const filteredData = initialData.filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()));
			setFilteredData(filteredData)
		} else {
			setFilteredData(initialData);
		}
	}
	
	function formatDate(date) {
		return new Date(date).toLocaleDateString() 
	}

	function sortBy(column) {
		const direction = sortState.direction === 'asc' ? 'desc' : 'asc';
		const sortedData = filteredData.sort((a, b) => {
			if (column === 'createdAt') {
				return new Date(a[column]) - new Date(b[column])        
			} else {
				if (a[column] > b[column]) {
					return 1;
				}
				if (a[column] < b[column]) {
					return -1;
				}
	
				return 0;
			}
		})
		if (direction === 'desc') {
			sortedData.reverse();
		}
		setFilteredData(sortedData);
		setSortState({
			...sortState, 
			column,
			direction
		})
	}	

  useEffect(() => {
    setInitialData(data)
    setFilteredData(data)
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.searchInputGroup}>
        <FontAwesomeIcon icon={faSearch} color="#82858c" />
        <input onChange={(e) => searchByName(e.target.value)} type="text" className={styles.search} placeholder="Search" />
      </div>
      <div className={styles.tableBlock}>  
        <table>
        <thead className={styles.tableHead}>
            <tr>
              <th onClick={() => sortBy('name')}>NAME { sortState.column === 'name' && <FontAwesomeIcon icon={sortState.direction === "asc" ? faCaretUp : faCaretDown} />}</th>
              <th onClick={() => sortBy('createdAt')} >DATE { sortState.column === 'createdAt' && <FontAwesomeIcon icon={sortState.direction === "asc" ? faCaretUp : faCaretDown} />}</th>
              <th onClick={() => sortBy('isActive')} >STATUS { sortState.column === 'isActive'  && <FontAwesomeIcon icon={sortState.direction === "asc" ? faCaretUp : faCaretDown} />}</th>  
            </tr>
        </thead>
        <tbody>
            {filteredData.map((row) => (
              <tr className={styles.tableRow} key={row.name}>
                <td onClick={() => handleClick(row.id) } >{row.name}</td>
                <td onClick={() => handleClick(row.id) } >{formatDate(row.createdAt)}</td>
                <td onClick={() => handleClick(row.id) } style={{"color": row.isActive === true ? "#5e5eea" : "#bd5595"}}>{row.isActive ? 'Active' : "Disable"}</td>
              </tr>										
            ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}