let tasks = [];

function addTask() {
	let input = document.getElementById("input-task");
	let task = input.value;
	if (task === "") {
		alert("Please enter a task");
	} else {
		tasks.push({
			name: task,
			completed: false,
			date: new Date()
		});
		showTasks();
		input.value = "";
	}
}

function showTasks() {
	let pendingTasks = document.getElementById("pending-tasks");
	let completedTasks = document.getElementById("completed-tasks");
	pendingTasks.innerHTML = "";
	completedTasks.innerHTML = "";
	for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i];
		let li = document.createElement("li");
		li.innerHTML = task.name;
		if (task.completed) {
			li.className = "completed";
			completedTasks.appendChild(li);
		} else {
			let completeButton = document.createElement("button");
			completeButton.innerHTML = "Complete";
			completeButton.onclick = function() {
				task.completed = true;
				showTasks();
			};
			let editButton = document.createElement("button");
			editButton.innerHTML = "Edit";
			editButton.onclick = function() {
				let newTask = prompt("Enter new task", task.name);
				if (newTask !== null) {
					task.name = newTask;
					showTasks();
				}
			};
			let deleteButton = document.createElement("button");
			deleteButton.innerHTML = "Delete";
			deleteButton.onclick = function() {
				tasks.splice(i, 1);
				showTasks();
			};
			li.appendChild(completeButton);
			li.appendChild(editButton);
			li.appendChild(deleteButton);
			pendingTasks.appendChild(li);
		}
	}
}
