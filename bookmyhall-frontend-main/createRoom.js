async function addRoom() {
    let amentiesEl = document.getElementById("amenties");
    const amenties = [...amentiesEl.options].filter(option => option.selected).map(option => option.value || option.text);

    const body = {
        name: document.getElementById("hallname").value,
        seatingcapacity: document.getElementById("seatingcapacity").value,
        price: document.getElementById("price").value,
        amenties: amenties
    }

    let fetchdata = await fetch("https://bookmyhall-zen.herokuapp.com/rooms", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    let response = await fetchdata.json();
    if (response.status === 200) {
        alert("insert successfull");
        window.location.href = "/index.html"
    }
}