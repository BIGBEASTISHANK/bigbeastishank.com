// Varibale
export const goalReached: number = 0;
export const sponsorGoalAmount: number = 15000;
export const barPercentage: number = ((goalReached / sponsorGoalAmount) * 100) <= 100 ? ((goalReached / sponsorGoalAmount) * 100) : 100
