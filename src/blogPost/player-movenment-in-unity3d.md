---
title: "Player Movenment in Unity 3D"
description: "In my game development experience, the basic thing is player movement in Unity 3D. So I thought I should to teach you also. Feat: Character Controller."
date: "2022-02-10"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "2 min"
tags: ["Unity 3D", "Game Development", "C#"]
---

# Movenments

There are many ways to create player movement in Unity 3D, such as rigidbody and character controller. I am going to tell you how you can do it in the character controller. I'm just going to tell you basic movenment with **W**, **A**, **S**, **D**.

## Code

```cs
// VARIABLES
[SerializeField] private float walkSpeed;
[SerializeField] private float runSpeed;
private CharacterController controller;

// REFFFERNCE
//////////////////////
// RUN ONCE AT START
private void Start()
{
    // Getting Character controller from the children.
    controller = GetComponentInChildren<CharacterController>();
}

// UPDATE EVERY FRAME
private void Update()
{
    // MOVENMENT FUNCTION
    Move();
}

private void Move()
{
    // VARIABLE
    float moveX = Input.GetAxis("Horizontal");
    float moveZ = Input.GetAxis("Vertical");

    // Getting where to move the player.
    Vector3 move = new Vector3(moveX, 0, moveZ);
    // Making it so it move on player's X and Z axis insted of global axis.
    move = transform.TransformDirection(move);

    // Condition for walking and running speed
    if (move != Vector3.zero && !Input.GetKey(KeyCode.LeftShift))
    {
        // Make player move with walk speed.
        move *= walkSpeed;
    }
    else if (move != Vector3.zero && Input.GetKey(KeyCode.LeftShift))
    {
        // Make player move with run speed.
        move *= runSpeed;
    }

    // Moving Player
    controller.Move(move * Time.deltaTime);
}
```

###### Thank You
