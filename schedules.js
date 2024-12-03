const schedules = {
    A: [
        { period: "HR/Period 1", start: "08:35", end: "09:21", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "09:21", end: "09:25", passStatus: "Yellow" },
        { period: "Period 2 (No Passes)", start: "09:25", end: "09:35", passStatus: "Red" },
        { period: "Period 2 (Passes Allowed)", start: "09:35", end: "09:57", passStatus: "Green" },
        { period: "Period 2 (No Passes)", start: "09:57", end: "10:07", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "10:07", end: "10:11", passStatus: "Yellow" },
        { period: "Period 3 (No Passes)", start: "10:11", end: "10:21", passStatus: "Red" },
        { period: "Period 3 (Passes Allowed)", start: "10:21", end: "10:43", passStatus: "Green" },
        { period: "Period 3 (No Passes)", start: "10:43", end: "10:53", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "10:53", end: "10:57", passStatus: "Yellow" },
        { period: "Period 4 (No Passes)", start: "10:57", end: "11:07", passStatus: "Red" },
        { period: "Period 4 (Passes Allowed)", start: "11:07", end: "11:29", passStatus: "Green" },
        { period: "Period 4 (No Passes)", start: "11:29", end: "11:39", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "11:39", end: "11:43", passStatus: "Yellow" },
        { period: "A Lunch", start: "11:43", end: "12:13", passStatus: "Green" },
        { period: "Transition (Yellow)", start: "12:13", end: "12:17", passStatus: "Yellow" },
        { period: "Period 6/7 (No Passes)", start: "12:17", end: "12:27", passStatus: "Red" },
        { period: "Period 6/7 (Passes Allowed)", start: "12:27", end: "12:50", passStatus: "Green" },
        { period: "Period 6/7 (No Passes)", start: "12:50", end: "13:00", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "13:00", end: "13:04", passStatus: "Yellow" },
        { period: "Period 8/9 (No Passes)", start: "13:04", end: "13:14", passStatus: "Red" },
        { period: "Period 8/9 (Passes Allowed)", start: "13:14", end: "13:36", passStatus: "Green" },
        { period: "Period 8/9 (No Passes)", start: "13:36", end: "13:46", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "13:46", end: "13:50", passStatus: "Yellow" },
        { period: "Period 10 (No Passes)", start: "13:50", end: "14:00", passStatus: "Red" },
        { period: "Period 10 (Passes Allowed)", start: "14:00", end: "14:30", passStatus: "Green" },
        { period: "Period 10 (No Passes)", start: "14:22", end: "14:32", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "14:32", end: "14:36", passStatus: "Yellow" },
        { period: "Period 11", start: "14:36", end: "15:18", passStatus: "Red" }
    ],
    B: [
        { period: "HR/Period 1", start: "08:30", end: "09:21", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "09:21", end: "09:25", passStatus: "Yellow" },
        { period: "Period 2 (No Passes)", start: "09:25", end: "09:35", passStatus: "Red" },
        { period: "Period 2 (Passes Allowed)", start: "09:35", end: "09:57", passStatus: "Green" },
        { period: "Period 2 (No Passes)", start: "09:57", end: "10:07", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "10:07", end: "10:11", passStatus: "Yellow" },
        { period: "Period 3 (No Passes)", start: "10:11", end: "10:21", passStatus: "Red" },
        { period: "Period 3 (Passes Allowed)", start: "10:21", end: "10:51", passStatus: "Green" },
        { period: "Period 3 (No Passes)", start: "10:51", end: "10:53", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "10:53", end: "10:57", passStatus: "Yellow" },
        { period: "Period 4 (No Passes)", start: "10:57", end: "11:07", passStatus: "Red" },
        { period: "Period 4 (Passes Allowed)", start: "11:07", end: "11:29", passStatus: "Green" },
        { period: "Period 4 (No Passes)", start: "11:29", end: "11:39", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "11:39", end: "11:43", passStatus: "Yellow" },
        { period: "Period 5/6 (No Passes)", start: "11:43", end: "11:53", passStatus: "Red" },
        { period: "Period 5/6 (Passes Allowed)", start: "11:53", end: "12:16", passStatus: "Green" },
        { period: "Period 5/6 (No Passes)", start: "12:16", end: "12:26", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "12:26", end: "12:30", passStatus: "Yellow" },
        { period: "B Lunch", start: "12:30", end: "13:00", passStatus: "Green" },
        { period: "Transition (Yellow)", start: "13:00", end: "13:04", passStatus: "Yellow" },
        { period: "Period 8/9 (No Passes)", start: "13:04", end: "13:14", passStatus: "Red" },
        { period: "Period 8/9 (Passes Allowed)", start: "13:14", end: "13:42", passStatus: "Green" },
        { period: "Period 8/9 (No Passes)", start: "13:42", end: "13:46", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "13:46", end: "13:50", passStatus: "Yellow" },
        { period: "Period 10 (No Passes)", start: "13:50", end: "14:00", passStatus: "Red" },
        { period: "Period 10 (Passes Allowed)", start: "14:00", end: "14:30", passStatus: "Green" },
        { period: "Period 10 (No Passes)", start: "14:30", end: "14:32", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "14:32", end: "14:36", passStatus: "Yellow" },
        { period: "Period 11", start: "14:36", end: "15:18", passStatus: "Red" }
    ],
    C: [
        { period: "HR/Period 1", start: "08:30", end: "09:21", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "09:21", end: "09:25", passStatus: "Yellow" },
        { period: "Period 2 (No Passes)", start: "09:25", end: "09:35", passStatus: "Red" },
        { period: "Period 2 (Passes Allowed)", start: "09:35", end: "09:57", passStatus: "Green" },
        { period: "Period 2 (No Passes)", start: "09:57", end: "10:07", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "10:07", end: "10:11", passStatus: "Yellow" },
        { period: "Period 3 (No Passes)", start: "10:11", end: "10:21", passStatus: "Red" },
        { period: "Period 3 (Passes Allowed)", start: "10:21", end: "10:51", passStatus: "Green" },
        { period: "Period 3 (No Passes)", start: "10:51", end: "10:53", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "10:53", end: "10:57", passStatus: "Yellow" },
        { period: "Period 4 (No Passes)", start: "10:57", end: "11:07", passStatus: "Red" },
        { period: "Period 4 (Passes Allowed)", start: "11:07", end: "11:29", passStatus: "Green" },
        { period: "Period 4 (No Passes)", start: "11:29", end: "11:39", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "11:39", end: "11:43", passStatus: "Yellow" },
        { period: "Period 5/6 (No Passes)", start: "11:43", end: "11:53", passStatus: "Red" },
        { period: "Period 5/6 (Passes Allowed)", start: "11:53", end: "12:16", passStatus: "Green" },
        { period: "Period 5/6 (No Passes)", start: "12:16", end: "12:26", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "12:26", end: "12:30", passStatus: "Yellow" },
        { period: "Period 7/8 (No Passes)", start: "12:30", end: "12:40", passStatus: "Red" },
        { period: "Period 7/8 (Passes Allowed)", start: "12:40", end: "13:10", passStatus: "Green" },
        { period: "Period 7/8 (No Passes)", start: "13:10", end: "13:16", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "13:16", end: "13:20", passStatus: "Yellow" },
        { period: "C Lunch", start: "13:20", end: "13:50", passStatus: "Green" },
        { period: "Transition (Yellow)", start: "13:50", end: "13:54", passStatus: "Yellow" },
        { period: "Period 10 (No Passes)", start: "13:54", end: "14:04", passStatus: "Red" },
        { period: "Period 10 (Passes Allowed)", start: "14:04", end: "14:30", passStatus: "Green" },
        { period: "Period 10 (No Passes)", start: "14:30", end: "14:34", passStatus: "Red" },
        { period: "Transition (Yellow)", start: "14:34", end: "14:38", passStatus: "Yellow" },
        { period: "Period 11", start: "14:38", end: "15:18", passStatus: "Red" }
    ]
  };
  
