# Pomodoro app 

Pomodoro app is a web-based productivity tool that helps users manage their time effectively. It is built using Next.js, a popular React-based web framework that provides server-side rendering and other advanced features. The user interface is built using React, a popular JavaScript library for building user interfaces.

<br/>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

<br/>

## Overview

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshots

![App Screenshot](/ScreenshotOne.jpg)
![App Settings](/ScreenshotTwo.jpg)

<br/>

### Links

-  [Live Site Pomodoro App](https://pomodoro-app-lilac.vercel.app/)

<br/>

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Context API

<br/>

### What I learned

Overall, building my Pomodoro app with Next.js was a valuable learning experience that has provided me with a comprehensive understanding of the latest version of the framework, best practices for folder structure, routing, linking pages, server-side vs. client-side rendering, and the benefits of using Next.js. I look forward to using this knowledge in future projects and continuing to build high-quality apps with ease.

<br/>

```tsx
export default function Timer () {
  const { color } = useColor() as ColorContextProps
  const { minutes, percentage, seconds, isPaused, setIsPaused } = useTimer() as TimerProps

  return (
    <div className='relative w-[14rem] h-[14rem] bg-gradient-to-br shadow-2xl shadow-[#D7E0FF]/20 from-[#161932] from-20% via-[#1E213F] to-[#212840] p-[0.8rem] rounded-full md:w-[18rem] md:h-[18rem]'>
      <CircularProgressbar
        value={percentage }
        text={`${minutes}:${seconds}`}
        background={true}
        backgroundPadding={5}
        strokeWidth={4}
        styles={buildStyles({
          textColor: '#D7E0FF',
          pathColor: `${color === '' ? '#F87070' : color}`,
          trailColor: '#161932',
          backgroundColor: '#161932'
        })}
      />
      <PlayPauseButton isPaused={isPaused} setIsPaused={setIsPaused} />
    </div>

  )
}
```
<br/>

## Author

- Github - [Patricio Huerta](https://github.com/HpatricioH)
- LinkedIn - [@PatricioHuerta](www.linkedin.com/in/patricio-huerta)



