const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

//another way to iterate over an array
//for Of - for (variable of iterable) {statement}
//removes the use of i - easier to read.
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`); 
}