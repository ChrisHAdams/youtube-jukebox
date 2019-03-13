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

**API Key**

To be able to use the YouTube Search API, you need a Google/YouTube API key.  As with Node setup, I'm not going into how to obtain the keys.  There's plenty of help on the Internet and Google's own site is helpful enough.

When you have the key, update the file in the config folder.

**Using the Jukebox**

The UI is broken into three main components...

- **Video Player** This is largest panel and is where the current video will play.  When the app starts, it displays a message to search fpr videos.
- **Search Panel** This is the horizontal panel across the bottom of the screen.  This panel allows the user to search (once logged in) and the results are displayed under the search field.
- **Queue Panel** This is the panel on the right-hand side.  This panel houses the functionalilty to login in to your Google account as well as the videos you have queued.

Once the app starts, you can search, queue and play videos.  I've also used Chrome and ChromeCast to cast the application onto a TV.

- **Searching** Just type in the search box and click the button.  Click any of the results to play the first video.  Subsequent videos you click will be queued up.  When a video finishes playing, the next video starts and so on until the queue is empty.

- **Queue** You can manipulate the queue by using up and down icons.  You can remove items by clicking the 'x' icon.  Lastly, if you want to play something from the queue immediately, just click the image of the item in the link.

**Theme Change Button** The Theme Change button toggles the UI between a light and dark theme.

**Other Points** Once you have queued a few videos, you can click the full-screen icon in the video play.  The app will then just keep playing your queued videos til they run out.

**Browsers** I have tried this app using both Safari and Chrome for Mac OSX.

**Tests**

I'm sorry to say there are no tests and this is something I'll address soon...

