<h1 align="center">
  A Gatsby YouTube Jukebox
</h1>


I love YouTube, but it doesn't allow you to queue videos and even when searching for something it stops the current video.  I had a look around GitHub, but couldn't quite find what I was looking for, so I built my own using  <a href="https://www.gatsbyjs.org">Gatsby</a>  If I'm honest, I wanted a small project to try Gatsby.  I've been using React for a few projects at work, but hadn't had the opportunity to try Gatsby.

What I wanted to be able to do is to search and queue videos without stopping the currently playing video.  I also wanted to be able to manipulate the order of videos in the queue.  For example, move items up and and down, remove or 'play now'.

**Installation**

This README assumes you have your environment set-up with Node, Gatsby etc. and won't be covered any further here.

Simply clone the repo and run

```
gatsby develop
```

**API Keys**

Google API Keys - To be able to use the Search API and the YouTube Video player components, you need to supply two keys.  The API key and the OAuth Client Id key.  The first is used for using the YouTube API to serch for videos.  The second is to play the videos.

As with Node setup, I'm not going into how to obtain the keys.  There's plenty of help on the Internet and Google's own site is helpful enough.

The one pointer I will add is when you have the OAuth, you need to specify the URLs your instance that the app will run on.  E.g. http://localhost:8000.  If you don't do this, the app won't be able to authenticate.

When you have the keys, update the two files in the config folder.

**Using the Jukebox**

The UI is broken into three main components...

- **Video Player** This is where the current video will play.  When the app starts, it displays a message to log into and search.
- **Search Panel** This is the horizontal panel accross the bottom of the screen.  This panel allows the user to search (once logged in) and the results are displayed under the search field.
- **Queue Panel** This is the panel on the right-hand side.  This panel houses the functionalilty to login in to your Google account as well as the videos you have queued.

Once the app starts, you need to log in to you Google/YouTube account, you'll have one of these if you got the API and Client keys.  Once you do, can search, queue and play videos.  If you don't want to log into your Google account, just set the logged-in state var to true.  I'm thinking of using the access to auto-create playlists based the videos queued, but that's for later.

- **Searching** Just type in the search box and click the button.  Click any of the results to play the first video.  Subsequent videos you click will be queued up.  When a video finishes playing, the next video starts and so on until the queue is empty.

- ** Queue** You can manipulate the queue by using up and down icons.  You can remove items by clicking the 'x' icon.  Lastly, if you want to play something from the queue immediately, just click the image of the item in the link.


**Tests**

I'm sorry to say there are no tests and this is something I'll address soon...

