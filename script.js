showNotes();
const subject = document.querySelector("#subject");
const teacher = document.querySelector("#teacher");
const time = document.querySelector("#time");
const button = document.querySelector(".note-btn");
button.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        subject: subject.value,
        teacher: teacher.value,
        time: time.value
    }





    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    teacher.value = '';
    subject.value = '';
    time.value = '';
    showNotes();
});

function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
            html += `
        <div>
        <div class="card">
            <h1>${element.subject} </h1>
            <h2>${element.teacher} </h2>
            <p>${element.time}</p>
            <button onClick="deleteNote(this.id)" id="${index}" class="deleteBtn">Delete Note</button>
        </div>
        </div>`;
    });

    let insertNotes = document.getElementById("notes");
    if (notesObj.length == 0) {
        
        insertNotes.innerHTML = `Nothing to show! Please click on "Schedule Class" button to add a new class.`
        insertNotes.style.color = "gray";
        insertNotes.style.paddingTop = "10px";
        insertNotes.style.fontSize = "15px";
    } else {
        insertNotes.innerHTML = html;
    }
}


function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value;
    console.log("input event fired", inputVal);
    let cards = document.getElementsByClassName("card");
    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('h1')[0].innerHTML;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

