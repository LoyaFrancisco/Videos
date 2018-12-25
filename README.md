Webpage connecting to Youtube API and allows users to type video names and plays videos.

## Example:

### 1) Default view of webpage when first starting up

![screenshot](/screenshots/default_search.PNG)

### 2) After searching for "machine learning" in search bar

![screenshot](/screenshots/example2.PNG)

## Installing:

If going to install, it is required to

- run "npm install --save axios" in the terminal where the current directory is the main project folder (i.e. the main "VIDEOS" directory)
- create one's own Youtube API KEY:
  1.  Visit https://console.developers.google.com/apis/
  2.  Click "ENABLE APIS AND SERVICES"
  3.  Search "youtube", select "Youtube Data API v3" and Enable this API
  4.  Select "Create Credentials" and follow the prompt
  5.  After creating, copy the created key on the screen, go into this project's file "youtube.js" located under the directory "/src/apis/youtube.js", and assign the const KEY string to the key you created.
  6.  in the terminal, run "npm start"
