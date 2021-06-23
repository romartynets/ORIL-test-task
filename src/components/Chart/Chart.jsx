import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, XAxis, Tooltip, CartesianGrid, Area, ResponsiveContainer, YAxis } from 'recharts';
import styles from './styles.module.css'

export const Chart = () => {
  const { id } = useParams();

  const [initialData, setInitialData] = useState(null)
  const [dataByPeriod, setDataByPeriod] = useState(null)
  const [activePeriod, setActivePeriod] = useState('')


  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  const periods = [
    'week',
    'month',
    'year'
  ]
  const additionalInfoTypes = [
    'min',
    'medium',
    'max'
  ]
  
  function getItemData() {
    // const apiResponse = await axios.get(`https://oril-coins-test.herokuapp.com/item/${id}`);
    const response = {
        "data":[{"id":1,"curency":"102.6","date":"2022-02-14T13:27:26Z"},{"id":2,"curency":"88.09","date":"2021-06-25T20:40:38Z"},{"id":3,"curency":"106.49","date":"2022-05-25T17:22:04Z"},{"id":4,"curency":"null","date":"2022-05-04T06:48:44Z"},{"id":5,"curency":"1.59","date":"2020-09-12T00:12:51Z"},{"id":6,"curency":"415.04","date":"2021-04-07T20:34:02Z"},{"id":7,"curency":"16.97","date":"2021-11-10T13:11:34Z"},{"id":8,"curency":"103.46","date":"2021-10-29T01:09:56Z"},{"id":9,"curency":"110.38","date":"2022-02-06T12:16:08Z"},{"id":10,"curency":"3.49","date":"2021-02-07T15:23:05Z"},{"id":11,"curency":"374.27","date":"2021-12-23T10:03:16Z"},{"id":12,"curency":"428.97","date":"2021-01-04T21:11:56Z"},{"id":13,"curency":"1.24","date":"2021-05-12T18:21:39Z"},{"id":14,"curency":"92.42","date":"2020-10-10T15:37:40Z"},{"id":15,"curency":"7.22","date":"2021-09-24T22:33:27Z"},{"id":16,"curency":"110.28","date":"2022-04-06T13:37:43Z"},{"id":17,"curency":"12.64","date":"2021-09-23T22:57:29Z"},{"id":18,"curency":"null","date":"2021-05-22T09:45:26Z"},{"id":19,"curency":"3.66","date":"2022-02-27T15:13:29Z"},{"id":20,"curency":"452.26","date":"2020-08-18T05:44:29Z"},{"id":21,"curency":"6.65","date":"2020-11-30T12:45:37Z"},{"id":22,"curency":"70.59","date":"2021-12-14T07:08:41Z"},{"id":23,"curency":"35.86","date":"2021-08-21T05:18:51Z"},{"id":24,"curency":"556.53","date":"2020-12-20T05:52:48Z"},{"id":25,"curency":"1.46","date":"2021-12-23T20:55:36Z"},{"id":26,"curency":"1.36","date":"2021-02-14T17:09:59Z"},{"id":27,"curency":"1.32","date":"2021-05-03T23:31:48Z"},{"id":28,"curency":"null","date":"2021-04-22T05:02:47Z"},{"id":29,"curency":"13.74","date":"2022-01-05T05:52:15Z"},{"id":30,"curency":"290.46","date":"2021-10-02T01:50:59Z"},{"id":31,"curency":"134.2","date":"2020-06-28T21:22:05Z"},{"id":32,"curency":"1.78","date":"2021-09-27T23:02:29Z"},{"id":33,"curency":"475.85","date":"2020-07-31T15:06:54Z"},{"id":34,"curency":"6.29","date":"2021-11-12T23:26:58Z"},{"id":35,"curency":"2.73","date":"2021-05-04T15:42:01Z"},{"id":36,"curency":"751.86","date":"2021-07-05T03:16:49Z"},{"id":37,"curency":"13.55","date":"2021-03-19T02:38:24Z"},{"id":38,"curency":"356.99","date":"2020-11-21T14:41:44Z"},{"id":39,"curency":"445.1","date":"2021-11-25T10:38:35Z"},{"id":40,"curency":"676.91","date":"2020-12-20T21:29:16Z"},{"id":41,"curency":"102.63","date":"2021-05-18T19:23:57Z"},{"id":42,"curency":"null","date":"2021-12-20T23:20:43Z"},{"id":43,"curency":"56.38","date":"2021-09-20T13:30:52Z"},{"id":44,"curency":"4.39","date":"2021-10-15T07:37:19Z"},{"id":45,"curency":"70.55","date":"2021-05-22T13:14:00Z"},{"id":46,"curency":"12.5","date":"2021-09-06T15:18:29Z"},{"id":47,"curency":"1.89","date":"2022-04-16T00:36:26Z"},{"id":48,"curency":"499.2","date":"2022-02-18T11:50:50Z"},{"id":49,"curency":"16.68","date":"2020-07-12T01:01:23Z"},{"id":50,"curency":"8.19","date":"2022-02-15T22:19:48Z"},{"id":51,"curency":"13.64","date":"2022-04-19T14:57:57Z"},{"id":52,"curency":"null","date":"2021-06-12T11:09:34Z"},{"id":53,"curency":"231.47","date":"2021-04-03T05:37:33Z"},{"id":54,"curency":"21.58","date":"2021-08-19T17:54:02Z"},{"id":55,"curency":"1.88","date":"2020-06-27T19:26:31Z"},{"id":56,"curency":"1.03","date":"2021-11-06T22:41:05Z"},{"id":57,"curency":"1.21","date":"2022-04-13T14:03:19Z"},{"id":58,"curency":"229.8","date":"2022-01-27T08:05:51Z"},{"id":59,"curency":"1.3","date":"2021-08-15T08:17:13Z"},{"id":60,"curency":"30.33","date":"2022-03-06T17:02:17Z"},{"id":61,"curency":"null","date":"2022-02-19T19:05:55Z"},{"id":62,"curency":"1.42","date":"2021-12-26T01:27:17Z"},{"id":63,"curency":"234.63","date":"2021-04-08T03:16:16Z"},{"id":64,"curency":"937.55","date":"2020-11-28T20:15:26Z"},{"id":65,"curency":"309.27","date":"2020-11-15T10:53:10Z"},{"id":66,"curency":"138.19","date":"2020-11-18T13:25:02Z"},{"id":67,"curency":"589.55","date":"2020-10-12T00:56:40Z"},{"id":68,"curency":"345.6","date":"2020-11-25T05:24:24Z"},{"id":69,"curency":"599.33","date":"2022-01-21T20:11:21Z"},{"id":70,"curency":"82.81","date":"2020-06-28T08:56:38Z"},{"id":71,"curency":"518.09","date":"2020-11-23T13:15:28Z"},{"id":72,"curency":"907.67","date":"2021-04-10T08:12:16Z"},{"id":73,"curency":"3.36","date":"2021-04-04T23:02:24Z"},{"id":74,"curency":"null","date":"2021-12-17T07:49:56Z"},{"id":75,"curency":"582.59","date":"2021-07-01T12:04:56Z"},{"id":76,"curency":"null","date":"2021-07-27T03:57:37Z"},{"id":77,"curency":"2.61","date":"2020-12-10T14:21:38Z"},{"id":78,"curency":"615.32","date":"2021-10-02T06:14:54Z"},{"id":79,"curency":"657.36","date":"2020-08-25T12:37:29Z"},{"id":80,"curency":"330.29","date":"2022-01-24T06:30:58Z"},{"id":81,"curency":"null","date":"2021-10-29T21:24:21Z"},{"id":82,"curency":"618.24","date":"2021-07-26T02:44:25Z"},{"id":83,"curency":"36.89","date":"2021-12-05T08:49:47Z"},{"id":84,"curency":"null","date":"2021-11-04T04:01:38Z"},{"id":85,"curency":"611.82","date":"2021-04-01T08:02:11Z"},{"id":86,"curency":"2.4","date":"2021-08-14T20:44:30Z"},{"id":87,"curency":"1.39","date":"2022-05-22T08:56:43Z"},{"id":88,"curency":"5.07","date":"2020-08-22T07:58:27Z"},{"id":89,"curency":"null","date":"2021-02-26T08:26:30Z"},{"id":90,"curency":"555.7","date":"2020-08-28T03:20:04Z"},{"id":91,"curency":"null","date":"2021-01-25T05:42:41Z"},{"id":92,"curency":"null","date":"2021-09-16T21:16:13Z"},{"id":93,"curency":"7.22","date":"2020-09-12T07:53:12Z"},{"id":94,"curency":"252.54","date":"2021-06-06T10:00:45Z"},{"id":95,"curency":"43.5","date":"2020-11-12T17:30:21Z"},{"id":96,"curency":"520.01","date":"2020-12-25T14:21:59Z"},{"id":97,"curency":"255.93","date":"2021-10-06T09:05:28Z"},{"id":98,"curency":"103.28","date":"2022-04-15T09:36:01Z"},{"id":99,"curency":"6.48","date":"2021-05-23T01:28:46Z"},{"id":100,"curency":"null","date":"2022-03-12T03:58:28Z"},{"id":101,"curency":"1.12","date":"2021-12-14T23:52:18Z"},{"id":102,"curency":"null","date":"2020-12-31T08:49:38Z"},{"id":103,"curency":"681.44","date":"2022-05-16T14:12:10Z"},{"id":104,"curency":"6.98","date":"2021-12-27T12:10:14Z"},{"id":105,"curency":"72.8","date":"2020-06-28T07:56:21Z"},{"id":106,"curency":"121.47","date":"2022-03-09T01:36:17Z"},{"id":107,"curency":"32.03","date":"2021-08-17T00:52:09Z"},{"id":108,"curency":"70.59","date":"2021-07-13T05:28:26Z"},{"id":109,"curency":"null","date":"2021-10-18T08:57:59Z"},{"id":110,"curency":"null","date":"2021-12-11T02:30:36Z"},{"id":111,"curency":"39.32","date":"2020-12-28T05:59:35Z"},{"id":112,"curency":"70.59","date":"2021-05-18T07:25:41Z"},{"id":113,"curency":"570.61","date":"2022-04-05T05:23:53Z"},{"id":114,"curency":"72.37","date":"2021-07-22T20:29:48Z"},{"id":115,"curency":"1.02","date":"2021-08-23T23:55:12Z"},{"id":116,"curency":"null","date":"2022-01-18T18:12:07Z"},{"id":117,"curency":"null","date":"2021-07-09T07:01:10Z"},{"id":118,"curency":"null","date":"2021-12-18T15:25:11Z"},{"id":119,"curency":"91.85","date":"2021-05-17T08:03:30Z"},{"id":120,"curency":"null","date":"2020-06-20T19:12:53Z"},{"id":121,"curency":"27.19","date":"2021-01-27T09:35:38Z"},{"id":122,"curency":"79.27","date":"2021-09-30T08:37:02Z"},{"id":123,"curency":"176.16","date":"2021-06-20T16:14:54Z"},{"id":124,"curency":"425.52","date":"2020-10-01T18:58:54Z"}], "_id":"60b9e52ead6050eae1503ba9","id":"beer_coin"}
        
    return (
      response && 
      response.data && 
      response.data
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((row) => ({ ...row, day : days[new Date(row.date).getDay()]}))) || 
      [];
  }

  function handlePeriodSwitch(period) {
    const today = new Date();

    let currentPeriodData

    if (period === 'week') {
      const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
      const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));

      currentPeriodData = initialData.filter(({ date }) => {
        const currentDate = new Date(date)

        return currentDate >= firstDay && currentDate <= lastDay
      })
    } else if (period === 'month') {
      currentPeriodData = initialData.filter(({ date }) => new Date(date).getMonth() === today.getMonth())
    } else {
      currentPeriodData = initialData.filter(({ date }) => new Date(date).getFullYear() === today.getFullYear())
    }

    setActivePeriod(period)
    setDataByPeriod(currentPeriodData)
  }

  function calculateChartData(type) {
    const currencyArray = dataByPeriod.map(({ curency }) => curency === 'null' ? null : +curency)

    switch (type) {
      case 'min':
        return Math.min(...currencyArray)
      case 'max':
        return Math.max(...currencyArray)
      case 'medium':
        return (currencyArray.reduce((acc, cur) => acc + cur, 0) / currencyArray.length).toFixed(2)
      default:
        return currencyArray.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    }
  }

  useEffect(() => {
    setInitialData(getItemData())
    setDataByPeriod(getItemData())
  }, [])

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartInfo}>
        <b className={styles.chartTitle}>Revenue</b>
        <div>
          {periods.map((period, index) => {
            return (
              <button key={index} className={activePeriod === period ? styles.activePeriodButton: styles.periodButton} onClick={() => {handlePeriodSwitch(period)}}>{period}</button>
            )
          })}
        </div>
      </div>
      <ResponsiveContainer width="100%" height="65%">
        <AreaChart
          data={dataByPeriod}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis type="number" domain={[0, 'dataMax + 500']} allowDataOverflow={true}/>
          <Tooltip />
          <Area type="monotone" dataKey="curency" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      {dataByPeriod && <div className={styles.chartMetaData}>
        <div className={styles.chartTotal}>
          <div className={styles.chartInfoType}>Total</div>
          <div className={styles.chartInfoBigNumber}>$ {calculateChartData('total')}</div>
        </div>
        <div className={styles.chartAdditionalInfo}>
          {additionalInfoTypes.map((type, index) => {
            return (
            <div key={index} className={styles.chartBlock}>
              <div className={styles.chartInfoType}>{type}</div>
              <div className={styles.chartInfoNumber}>$ {calculateChartData(type)} </div>
            </div>
            )
          })}

        </div>
      </div>}
    </div>
  )
}

