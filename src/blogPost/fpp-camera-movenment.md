---
title: "FPP camera movenment in Unity3D"
description: "We have made the players' movement, but what now? Now we need to add camera movement so that the player can see things."
date: "2022-02-12"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "2 min"
tags: ["Game Development", "Unity", "C#", "Programmer"]
---

# Things To Remember

First, we need a camera and put it inside the player so the camera can move with the player and move in the player's direction. Now add the script.

## Code

```cs
// VARIABLES
[SerializeField] private float mouseSensitivity;
[SerializeField] private float xRotation;
[SerializeField] private Transform player;

// REFFFERNCE
//////////////////////
// RUN ONCE AT START
void Start()
{
    // Make sure mouse is locked in the game.
    Cursor.lockState = CursorLockMode.Locked;

    // Get player body.
    player = transform.parent;
}

void Update()
{
    // VERIABLE
    float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity * Time.deltaTime;
    float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity * Time.deltaTime;

    // Getting where to move mouse.
    xRotation -= mouseY;
    // Stop mouse rotation to get beyond one point.
    xRotation = Mathf.Clamp(xRotation, -90, 90);

    // Rotating player for rotating side by side.
    transform.localRotation = Quaternion.Euler(xRotation, 0, 0);

    // Rotating camera up and down.
    player.Rotate(Vector3.up * mouseX);

}
```

#

##

###

####

#####

**_Note:_** Make sure that when you set up your camera, you get the **X rotation value of the camera** and put it in the **xRotation** variable either in the inspector or in code by giving `[SerializeField] private float xRotation = 15;` (I have taken 15 as an example).

#

##

###

####

#####

###### Thank You
