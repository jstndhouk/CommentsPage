var submitbutton = document.getElementById('submitbtn');
var body = document.body;

//This function gets all the comments to display on the page at the time of page load.
const getComments = () => {
    fetch('/getComments', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            //Future development:  Modularlize this function to clean it up a bit.
            console.log('Sucessful GET Request:', data);
            //By default, append child puts the element at the bottom of the page.  To allow the latest comment to be first on the page, I reversed the array.
            let reversedData = data.reverse();
            //Deconstruction, for less typing.
            reversedData.forEach(({name,message,created}) => {
                //Future development:  This can be reduced to a couple lines.
                let commentElement = document.createElement('article')
                let messageElement = document.createElement('h2');
                let commentInfo = document.createElement('h4')
                messageElement.textContent = message;
                //Future development:  Format this date to the client's liking
                commentInfo.textContent = `Posted by: ${name} on ${created}`
                commentElement.appendChild(messageElement)
                commentElement.appendChild(commentInfo)
                body.appendChild(commentElement)
            })
            return data;
        })
        .catch((error) => {
            console.error('Error in GET request:', error);
        });
}
//Function execution
getComments()

//Creates a comment by hitting the /createComment route
const createComment = (comment) => {
    fetch('/createComment', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comment),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST Request:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });
}

//Event listener for the submit button.  It puts the content of the page into a neat object, then passes it to the createComment function to send it to the backend.
submitbutton.addEventListener('click', function (event) {
    let newNameElement = document.getElementById('inputName')
    let newNameText = newNameElement.value.trim()
    let newMessageElement = document.getElementById('inputComment')
    let newMessageText = newMessageElement.value.trim();
    const newComment = {
        name: newNameText,
        message: newMessageText
    };
    createComment(newComment);
    //Resets the form on the page
    document.getElementById('myForm').reset();
})

//Future Development:
//Add a delete button on each comment to remove them.  Make sure to ask the user if they are sure they want to delete the comment
//Add an edit button for each comment to change the content of the message only.  This can also modify the date on the comment.
//Add a delete all button near the top of the page.  Again make sure to ask the user if they are sure they want to remove all comments.  This can take advantage of the given delete route.
//Add a footer to give credit to the developer :)
//If more content were to be added, I would implement React to handle components, state, etc..
//Implement real-time updating without refreshing the page.
//Filtering to find comments by a specific user
//Filtering to find comments by a created date.
//Make the page look a little prettier with some fancy CSS :)
//Finish a jest test for the creation of a comment.
