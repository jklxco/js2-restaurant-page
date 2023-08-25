function openingTimes() {
    let timesArray = ["Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm",
    ]
    const timesDiv = document.createElement('div');
    const timesHeader = document.createElement('h2');
    timesHeader.textContent = 'Opening Times';
    timesDiv.appendChild(timesHeader)
    const timesList = document.createElement('ul');
    timesArray.forEach((item) => timesList.appendChild(addToArray(item)));
    timesDiv.appendChild(timesList)
    return timesDiv 
}

function addToArray(item) {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem
}

export default function contact(){
    const content = document.createElement('div')
    content.appendChild(openingTimes());
    return content
}