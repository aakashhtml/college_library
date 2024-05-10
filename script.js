const issueForm = document.getElementById('issueForm');

issueForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const requests = document.getElementById('requests').value;

    const issueDate = new Date(); 
    const dueDate = new Date(issueDate.getTime() + (14 * 24 * 60 * 60 * 1000)); 

    let fine = 0;
    const returnDate = new Date(dateInput.value); 

    if (returnDate > dueDate) {
        const daysLate = Math.floor((returnDate - dueDate) / (24 * 60 * 60 * 1000)); 
        fine = daysLate * 2; 
    }

    const message = `
        Name: ${name}
        Email: ${email}
        Item: ${item}
        Quantity: ${quantity}
        Special Requests: ${requests}
        Issue Date: ${issueDate.toDateString()}
        Due Date: ${dueDate.toDateString()}
        Return Date: ${returnDate.toDateString()}
        Fine: $${fine}
    `;

    alert(message);
});
