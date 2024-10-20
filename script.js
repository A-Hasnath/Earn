// script.js

let balance = 0;
let miningProgress = 0;
const miningSpeed = 10;  // Speed of mining progress

const balanceElement = document.getElementById('balance');
const progressBarElement = document.getElementById('progress-bar');
const rewardHistoryList = document.getElementById('reward-history-list');
const mineButton = document.getElementById('mine-btn');

// Function to simulate mining
function startMining() {
    // Disable the button while mining
    mineButton.disabled = true;

    // Simulate mining progress
    const miningInterval = setInterval(() => {
        miningProgress += miningSpeed;
        progressBarElement.style.width = miningProgress + '%';

        if (miningProgress >= 100) {
            clearInterval(miningInterval);
            rewardUser();
            miningProgress = 0;
            progressBarElement.style.width = '0%';
            mineButton.disabled = false;
        }
    }, 100);  // Mining progress increases every 100ms
}

// Function to reward the user
function rewardUser() {
    const minedCoins = Math.floor(Math.random() * 10) + 1;  // Random coins between 1-10
    balance += minedCoins;
    balanceElement.textContent = balance;

    // Add reward to history
    const rewardItem = document.createElement('li');
    rewardItem.textContent = `You mined ${minedCoins} coins`;
    rewardHistoryList.appendChild(rewardItem);
}

// Attach event listener to the button
mineButton.addEventListener('click', startMining);
