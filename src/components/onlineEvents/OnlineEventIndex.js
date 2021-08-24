import React from 'react'
import { getAllOnlineEvents } from '../../lib/api'
import OnlineEventCard from './OnlineEventCard'

function OnlineEventIndex() {
  
  const [onlineEvents, setOnlineEvents] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllOnlineEvents()
        setOnlineEvents(response.data)
      } catch (err) {
        console.log('Something went wrong!')
      }
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {onlineEvents &&
            onlineEvents.map(onlineEvent => (
              <OnlineEventCard key={onlineEvent._id} onlineEvent={onlineEvent} />
            ))}
        </div>
      </div>
    </section>
  )
}
export default OnlineEventIndex