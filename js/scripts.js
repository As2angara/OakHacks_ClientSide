
document.getElementById('discover_tab').addEventListener('click', getEvents);
document.getElementById('addEvent').addEventListener('submit', addEvent);


function getEvents() {
    fetch('sample.json')
        .then((res) => res.text())
        .then((data) => {
            data.forEach((event) => {
                output += `
                    <div class="card">
                        <img src="./images/cooking.png" style="width:100%">
                        <h3>${event.name}</h3>
                        <p>${event.description}</p>
                        <p><button>Register</button></p>
                        </div>
                
                `

            })
        });
}


function addEvent() {

    let name = document.getElementById('event_name').value;
    let link = document.getElementById('meeting_link').value;
    let description = document.getElementById('desc_of_event').value;

    //let num = Math.floor(Math.random() * 1000000);
    let num = 83;

    fetch(`http://127.0.0.1:5000/event/${num}`, {
        method: 'PUT',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'

        },
        body: JSON.stringify({name:name, description: description, meeting_link: link,
                                    donation_amount: 0.0, event_date: "5/5/5", user_id: 55})

    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}


function hostevent_form() {
    window.location.href = "html_pages/hostevent.html";
}
