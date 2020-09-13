
document.getElementById('discover_tab').addEventListener('click', getEvents);
document.getElementById('addEvent').addEventListener('submit', addEvent);


function getEvents() {
    fetch('http://127.0.0.1:5000/events')
        .then((res) => res.text())
        .then((data) => {

            let num;
            let output = '';
            JSON.parse(data)[0].forEach((event) => {
                num = Math.floor(Math.random() * 6) + 1;

                output += `
                    <div class="card">
                        <img src="./images/pic${num}.png" style="width:100%">
                        <h3>${event.name}</h3>
                        <p>${event.description}</p>
                        <p><button>Register</button></p>
                        </div>
                   
                `;
            });

            console.log(JSON.parse(data)[0]);
            console.log(num);

            document.getElementById('card-grid').innerHTML = output;
        });
}


function addEvent() {

    let name = document.getElementById('event_name').value;
    let link = document.getElementById('meeting_link').value;
    let description = document.getElementById('desc_of_event').value;

    let num = Math.floor(Math.random() * 1000000);

    fetch(`http://127.0.0.1:5000/events/${num}`, {
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
