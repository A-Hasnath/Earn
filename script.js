// script.js

let balance = 0;
const rewardHistoryList = document.getElementById('reward-history-list');
const balanceElement = document.getElementById('balance');

// Load progress from localStorage when the app loads
function loadProgress() {
    const savedBalance = localStorage.getItem('balance');
    const savedHistory = localStorage.getItem('rewardHistory');

    // Load balance if it exists
    if (savedBalance !== null) {
        balance = parseInt(savedBalance, 10);
        balanceElement.textContent = balance;
    }

    // Load reward history if it exists
    if (savedHistory !== null) {
        const rewardHistory = JSON.parse(savedHistory);
        rewardHistory.forEach(reward => {
            const rewardItem = document.createElement('li');
            rewardItem.textContent = reward;
            rewardHistoryList.appendChild(rewardItem);
        });
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('balance', balance);
    const rewardHistoryItems = Array.from(rewardHistoryList.children).map(item => item.textContent);
    localStorage.setItem('rewardHistory', JSON.stringify(rewardHistoryItems));
}

// Function to clear progress
function clearProgress() {
    localStorage.removeItem('balance');
    localStorage.removeItem('rewardHistory');
    balance = 0;
    balanceElement.textContent = balance;
    rewardHistoryList.innerHTML = '';  // Clear reward history
    alert('Progress cleared!');
}

// Tab switching logic
function openTab(event, tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab and make its link active
    document.getElementById(tabId).classList.add('active-tab');
    event.currentTarget.classList.add('active');
}

// Load progress on page load
window.onload = function () {
    loadProgress();
};

// Attach clear progress button listener
document.getElementById('clear-progress-btn').addEventListener('click', clearProgress);
