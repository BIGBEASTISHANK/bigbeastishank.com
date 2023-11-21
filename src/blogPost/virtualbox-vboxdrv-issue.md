---
title: "Virtualbox 'kernel driver not installed (rc=-1908)' issue on ArchLinux"
description: "I am going to show you how to fix 'kernel driver not installed (rc=-1908)' this issue on arch linux."
date: "2023-05-28"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "1 min"
htags: "Arch, Linux, Archlinux, Virtualbox, Virtual box, "
tags: ["Arch Linux", "Virtualbox"]
---

## Commands

Open terminal and enter this command

`$sudo pacman -S linux-headers`

then

`$sudo modeprobe vboxdrv`
