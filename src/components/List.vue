<template>
  <div>
    <map-view></map-view>
    <div class='list'>
      <div class v-for='day in list'>
        <h2>{{ day.day }}</h2>
        <div v-for='time in day.events'>
          <!--<h3>{{ formatTime(time.startTime) }}</h3>-->
          <ul>
            <li v-for='event in time.eventList'>
              <div class='title'>
                <h4>{{ event.title }}</h4>
                <p v-if='event.speaker'>{{ event.speaker.name }}</p>
              </div>
              <div>
                <p>{{ event.location }}</p>
                <p>{{ formatTime(time.startTime) }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapView from '@/components/MapView';

export default {
  name: 'list',
  components: {
    mapView: MapView,
  },
  methods: {
    formatTime: (t) => {
      // Check correct time format and split into components
      let time = t.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [t];

      if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'am' : 'pm'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(''); // return adjusted time or original string
    },
  },
  data() {
    return {
      list: [{
        day: 'Wednesday',
        events: [{
          startTime: '18:00',
          eventList: [{
            title: 'Welcome Party',
            location: 'Market Hall',
            startTime: '18:00',
            endTime: '20:00',
          }],
        }],
      }, {
        day: 'Thursday',
        events: [{
          startTime: '08:30',
          eventList: [{
            title: 'Breakfast Welcome',
            location: 'Market Hall',
            startTime: '08:30',
            endTime: '09:30',
          }],
        }, {
          startTime: '09:30',
          eventList: [{
            title: 'Design Morale Compass',
            speaker: {
              name: 'Dan Parham',
              slug: 'dan-parham',
            },
            location: 'Raleigh Convention Center',
            startTime: '09:30',
            endTime: '10:30',
          }],
        }, {
          startTime: '10:30',
          eventList: [{
            title: 'Movement - When to Lead, When to Follow',
            speaker: {
              name: 'Jacinda Walker',
              slug: 'jacinda-walker',
            },
            location: 'Raleigh Convention Center',
            startTime: '10:30',
            endTime: '11:30',
          }],
        }, {
          startTime: '12:00',
          eventList: [{
            title: 'Lunch Event',
            location: 'Market Hall',
            startTime: '12:00',
            endTime: '12:45',
          }],
        }, {
          startTime: '13:00',
          eventList: [{
            title: 'Future of Museums',
            speaker: {
              name: 'Larry Wheeler',
              slug: 'larry-wheeler',
            },
            location: 'Marbles',
            startTime: '13:00',
            endTime: '13:30',
          }, {
            title: 'Designing the World&rsquo;s School for Social Innovation',
            speaker: {
              name: 'Jo-Ann Tan',
              slug: 'joann-tan',
            },
            location: 'Nash Hall',
            startTime: '13:00',
            endTime: '13:30',
          }],
        }, {
          startTime: '13:30',
          eventList: [{
            title: 'Building Design Teams',
            speaker: {
              name: 'Josh Silverman',
              slug: 'josh-silverman',
            },
            location: 'Market Hall',
            startTime: '13:30',
            endTime: '14:00',
          }],
        }, {
          startTime: '14:00',
          eventList: [{
            title: 'TBD',
            speaker: {
              name: 'Lamar Haywood',
              slug: 'lamar-haywood',
            },
            location: 'Marbles',
            startTime: '14:00',
            endTime: '14:30',
          }, {
            title: 'TBD',
            speaker: {
              name: 'Kristin Lueke',
              slug: 'kristin-lueke',
            },
            location: 'Nash Hall',
            startTime: '14:00',
            endTime: '14:30',
          }],
        }, {
          startTime: '14:30',
          eventList: [{
            title: 'Headspace',
            speaker: {
              name: 'Anna Charity',
              slug: 'anna-charity',
            },
            location: 'Market Hall',
            startTime: '14:30',
            endTime: '15:00',
          }],
        }],
      }],
    };
  },
};
</script>

<style scoped>
  .list {
    position: relative;
  }

  ul {
    display: flex;
    width: 80vw;
  }

  ul li {
    background: #ccc;
    box-sizing: border-box;
    display: flex;
    flex-basis: 23%;
    flex-direction: column;
    justify-content: space-between;
    margin: .5vw;
    min-height: 150px;
    padding: 1vw;
  }

  .title {
    margin-bottom: 2em;
  }


  h2 {
    color: #fff;
    font-size: 1.2em;
    padding: .5vw 1.5vw;
  }

  h3 {
    color: #fff;
    padding: .5vw 1.5vw;
  }

  h4 {
    font-size: 1.2em;
    line-height: 1.2em;
  }
</style>

