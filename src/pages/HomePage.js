import { Table } from '../components/Table';
import axios from 'axios';

const HomePage = () => {
  
  function getTableData() {
    // Could not make api request because of CORS policy so decided to mock data

		// const apiResponse = await axios.get('https://oril-coins-test.herokuapp.com/list');

		const response = {
			data: [{"isActive":false,"_id":"60b8c59f81ada4e89cf6dfca","name":"Beer Coin","id":"beer_coin","createdAt":"2021-05-27T13:01:19.926Z"},
			{"isActive":true,"_id":"60b8c59f81ada4e89cf6dfcb","name":"Cat Coin","id":"cat_coin","createdAt":"2021-01-15T13:01:19.926Z"},
			{"isActive":true,"_id":"60b8c59f81ada4e89cf6dfcc","name":"Day Off Coin","id":"dayoff_coin","createdAt":"2021-05-12T15:01:19.926Z"},
			{"isActive":false,"_id":"60b8c59f81ada4e89cf6dfcd","name":"Katia Coin","id":"katia_coin","createdAt":"2021-02-05T13:01:19.926Z"},
			{"isActive":true,"_id":"60b8c59f81ada4e89cf6dfce","name":"Oleh Coin","id":"oleh_coin","createdAt":"2021-06-16T13:01:19.926Z"},
			{"isActive":true,"_id":"60b8c59f81ada4e89cf6dfcf","name":"Oril Coin","id":"oril_coin","createdAt":"2021-04-29T13:01:19.926Z"},
			{"isActive":false,"_id":"60b8c59f81ada4e89cf6dfd0","name":"Vacation Coin","id":"vacation_coin","createdAt":"2021-03-08T13:01:19.926Z"}]
		}

    return (response && response.data) || []
	}

  const data = getTableData()
	
  return (<Table data={data} />);
}

export default HomePage;