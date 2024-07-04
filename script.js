function updateDateTime() {
  let now = new Date();

  // Update current day
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDayElement = document.getElementById("currentDay");
  if (currentDayElement) {
    currentDayElement.textContent = daysOfWeek[now.getUTCDay()];
  }

  // Update current time in UTC
  let currentTimeUTCElement = document.getElementById("currentTimeUTC");
  if (currentTimeUTCElement) {
    currentTimeUTCElement.textContent = now
      .toISOString()
      .split("T")[1]
      .slice(0, 8);
  }
}

// Call the function initially to display current day and time
updateDateTime();

// Update the current day and time every second (if needed)
setInterval(updateDateTime, 1000); // Update every 1000 ms (1 second)
