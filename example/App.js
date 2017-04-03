import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
      leaveStartDate: moment('2017-04-01','YYYY-MM-DD').format(),
      leaveEndDate: moment('2017-04-03','YYYY-MM-DD').format(),
    };
  }

  onDateSelect(date) {
    this.setState({selectedDate: date})
  }

  render() {
    console.log('Loading Calendar',this.state.leaveStartDate);
    return (
      <View style={styles.container}>
      <Calendar
      ref="calendar"
      customStyle={{calendarContainer:{backgroundColor:'white'},
                    calendarControls:{backgroundColor:'#0CA0EC'},
                    calendarHeading:{borderBottomWidth:0},
                    day: {fontSize: 15, textAlign: 'center',borderWidth:0},
                    title:{color:'white'},
                    weekendDayText:{color:'black'},
                    currentDayText:{color:'black'},
                    hasEventCircle:{backgroundColor:'red'},
                    eventIndicator:{backgroundColor:'#35C7A6',height:5,width:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5},
                  }} // Customize any pre-defined styles
      dayHeadings={['S', 'M', 'T', 'W', 'T', 'F', 'S']}           // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      eventDates={['2017-03-01']}       // Optional array of moment() parseable dates that will show an event indicator
      events={[{date:'2017-03-02'}]}// Optional array of event objects with a date property and custom styles for the event indicator
      monthNames={['January','February','March','April','May','June','July','August','September','October','November','Deecmber ']}
           // Text for next button. Default: 'Next'
      onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
      onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
      onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
      onTouchNext={this.onTouchNext}    // Callback for next touch event
      onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
      leaveStartDate={this.state.leaveStartDate}
      leaveEndDate={this.state.leaveEndDate}
      scrollEnabled={true}              // False disables swiping. Default: False
      showControls={true}               // False hides prev/next buttons. Default: False
      showEventIndicators={true}        // False hides event indicators. Default:False
      titleFormat={'MM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
      weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
      />
      <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
      </View>

      );
  }
}

module.exports = App;
