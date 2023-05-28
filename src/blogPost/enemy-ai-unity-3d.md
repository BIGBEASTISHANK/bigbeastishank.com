---
title: "Making FPS Enemy AI in Unity 3D"
description: "We will explore how to create an FPS (First Person Shooter) Enemy AI (Artificial Intelligence) using Unity 3D game engine (2021.3.XXXX). We will cover the implementation of different AI behaviors such as patrol, chase, and attack."
date: "2023-02-24"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "5 min"
htags: "Game Development, Game Codes, Aartificial Intelligence, AI, "
tags: ["Game Development", "Game Codes", "Aartificial Intelligence", "AI"]
---

# # Setting up Variables first

```cs
// Variables
 /////////////
 private bool walkPointSet;
 private bool alreadyAttacked;
 private bool playerInSightRange;
 private bool playerInAttackRange;

 private Transform player;
 private Vector3 walkPoint;
 private NavMeshAgent agent;

 [Header("Values")]
 [SerializeField] private float fireRate;
 [SerializeField] private float sightRange;
 [SerializeField] private float attackRange;
 [SerializeField] private float walkPointRange;

 [Header("Components")]
 [SerializeField] private LayerMask groundLayer;
 [SerializeField] private LayerMask playerLayer;
```

## ## Getting Components

```cs
// References
 //////////////
 private void Start()
 {
     agent = GetComponent<NavMeshAgent>(); // Getting navmesh agent
     player = GameObject.FindGameObjectWithTag("Player").transform; // Getting player body
 }
```

## ## Doing checks for player state like patroling, chase player & attack player

```cs
private void FixedUpdate()
 {
     playerInSightRange = Physics.CheckSphere(transform.position, sightRange, playerLayer); // Checking if player is in sight range
     playerInAttackRange = Physics.CheckSphere(transform.position, attackRange, playerLayer); // Checking if player is in attack range

     if (!playerInSightRange && !playerInAttackRange) Patroling(); // Start petroling
     if (playerInSightRange && !playerInAttackRange) ChasePlayer(); // Chasing player
     if (playerInSightRange && playerInAttackRange) AttackPlayer(); // Attacking player
 }
```

# ## Code for Patroling

```cs
private void Patroling()
 {
     if (!walkPointSet) SearchWalkPoint(); // If no walkpoint is set
     else if (walkPointSet)
         agent.SetDestination(walkPoint);

     // Serching walk poing
     void SearchWalkPoint()
     {
         float randomZ = Random.Range(-walkPointRange, walkPointRange); // Random z range
         float randomX = Random.Range(-walkPointRange, walkPointRange); // Random x range

         walkPoint = new Vector3(transform.position.x + randomX, transform.position.y, transform.position.z + randomZ); // Getting random location

         // Setting walkpoint to true
         if (Physics.Raycast(walkPoint, -transform.up, Mathf.Infinity, groundLayer))
             walkPointSet = true;
     }

     // Getting distence left to walk
     Vector3 distanceToWalkPoint = transform.position - walkPoint;
     if (distanceToWalkPoint.magnitude < 1)
         walkPointSet = false; // Setting walkpoint to false
 }
```

# ## Code for chasing player

```cs
private void ChasePlayer() { agent.SetDestination(player.position); } // Chasing player
```

# ## Code for Attacking player

```cs
private void AttackPlayer()
 {
     // Stopping enemy from moving
     agent.SetDestination(transform.position);
     transform.LookAt(player); // Looking at player

     // If not attacked then attack
     if (!alreadyAttacked)
     {
         ////////////////////////
         /// Attack Code here ///
         ////////////////////////

         alreadyAttacked = true; // If attacked
         // Setting fireRate
         Invoke(nameof(ResetAttack), fireRate);
     }
 }

 // Resetting attack
 private void ResetAttack() { alreadyAttacked = false; }
```

# # All Code at once

```cs
// Variables
 /////////////
 private bool walkPointSet;
 private bool alreadyAttacked;
 private bool playerInSightRange;
 private bool playerInAttackRange;

 private Transform player;
 private Vector3 walkPoint;
 private NavMeshAgent agent;

 [Header("Values")]
 [SerializeField] private float fireRate;
 [SerializeField] private float sightRange;
 [SerializeField] private float attackRange;
 [SerializeField] private float walkPointRange;

 [Header("Components")]
 [SerializeField] private LayerMask groundLayer;
 [SerializeField] private LayerMask playerLayer;

 // References
 //////////////
 private void Start()
 {
     agent = GetComponent<NavMeshAgent>(); // Getting navmesh agent
     player = GameObject.FindGameObjectWithTag("Player").transform; // Getting player body
 }

 private void FixedUpdate()
 {
     playerInSightRange = Physics.CheckSphere(transform.position, sightRange, playerLayer); // Checking if player is in sight range
     playerInAttackRange = Physics.CheckSphere(transform.position, attackRange, playerLayer); // Checking if player is in attack range

     if (!playerInSightRange && !playerInAttackRange) Patroling(); // Start petroling
     if (playerInSightRange && !playerInAttackRange) ChasePlayer(); // Chasing player
     if (playerInSightRange && playerInAttackRange) AttackPlayer(); // Attacking player
 }

 private void Patroling()
 {
     if (!walkPointSet) SearchWalkPoint(); // If no walkpoint is set
     else if (walkPointSet)
         agent.SetDestination(walkPoint);

     // Serching walk poing
     void SearchWalkPoint()
     {
         float randomZ = Random.Range(-walkPointRange, walkPointRange); // Random z range
         float randomX = Random.Range(-walkPointRange, walkPointRange); // Random x range

         walkPoint = new Vector3(transform.position.x + randomX, transform.position.y, transform.position.z + randomZ); // Getting random location

         // Setting walkpoint to true
         if (Physics.Raycast(walkPoint, -transform.up, Mathf.Infinity, groundLayer))
             walkPointSet = true;
     }

     // Getting distence left to walk
     Vector3 distanceToWalkPoint = transform.position - walkPoint;
     if (distanceToWalkPoint.magnitude < 1)
         walkPointSet = false; // Setting walkpoint to false
 }

 private void ChasePlayer() { agent.SetDestination(player.position); } // Chasing player

 private void AttackPlayer()
 {
     // Stopping enemy from moving
     agent.SetDestination(transform.position);
     transform.LookAt(player); // Looking at player

     // If not attacked then attack
     if (!alreadyAttacked)
     {
         ////////////////////////
         /// Attack Code here ///
         ////////////////////////

         alreadyAttacked = true; // If attacked
         // Setting fireRate
         Invoke(nameof(ResetAttack), fireRate);
     }
 }

 // Resetting attack
 private void ResetAttack() { alreadyAttacked = false; }
```

---

###### Thanks For reading
