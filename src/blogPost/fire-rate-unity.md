---
title: "Controll Fire Rate in Unity!!"
description: "When you make anything related to shooting in unity, you need to controll your fire rate, and here is how you can do it."
date: "2023-02-15"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "1 min"
htags: "Unity, Game Development, Code Snippet, "
tags: ["Unity", "Game Developmentelopment", "Code Snippet"]
---

# # Get Started

Their is nothing much to tell you can just understand what is written in the code with comments.

```cs
// Variables
 /////////////

 private float nextFire;

 [Header("Values")]
 [SerializeField] private float fireRate;

 // References
 //////////////

 private void Update()
 {
     // Executing the command according to fireRate;
     if (Time.time >= nextFire)
     {
         // Your Code here

         // Changing nextFire with fireRate
         nextFire = Time.time + 1f / fireRate;
     }
 }
```

---

###### Thanks For reading
