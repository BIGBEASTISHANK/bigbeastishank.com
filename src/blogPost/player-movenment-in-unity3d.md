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

There are many ways to create player movement in Unity 3D, such as rigidbody and character controller. I am going to tell you how you can do it in the character controller. I'm just going to tell you basic movenment with **W**, **A**, **S**, **D** and **Jump**.

## Code

```cs
// VARIABLES
[SerializeField] private float walkSpeed;
[SerializeField] private float runSpeed;

[SerializeField] private float gravity;
[SerializeField] private float groundCheckSize;
[SerializeField] private LayerMask groundLayer;
[SerializeField] private Transform groundCheck;
private bool isGrounded;
private Vector3 velocity;

[SerializeField] private float jump;

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
    // Checking if player is grounded.
    isGrounded = Physics.CheckSphere(groundCheck.position, groundCheckSize, groundLayer);

    // If player is grounded then stop applying gravity.
    if (isGrounded && velocity.y < 0)
    {
        // Setting velocity to -2 for being on safe side.
        velocity.y = -2;
    }

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

    // Checking if player is on ground.
    if (isGrounded)
    {
        // If player use jump button.
        if (Input.GetButtonDown("Jump"))
        {
            // Changing velocity to make player jump
            velocity.y = Mathf.Sqrt(jump * -2 * gravity);
        }
    }

    // Moving Player
    controller.Move(move * Time.deltaTime);

    // Increasing velocity with respect of gravity.
    velocity.y -= gravity * Time.deltaTime;
    // Applying gravity on player.
    controller.Move(velocity * Time.deltaTime);
}
```

#

##

###

####

#####

**_Note:_** Make an empty gameObject(ground check) and put it on player feet or in other tearms put it below player object. Then drag and drop that object inside player then again drag that ground check object in inspector and insert it in the place of **Ground Check**. Now click on your ground and them select layer as **Ground**. Now set groundCheckSize to 0.2. Now set ground layer to ground in player. You are ready to go.

#

##

###

####

#####

###### Thank You
