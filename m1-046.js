const ps = require("prompt-sync");
const prompt = ps();

let startTime = prompt("Insert your start time in this format: HH:MM. ");
let AM_PM = prompt("Insert your start time is AM or PM:  ");
let durationTime = prompt("Insert the duration time in this format: HH:MM. ");
let dayWeek = prompt("Insert what day of week it is: (if you don't want to specify that, don't write in this field): ");

function add_time(startTime, AM_PM, durationTime, dayWeek) {
    const startArray = startTime.split(":");
    const durationArray = durationTime.split(":");
    let new_minutes = Number(startArray[1]) + Number(durationArray[1]);
    let new_hours = Number(startArray[0]) + Number(durationArray[0]);
    let add_hours = new_minutes / 60;
    let add_days = new_hours / 12;
    if (add_hours >= 1) {
        new_hours += (Math.round(add_hours));
        new_minutes -= 60;
    }
    if (add_days >= 1) {
        if (AM_PM == "AM") {
            new_hours -= 12;
            AM_PM = "PM"
        } else {
            new_hours -= 12;
            AM_PM = "AM";
            console.log(`${Math.round(add_days)} days later`)
        }
    }
    console.log(`${new_hours}:${new_minutes} ${AM_PM}`);
}

add_time(startTime, AM_PM, durationTime, dayWeek)