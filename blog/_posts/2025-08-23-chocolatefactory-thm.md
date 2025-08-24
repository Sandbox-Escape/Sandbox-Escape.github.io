---
title: "I did the TryHackMe Chocolate Factory Lab, so here is a walkthrough"
date: 2025-8-23
image: https://dvanmosselbeen.github.io/TryHackMe_writeups/chocolatefactory/files/golden-ticket.jpg
---

I decided to go through the TryHackMe Chocolate Factory room. Here is a walkthrough of what I did.

### Part 1: Getting the key

Question one is to find the answer key as shown below.

![An image of question one on the TryHackMe Website reading: "Enter the answer key you found!"](https://files.catbox.moe/gx15cn.png)

I will start by connecting to the VPN Server with OpenVPN.

This is a screen recording of me doing exactly that

<video controls width="100%">
  <source src="https://files.catbox.moe/lfln6b.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

As you can see it is quite easy to do so even if the AttackBox seems tempting.

I will now start with a simple Nmap scan

![The terminal output of said Nmap scan](https://files.catbox.moe/kcadh3.png)

While nothing interesting, the http port does seem interesting, so let's check it out.

I will need to go to http://10.10.30.125 as that is my given target IP.

![A screenshot of the resulting page](https://files.catbox.moe/z1p7u9.png)

I can't really do anything with this. I tried a few basic credentials like 'Admin' 'Admin' and even tried SQL Injections but nothing. 
Looking at the terminal output I see an FTP service. I will try using the Nmap Banner command command and see the result.

I will now run the following command: nmap --script=banner 10.10.30.125 -p21-125 -v

![here is the output btw :)](https://files.catbox.moe/r7m69l.png)

Well that was a waste of time. All I got is a welcome message :/

Remember the original scan I did. Well I tried every port listed and got an interesting result from port 113 when doing a Netcat scan.

![Idk what to put here 😭](https://files.catbox.moe/l0v4ls.png)

This is great progress from before.

I will go to the following address as in: http://10.10.30.125/key_rev_key

Let's see what happens!

![A prompt for a download from said address :)](https://files.catbox.moe/pwnco2.png)

Well what happens if I extract the file.

![I scrolled down after running: strings key_rev_key](https://files.catbox.moe/34oz92.png)

And there is the answer. Submitting it shows it is correct.


### To be continued...






