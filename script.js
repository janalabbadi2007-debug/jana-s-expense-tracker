let budget = 0;
let totalSpent = 0;

function setBudget() {
    const budgetInput = Number(document.getElementById("budgetInput").value);

    if (budgetInput <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    budget = budgetInput;

    document.getElementById("budget").textContent = budget.toFixed(2);

    updateRemaining();

    document.getElementById("budgetInput").value = "";
}

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    totalSpent += amount;

    document.getElementById("spent").textContent =
        totalSpent.toFixed(2);

    updateRemaining();

    const item = document.createElement("li");

    item.textContent = `${name} - $${amount.toFixed(2)}`;

    document.getElementById("expenseList").appendChild(item);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function updateRemaining() {
    const remaining = budget - totalSpent;

    document.getElementById("remaining").textContent =
        remaining.toFixed(2);
}