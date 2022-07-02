const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents default behavior triggered by a given event. good for form submission stuff
    //so when submitting the information, it doesn't redirect to the action page (HTML). 

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#names');
form.addEventListener("submit", function (e) {
    e.preventDefault(); //prevents redirection when submitting a form. 
    const catName = input.value; //puts in the value of whatever the user typed in
    const newLi = document.createElement("LI"); //new LI addedwhen the form is submitted each time
    newLi.innerText = catName; //variable newLi with .innerText - adds whatever input.value for catName
    list.append(newLi); //append the list with the newLi 
    input.value=""; //resets the box for new inputs 
});
