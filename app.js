let selectedSchedule = schedules.A; // Default to A Lunch

// Update the selected schedule when the user changes the radio button
document.querySelectorAll('input[name="lunch"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const selectedLunch = event.target.value;
    selectedSchedule = schedules[selectedLunch];
    updateTime(); // Refresh the display when the schedule changes
  });
});

// Function to update the current time and period display
function updateTime() {
    const now = new Date();
    const hours24 = now.getHours(); // Get hours in 24-hour format
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    // Convert to 12-hour format
    const hours12 = hours24 % 12 || 12; // Convert '0' to '12' for midnight
    const amPm = hours24 >= 12 ? "PM" : "AM";
  
    const currentTime = `${hours12}:${minutes}:${seconds} ${amPm}`;
  
    let currentPeriod = "No School";
    let passStatus = "Off Hours";
  
    // Loop through the selected schedule to find the current period
    for (let entry of selectedSchedule) {
      const [startHour, startMinute] = entry.start.split(":").map(Number);
      const [endHour, endMinute] = entry.end.split(":").map(Number);
  
      const startTime = new Date();
      startTime.setHours(startHour, startMinute, 0);
  
      const endTime = new Date();
      endTime.setHours(endHour, endMinute, 0);
  
      if (now >= startTime && now <= endTime) {
        currentPeriod = entry.period;
        passStatus = entry.passStatus;
        break;
      }
    }
  
    // Update the DOM
    document.getElementById("current-time").textContent = currentTime;
    document.getElementById("current-period").textContent = currentPeriod;
    document.getElementById("current-phase").textContent = passStatus;
    document.body.className = passStatus.toLowerCase(); // Change background color
  }
  

// Update the display every second
setInterval(updateTime, 1000);
