// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        const userId = data.id;
        const element = document.createElement('p');
        element.textContent = `New ID: ${userId}`;
        document.body.appendChild(element)
    })
    .catch(error => {
        const message = document.createElement('p');
        message.textContent = `${error}`;
        document.body.appendChild(message)
    })

}
submitData("Steve", "steve@steve.com");