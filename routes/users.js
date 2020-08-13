var express = require('express');
var router = express.Router();
var fs = require('fs');

let user_data;

let tempdata = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },
    { x: 10, y: 0 },
    { x: 11, y: 0 },
    { x: 12, y: 0 },
    { x: 13, y: 0 },
    { x: 14, y: 0 },
    { x: 15, y: 0 },
    { x: 16, y: 0 },
    { x: 17, y: 0 },
    { x: 18, y: 0 },
    { x: 20, y: 0 },
    { x: 21, y: 0 },
    { x: 22, y: 0 },
    { x: 23, y: 0 },
    { x: 24, y: 0 },
]

/* GET users listing. */
router.get('/', function(req, res, next) {

    let rawData = fs.readFileSync("./public/Test JSON.json");
    let rowParsed = JSON.parse(rawData);
    row = []
    user_data = rowParsed.members;
    rowParsed.members.forEach((element) => {
        row.push({ name: element.real_name, timezone: element.tz, id: element.id })
    });
    res.send(row);
});

const gethoursMins = (time) => {
    let mins;
    let hours;
    if (time[1].includes('PM')) {
        hours = 12 + parseInt(time[0]);
        mins = time[1].replace("PM", '');
    } else {
        hours = time[0];
        mins = time[1].toString().replace("AM", '');
    }
    return hours + ':' + mins;
}


router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    let result = [];
    user = user_data.map((value, index) => {
        if (value.id == id) {
            value.activity_periods.map((element, i) => {
                let start = element.start_time.split(" ");
                let end = element.end_time.split(" ");
                let start_time = start[3].split(':');
                let start_hm = gethoursMins(start_time);
                let start_date = new Date(start[0] + ' ' + start[1] + ' ' + start[2] + ' ' + start_hm);
                let end_time = end[3].split(':');
                let end_hm = gethoursMins(end_time);
                let end_date = new Date(end[0] + ' ' + end[1] + ' ' + end[2] + ' ' + end_hm);

                if (end_date < start_date)
                    end_date.setDate(end_date.getDate() + 1)

                const difference = end_date - start_date;

                var msec = difference;
                var hh = Math.floor(msec / 1000 / 60 / 60);
                msec -= hh * 1000 * 60 * 60;
                var mm = Math.floor(msec / 1000 / 60);
                msec -= mm * 1000 * 60;
                var ss = Math.floor(msec / 1000);
                msec -= ss * 1000;
                const act_time = hh + (mm / 60);
                console.log(act_time);

                let newData = tempdata.map((element) => {
                    if (element.x == start_time[0])
                        element.y = act_time.toFixed(2)

                    return element
                })
                result.push({
                    start_date: new Date(start[0] + ' ' + start[1] + ' ' + start[2]),
                    end_date: new Date(end[0] + ' ' + end[1] + ' ' + end[2]),
                    data: newData,
                });
            })
        }
    });
    res.send(result)
});
module.exports = router;