//these are globals, maybe put them inside a function?
    const fs = require('fs')
    //const scoreList = require('./scores.json') //this only reads the file once, then acceses the cached data for subsequent reads. use readFile for dynamic data
    let count = 0;
    let time = 0;

    function increment() {
        count += 1;
        document.getElementById('counter').innerHTML = count;
    }
    function submit() {
        let highScore = document.getElementById('pressPerSecond').innerHTML;
        alert(highScore);
        let scores = require('scores.json')

        // Option 1
        fs.readFile('./scores.json', 'utf8', (err, data) => {
          if (err){
            console.log('File failed to read:', err)
            return
            } else {
              console.log('File read successful:', data)
            scores = JSON.parse(data) //now it is an object
            scores.table.push({id: time, score: highScore}) //add some data
            json = JSON.stringify(obj) //convert it back to json
            fs.writeFile('./scores.json', json, 'utf8', callback) // write it back
            }
          })


        /* Option 2
        let scoreList = {
          table: []
        }
        scoreList.table.push(highScore)
        document.getElementById('highScoreSpan').innerHTML = highScore
        let json = JSON.stringify(scoreList);
        const fs = require('fs');
        fs.writeFile('scores.json', json, 'utf8', callback);
        */
    }
    function startTimer(event) {
        let time = document.getElementById("time");
        let seconds = (event.timeStamp / 1000).toFixed(2);
        let pressPerSecond = (count / seconds).toFixed(2)
        document.getElementById('pressPerSecond').innerHTML = pressPerSecond;
        return pressPerSecond;
    }
    document.body.addEventListener("click", startTimer);

    function restart() {
        location.reload();
    }
   /* postData(`http://example.com/answer`, { answer: 42 })
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
    function postData(path = ``, data = {}) {
        // Default options are marked with *
        return fetch(path, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses JSON response into native Javascript objects
    }
*/
