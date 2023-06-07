import React from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker
} from 'react-calendar-timeline'
 
const groups = [{ id: 1, title: 'Room Staus' }, { id: 2, title: 'Room To Sell' }, { id: 3, title: 'Net Booked' }, { id: 4, title: 'Standard Rate' }, { id: 5, title: 'Room To Sell' }, { id: 6, title: 'Room To Sell' }]
 
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]

const App = () => {
  return (
    <div> <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'day')}
      defaultTimeEnd={moment().add(12, 'day')}
    >
     <TimelineMarkers>
 
    <CustomMarker>
      {/* custom renderer for this marker */}
      {({ styles, date }) => {
        const customStyles = {
          ...styles,
          backgroundColor: 'green',
          width: '4px'
        }
        return <div style={customStyles} />
      }}
    </CustomMarker>
   
  </TimelineMarkers>

    
    </Timeline>
    </div>
  )
}

export default App
