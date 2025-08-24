---
title: "I did the TryHackMe Chocolate Factory Lab, so here is a walkthrough"
date: 2025-8-23
image: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBoZGRgXGR8aHhkdHxsaHx8dHiAfHSghGh8lHRobITEhJSkrLi4uHSAzODMtNygtLisBCgoKDg0OGxAQGzIiICYwNy0tLS0yLTUvLS01LS8tLTUtLS8tLS8tLS4vLS0vLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ4BQAMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAEBQYDBwIBAAj/xABQEAABAwIDBQQECQgHBwMFAAABAgMRBCEAEjEFBhNBUSJhcYEUMpGhByMzQlKxwdHwJENicpKTsuE0U1SC0+LxFURjc4Oi0hZVwiU1o7PD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUA/8QAMREAAQMCAwYFBAIDAQAAAAAAAQACEQMhBBIxE0FRgaHwImFx0eEUMpGxUvEjM0LB/9oADAMBAAIRAxEAPwDmu26lz0l+HHAOK585UeurCpyvd/rHPNR+/FPUUgVUv5nFoHFc9VvN89XeDgmtoUhrNKHkaEAQtBjnIChz6jx0xlzwV0zTBFlEjaDs/KL/AGj9+KvdfiLgqcXE6Zjf34kq+nyLt6puMXHwfIzykajAxJOzkIYK1Uhyu1Uq0JQtAJjUAxy1PXDKi21w0ErUEpSJJmwx8pVwjKfZiH35bVwsgJAUoT4a3xjY7xCCtrwC0yNE5q/hIaeXwmmnXRe4AE9SATPtjGmz0+lNy24oQSFSZ06gyBYjHLnENsrAQtSlDU6ezHTPgrSpZfciESgDvUArNHtH4GNFRkhZqVSFI7e2O/TLUriKyKI+crsm8i5sDib2hWuWHEXqNFH78d03n2WlxCgRYiPDv+3HCa1kh/KdUkz4jD0Xky06hRr0wCHN0KKpn1zd1Y78ysbKffkZXFERfMpXunl0N8b09MkpTIGoNwTeT07gnrr34bUzZi8WjQ8razjznQqMbKSKqHo7aT5GB4k2wXsWiqn1fEBdvnKWsJHjKjJ8MHlgCDlkdCAbWtI8dMa1202F9l5yoiIhpQCR4JAjTuxI1HGze+Sts2tElUFI3VNo4dSytSYPbZJcyg2IKRCo8j5cjqDYDy2YDis2VKM4UQVJStMHXsrySDPMC5BtHbv0tMXM1N6SsgglTiy02iLkkoCVKgfN592LfZ+386YSsnNISscoKgSepCkplJNwfPGZ4ylVa4uEpPtNt9qS024t1SQnMPUbSBAQlSjGmpBvJxI1Wz6pHaUXwDqQSoCe9KiPLFwK0uryLbSl28IXBDka8NfMkXCVXiNcYVNSwtEohpQHaIAII6KTIB78eY9zU5Y12qhGql4J+WUnrnKhpqbx9uPFbWOqQmHTClwIWT/PphxV5cyS2bH1kwpPPkCpRNvs0nCypTnqG0xZIKiORME8tOWNLXS7qoubDD+EwqtqqaZAzqmRrcA6+eo54wRWOKElSgUjv8pAOo6d2F23XFHIm2Y6wJGtvx0jH7aVXlbn5x56/wCvl34OUwAN6UOEknQBeF7UdUCA4r1idTM6eXl00vgZipcUorLiwkaDObxrzwPSIKwYPSeZPd3XE41qVhISdQBoToJEgRNj44toYCjZzcx0779UbtGrKUA8VWpCU5lBRHM6+Xt6HCRe0nj+ccA/WP34+VzyVEZZAAgCZi568zrg+n3ZrFNh1DClIMEEQfPLM+7FGw0XP5WWoS90NH4TLc7bNO27NYHHUcgFq7J6kA9oRyw83tWy8njbO4vDE8SSUgaQACdRf3YL2Vu+9VqSKthplsNnLkltUyADYHmZjniu2RuuxToyI7ST6yFdoL/WkXnTEH4ho0utFPDu32XClV7o/OL/AGj9+PSa942Di/2j9+K7evdZhpK6hCyhMxwwM2VfQXkA8p9vLEc2SYAgE88Xp1G1G5mrNUpPpuLXLdVS6lRSXFyP0j9+LvdCofSyVIdeClGwStRk+E3OIjbVAaepU04rMU5cxFtQDA15HXFnuhtqGVNNjhnmqZWZ/S+b/dAwtTRVoG8Kyp9q1DIPpLoecizKkoVk73FBMg/oAz1jHh3bdQuM6WVAaAtCEjoIMj24m6ZzKYw3afBGIFxWsU28Fudqq509P5BY+pzGCtsCQDTNftO/4mPrhGDHCijGZUGoIkTfgg84/rD7seBJQcGhC7z7VapEZlUzZqCk5W87hCAUkZnAVkSZsnXwxxsV7v8AWuftH78Uu8NZxFmSTOvMnr44Vp2WlQgazqeQt9hxZtQN1UHYd1T7UCmud/rV/tn78ehXPfTc/aP34IOyT2rKGXnH18gO/AKaZRmItqCYOKhwdos7mOZquzvbDLanSFAkrWq4Ck3UTBBBv4R44CaZTnRmT65CT4KJSUnrBgg66YoKypCG3ATKlOK+s/6YTNXcZA5qCvGXER/Ar2Y57XEldQtAC5nvHSZMw+isgfjywXuNtXgvpJNjj3vcoKDihoXzHsOJmmN8bA3NThYHPyVpX9FOFKgFoIggHxnAW0dipeTlWqJEiIPge7Ev8HL7zw7QHCQSCskWMAwBMk3HdfXFTtN9xJbDakJHbK1qTmyhKSdJFrY4eIL21YafhbDUO4pEPg1p8wUVuHmQBA/Hhiw2Ns8U6A0myRyFsT7203Ut8RL+cerApzmFibguCBAJvgz0xxKELXVtBKwFJBZOZQIBsOITMdxxN1fEfz6fClZUVRQJdTGZSe8E/fiUe+Cppx1ThqXJV+gn8csFo2u4P95yiBKlUTsadZEDDahfqHcobr6VUiU5WZkCxIAex5tauLl3Q+yDjIhLWvgxbTpUufsj6IHI/ozj6dxEJEcdcQdEifbMjScOGnalTq2U11OXEAFSPRzIBgg/Ld49uMHDUlZbFYwXE+skMXAgcuLrBBPcR5s6vW/l0+EGkhKXdzW1T8YoeCf54XPfBYy4ZL7msxlT9c4dKrFctoUvfKBbr+etfHturcOm0aPr8mP8bCsq126O6H2TvcXC6Gf3GQGuC2+ppHPKkSepJm5wt2f8HXBMoq3soIJTlGVXj7MO3K1z/wBxpP3Y/wAbGK61ZH/3Ck/YT/jd+DtawkZunwlzEwV72ju6l1ITnUldjnSLykyk6+sDaehIvhNXblhbi1pqFozqKigISUgn1oB5kydJE2OGvpqioRW0x6AJEnr+d53tjw6p7icP0pkL1CeFeP3l7fVie1qt0d0+E5eXapNT7hISbVC7m8pETcTr364/I3ARxFOioXMR6ogeWpmD7cN3nnW/lKthI5gt5ev/ABNdY10x4bqnCUgVKBnAy56cgKJj1VcQDXQTPjgitX1DunwvF1oSM/Bo2Vlz0hyf1By87Y9VXwXNuC9Q4B+qL+/phrUVz6M/x2fh+vw6YkJjWTxACRzAmOeDKJ95z1KxgkiY4XaAIGo4sjUa4fb4geIv6fCSBBCR0vwTtpSQmqdEnXImbiNfDGqfggaNvS3f2EnFGg1GcN+mMcSPV4N48ONPfGNUV6woztCltqMiQRHrT8b4+GGGIrfz6fCUi0Ke2b8DVM2rP6Q4ojTMkQD1sbnFg3u0lLaWg4cqZgkXuZM3uSeeAUbRc/8AdKL92n/Hx7G0HOe06IjT5NIv48fHn1Kr/udPI+yDHFlm2RrGw0oSe2TexjTwvjw7sm3rnX6Iv4ifxOA11iyYTtKjM6DhpJ9z+MVVrl//AKjSSNRw025f1/XC+Mb/AN+yptn8UHvHuS3UhYLikZ4nKAdCDzPUYmj8ETP9pd/YTiwdXUJcDRrGAs/N4Bk6/wDF55TbuPTGdS68haGzVshxfqpLM5oF4Ge3mcMyvVZZrunwkf4zLlGufBGyP96dJ59gYJo/g2QyQU1K/wBlPvgzikqn325z1tOnsyczUW0m7sxhadqOcqgKHVNG4R7c0HDfUV3f99PhBrGt0Wat1E83Vewffj7/AOnAk/Kq/ZA+3BTLjqwoipbMAyOCUkeIK5HhAwCxtRamy4p/KQoJCVMGVGAYCQ4SbEG3KcLtKx/66fCtmKN2fQBpwLJzFIOWRYK5EibwbxiX32o+A
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






