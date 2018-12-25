Webpage connecting to Youtube API and allows users to type video names and plays videos.

## Example:

### 1) Default view of webpage when first starting up

![screenshot](/screenshots/default_search.PNG)

### 2) After searching for "machine learning" in search bar

![screenshot](/screenshots/example2.PNG)

## Installing:

If going to install, it is required to

1. run "npm install --save axios" in the terminal where the current directory is the main project folder (i.e. the main "VIDEOS" directory)
2. create one's own Youtube API KEY:
   I) Visit https://console.developers.google.com/apis/
   II) Click "ENABLE APIS AND SERVICES"
   III) Search "youtube", select "Youtube Data API v3" and Enable this API
   IV) Select "Create Credentials" and follow the prompt
   V) After creating, copy the created key on the screen, go into this project's file "youtube.js" located under the directory "/src/apis/youtube.js", and assign the const KEY string to the key you created.
   VI) in the terminal, run "npm start"
