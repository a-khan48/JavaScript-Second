const users = [
    {
        id: 1,
        name: "John Doe",
        email: "JD@email.com",
    },
    {
        id: 2,
        name: "Lebron James",
        email: "LebronJames@email.com",
    },
    {
        id: 3,
        name: "Seth Rogen",
        email: "SethR@email.com",
    },
    {
        id: 4,
        name: "Doe John",
        email: "DJ@email.com",
    },
    {
        id: 5,
        name: "Obama",
        email: "Obama@email.com",
    }
]



function fetchUserById(userID) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let userFetch = users.find( user => user.id == userID)
        if (userFetch) {
            resolve(userFetch)
        } else {
            reject("User ID not found.")
        }
    })
    }, 1000);
}

fetchUserById(1)
    .then((userFetch) => {
        console.log("User ID found!", userFetch)
        return fetchUserById(2)
    })
    .then((userFetch) => { 
        console.log("User ID found!", userFetch)
        return fetchUserById(0)
    })
    .catch((error) => {
        console.error("Error Retrieving User Information:", error)
    });
