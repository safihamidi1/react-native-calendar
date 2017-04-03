import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#f7f7f7',
  },
  monthContainer: {
    width: DEVICE_WIDTH,
  },
  calendarControls: {
    flexDirection: 'row',
  },
  controlButton: {
  },
  controlButtonText: {
    margin: 10,
    fontSize: 15,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },
  calendarHeading: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  dayHeading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
  },
  weekendHeading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white',
  },
  weekRow: {
    flexDirection: 'row',
  },
  dayButton: {
    alignItems: 'center',
    padding: 5,
    width: DEVICE_WIDTH / 7,
    borderTopWidth: 1,
  },
  dayButtonFiller: {
    width: DEVICE_WIDTH / 7,
  },
  day: {
    fontSize: 16,
    alignSelf: 'center',
  },
  eventIndicatorFiller: {
    marginTop: 3,
    borderColor: 'transparent',
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  eventIndicator: {
    backgroundColor: '#cccccc',
  },
  dayCircleFiller: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  currentDayCircle: {
    backgroundColor: '#ddd',
  },
  currentDayText: {
    color: 'red',
  },
  selectedDayCircle: {
    backgroundColor: 'green',
  },
  hasEventCircle: {
  },
  hasEventDaySelectedCircle: {
  },
  hasEventText: {
  },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weekendDayText: {
    color: '#cccccc',
  },
  startDayWrapper: {
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  endDayWrapper: {
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
    inRangeDay: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: 'grey',
      alignSelf: 'center',
    },
});

export default styles;
