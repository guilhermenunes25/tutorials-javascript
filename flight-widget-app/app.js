const tableBody = document.getElementById("table-body");

let flights = [
    {
        time: "08:11",
        destination: "AMSTERDAM",
        flight: "NL 432",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "11:27",
        destination: "LONDON",
        flight: "GB 602",
        gate: "C 21",
        remarks: "BOARDING"
    },
    {
        time: "14:25",
        destination: "ZURICH",
        flight: "CH 232",
        gate: "B 04",
        remarks: "ON TIME"
    },
    {
        time: "15:50",
        destination: "FRANKFURT",
        flight: "LH 140",
        gate: "E 12",
        remarks: "DELAYED"
    },
    {
        time: "16:25",
        destination: "MADRID",
        flight: "ES 533",
        gate: "B 08",
        remarks: "CANCELLED"
    }
]

const destinations = ["AMSTERDAM", "LONDON", "ZURICH", "FRANKFURT", "MADRID", "BUCHAREST", "MARSEILLE", "MUNICH", "STOCKHOLM", "OSLO"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 16;


function populateTable() {
    for(const flight of flights) {
        const tableRow = document.createElement("tr");

        for(const flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail]);

            for(const [index, letter] of word.entries()) {
               const letterElement = document.createElement('div');

                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index )
            }

            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
}

populateTable();


function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789";
        if(maxNumber) {
            const newNumbers = numbers.slice(0, maxNumber + 1);
            return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
        }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour;

    if(hour < 24) {
        hour++;
    }
    if(hour >= 24) {
        hour = 1;
        displayHour = hour;
    }
    if(hour < 10) {
        displayHour = "0" + hour;
    }

    const minutes = generateRandomNumber(59); 

    return displayHour + ":" + (minutes < 10 ? "0" + minutes : minutes);

}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " +  generateRandomNumber() +  generateRandomNumber() +  generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(), 
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    });

    tableBody.textContent = " ";
    populateTable();
}

setInterval(shuffleUp, 2000);
