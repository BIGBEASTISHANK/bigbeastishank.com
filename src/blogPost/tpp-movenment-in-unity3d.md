---
title: "TPP Movenment in Untiy 3D"
description: "In my game development experience, the basic thing is player movement in Unity 3D. So I thought I should to teach you also. Feat: Character Controller."
date: "2022-02-10"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "min"
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

    // Moving Player
    controller.Move(move * Time.deltaTime);
}

private void Move()
{
    // VARIABLE
    float moveX = Input.GetAxis("Horizontal");
    float moveZ = Input.GetAxis("Vertical");

    Vector3 move = new Vector3(moveX, 0, moveZ);

    // Condition for walking and running speed
    if (move != Vector3.zero && !Input.GetKey(KeyCode.LeftShift))
    {
        move *= walkSpeed;
    }
    else if (move != Vector3.zero && Input.GetKey(KeyCode.LeftShift))
    {
        move *= runSpeed;
    }
}
```

###### Thank You