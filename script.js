// script.js

let balance = 0;
const rewardHistoryList = document.getElementById('reward-history-list');
const balanceElement = document.getElementById('balance');

// Define the tasks and their respective rewards
const tasks = {
    1: {
        description: "Solve 5 + 3",
        reward: 10,  // Reward for this task
        complete: function () {
            const answer = prompt("What is 5 + 3?");
            return answer === '8';
        }
    },
    2: {
        description: "Answer: What is the capital of France?",
        reward: 15,  // Reward for this task
        complete: function () {
            const answer = prompt("What is the capital of France?");
            return answer.toLowerCase() === 'paris';
        }
    },
    3: {
        description: "Complete a random task",
        reward: Math.floor(Math.random() * 20) + 1,  // Random reward between 1 and 20
        complete: function () {
            alert("You completed a random task!");
            return true;
        }
    }
};

// Function to handle task completion
function completeTask(taskId) {
    const task = tasks[taskId];
    
    // Ask the user to complete the task
    const isTaskCompleted = task.complete();
    
    if (isTaskCompleted) {
        // Reward the user
        balance += task.reward;
        balanceElement.textContent = balance;
        
        // Add the reward to the history list
        const rewardItem = document.createElement('li');
        rewardItem.textContent = `Completed: ${task.description}. Earned: ${task.reward} coins`;
        rewardHistoryList.appendChild(rewardItem);
        
        alert(`Task completed! You earned ${task.reward} coins.`);
    } else {
        alert("Task failed. Try again.");
    }
}
