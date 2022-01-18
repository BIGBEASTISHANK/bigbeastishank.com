---
title: "Fixing Valorant Lags, Stuttering, FPS drops on Intel UHD integrated graphics"
description: "Valorant is a light weight game playable on almost any hardware that are manufactured nowadays, you can play it without having 
a dedicated gpu. Sometimes it becomes very irritating when the game lags or random fps drops while crucial game moments, which ultimately leads to uninstalling the game or not playing it. I've addressed a similar issue while playing on the Intel UHD 630 gpu. In this blog, I'll be telling you how I fixed the issue in 10 minutes."
date: "2022-01-16"
author: "Kushagra Raj"
authlink: "https://kushagraraj.me/"
read_time: "2 min"
---

![image](https://wallpaperaccess.com/full/3037903.jpg)

# Overview
Valorant conflicts with the newer edition of the Display Driver of Intel UHD series graphics, which they confirmed will be solving in the future patches.
Even though you try optimizing your pc and even the game wouldn't fix the issue, as it the problem with the device driver itself.

# Uninstalling the Newer Versions of the Driver
It is not **recommended** to use the older versions of device drivers as it has some security issues, but since valorant is not compatible with the newer versions i.e. above 27 therefore we will have to install older version of the driver from intel's website.
To uninstall the existing driver you'll need a Display Driver Uninstaller or [DDU](https://www.guru3d.com/files-get/display-driver-uninstaller-download,1.html)

## Steps

### Uninstalling the drivers

- Download [Display Driver Uninstaller](http://www.guru3d.com/files-details/display-driver-uninstaller-download.html).
- Extract the file and then run DDU **as an administrator**.
- You’ll see three buttons available on the left side. If you’re installing a new driver for your graphic card, simply select `Clean and Restart` button.
- **Optional**: You can also set Windows so it won't download drivers all by itself.
- Restart your computer.

### Installing driver
- Download the older version i.e. [Intel UHD graphics Driver version 26.20.100.8141](https://www.intel.com/content/www/us/en/download/19344/29530/intel-graphics-windows-dch-drivers.html?) and install it.
- Restart your computer once again.

This should fix all the lags in-game.
\
\
\
**Originsl: [Here](https://kushagraraj.me/blog/fixing-valorant)**

**Full Credit: [Bruce Mac Gary](https://github.com/brucemacgary)**