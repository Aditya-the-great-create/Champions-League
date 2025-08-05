function suggestTime() {
    const days = Array.from(document.querySelectorAll(".checkbox-group input[type='checkbox']:checked")).map(cb => cb.value);
    const time = document.getElementById("time").value;

    const suggestionBox = document.getElementById("suggestionBox");

    if (days.length === 0) {
        suggestionBox.style.display = 'block';
        suggestionBox.textContent = " Please select at least one day.";
        return;
    }

    const chosenDay = days[Math.floor(Math.random() * days.length)];
    suggestionBox.style.display = 'block';
    suggestionBox.innerHTML = ` You can try: <strong>${chosenDay} ${time}</strong>. We'll do our best to match this!`;
}
