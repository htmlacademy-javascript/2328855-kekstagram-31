function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function MeetingTime(workStart, workEnd, MeetingStart, MeetingLength) {
  const workStartMin = timeToMinutes(workStart);
  const workEndMin = timeToMinutes(workEnd);
  const MeetingStartMin = timeToMinutes(MeetingStart);

  const endOfMeeting = MeetingStartMin + MeetingLength;


  return MeetingStartMin >= workStartMin && endOfMeeting <= workEndMin;
}

console.log(MeetingTime('08:00', '17:30', '14:00', 90)); //
