const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')                // creates div element for notification
    notif.classList.add('toast')                               // adds a class 'toast' to the div
    notif.classList.add(type ? type : getRandomType()) 

    notif.innerText = message ? message : getRandomMessage()           // if message than show the message, else get a random message

    toasts.appendChild(notif)                                  // appends notif to 'toasts' container

    setTimeout(() => {                                         // removes notif from the DOM after 3000ms
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}