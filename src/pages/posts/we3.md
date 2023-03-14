---
layout: '@/templates/BasePost.astro'
title: Building We3
description: A summary of my experience at We3, some of the challenges we faced and some decisions we made over the years.
pubDate: 2023-03-14T00:00:00Z
imgSrc: '/assets/images/we3-cover.png'
imgAlt: 'The We3 team in a team session'
---

[We3](https://www.we3app.com) is my latest venture and what I consider **my biggest professional achievement**. We3 pushed my abilities to the next level technically and it also challenged me to become a better version of myself almost all aspects of my life. 

I founded this company with my partner Julian to solve a direct pain point he was experiencing.
The simplest way to describe We3 is a mobile app that helps you make genuine new friendships. We launched the app around 6 years ago on all mobile stores and since then we managed to change the lifes of thousands of people by connecting them to compatible people around them. We wrote about [our story and mission](https://www.we3app.com/about/) directly on the website and it is worth a read.

The core idea behind the service is to radically change how painful, awkward and inefficient it is to connect with compatible people. In short, it aims at removing the randomness that led to you meeting your best friend and instead, it shows you all of your potential best friends nearby. The process makes the process of discovering the best friends you never met as simple and efficient as possible. We3 combines social science and the latest tech in an attempt to solve the epidemic of loneliness.

It turned out to be a succes for many, we can see it in the store review sections with over 10, 000 5-star reviews, millions of accounts created and messages set. I can proudly say that I am happy with what we accomplished, what we built and the impact we had.


## How it works
### The quiz
The app starts by showing you statements on which you swipe.
The statements will be different for each person as we are tryin to understand the person well enough to confidently match them later on.

### The matching
With all the factors we are considering from the previous step, we now let the algorithm do the magic by finding the best matches for you. This is the juicy part, because instead of going to random meetups, you now have an AI doing the heavy lifting for you. It applies all the latest social science and uses the latest tech to sort through thousands of people and extract your personal gold nuggets.

### The Chat
Every time we find a match that fits, we present it to you. You can check out your compatibility score, the traits, interests and goals you have in common. When you start the group, you can start chatting and work towards meeting up in real life once trust is established.

## Under the hood

### The stack

#### Backend
We3's backend runs on Postgres, Ruby on Rails with the Grape gem and aims to be the source of truth  while still remaining simple, RESTFUL and scalable. Postgres gave us lots of power and scalability, it allowed us to quickly sort through thousands of people around the world and filter based on proximity, with it's built-in capability of evaluating distance directly in queries.

The algorithm responsible for the high quality matching was challenging to implement in a way that scales, is highly responsive and remains highly accurate.

What a user responds on one statement will change what the next statements are in order to built the most complete psychometric profile we can with the least amount of user input. This is also a challenge of communitacion between the client and the server to avoid spamming the server yet always getting the correct next statements. It is also a challenge of organizing the data well in the database to efficiently access the next dynamic statements based on the previous answers.

Evaluating compatibility between users based on the hundreds of answers they provided is also something that required meticulous analysis in order to build a solution that scales. A naive approach that would go through each answer of each user and compare it ho each answer of each other user would not scale to more than a dozen users.

Once the above was in place, we still had the challenge of how to tweak the algorithm when evaluating how much weight to put on each comparison point between 2 users. The power of evaluating the compatibily between 2 users is great, but insufficient for We3 as we match people in groups of 3 to remove as much of the awkwardness as we can around meeting new people. The challenge was then to maximize a three way compatibility across thousands of users.

These challenges were very interesting technically and very rewarding to solve, I had to be creative, patient and consider tradeoffs that I had to discuss and negociate with my partner in order to make the best decisions.

We were able to scale the backend to successfully meet the demand of over a Million accounts.

Behind the scenes, we also use services such as Pusher, AWS, Google Cloud, Firebase, Twilio and OneSignal that help us deliver real time updates, live chats, background processing for matching and other utilities we offer as well as reaching users through SMS and Pushes.

The backend is completely stateless by design and mostly aimed at being restful in order to make it predictable and intuitive. The API interface was fully documented and is testable via a secured web access.

#### Frontend
The app is built with a hybrid framework and uses the same codebase for Android, iOS as well as a progressive web app.
For a while I was the only developer and at our peak, we were 4 developers, so we had to be very efficient with our resources. At the same time, we wanted to be present on all platforms to reach as many users as possible everyone the best chances of matching.
We ended up using Ionic with Angular.js and the app still runs on this tech to this day.
The front-end includes many services to consume the backend API and other services such as Firebase, Pusher and OneSignal. It provides native functionalities such as support for in-app purchases, pictures, location tracking and push notifications.


#### The team
We have been bootstrapped from the beginning. We invested our own money in the initial project and 
revenue from other projects to kickstart the project.

Over time, and as we started to bring in revenue, we hired help to support our continuous improvement of the app.

We hired over 5 developers to contribute to the app under my technical supervision and mentoring. I interviewed, on-boarded, coached mentored them to ensure their productivity and growth.

Julian was doing the initial filtering to ensure a good culture fit and from that point on, I was highly focused on evaluating the technical abilities of each candidate. 

**I did not believe in technical tests** as I was looking for devs with a growth mindset that were curuious and dynamic, not necessarily highly qualitfied in our tech stack. I also wanted them to be good problem solvers and good communicators that are able to consider tradeoffs and nuances when considering design decisions. I was also looking for devs that were self aware and driven.
A technical test on it's own is not the most efficient way to get this information.
I could evaluate those things through conversations by asking them about their toolsets and thought process around certain tool selection. I could ask about their theight process in making decisions that turned out to be mistakes and ask them to show my that code. I could also ask about great moves and make them explain how a certain piece of code they were proud of worked. I felt like this approach was telling me much more, much faster about the candidate than a simple technical evaluation on criterias I would arbitrarily choose and it was much more repsectful of the candidate's time.

The technical onboarding was mainly to get set-up by following the project readme. If anything wasn't clear, the clarification would be the first contribution of that developer to the codebase. I then built a docker setup for a quick predictible setup, but the developer could follow instructions to setup their own machine.

Once onboarded, I would very closely verify and comment on pull requests to ensure we are on the same page.

From this point on, the challenge would be to agree on design, logic and best practices.

### Market fit and viability
As product, We3 solves the problem of a very select set of people. However, we didn't manage to get in front of those users in a sustainable way and in big enough numbers. We also struggled to expand to other types of users. 
We3 is able to grow and is self sustainable, but it fails to bring in enough revenue to sustain the lifestyle my partner and I are aiming for. It also doesn't grow fast enough to build the team it requires in order to reach market fit. We are therefore now treating it more like a side project.
