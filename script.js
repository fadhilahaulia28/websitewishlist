// Tangkap elemen yang diperlukan
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas
addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (task !== "") {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
      ${task}
      <button class="btn btn-danger btn-sm deleteBtn">Hapus</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = "";

    // Tambahkan event listener untuk tombol hapus
    listItem.querySelector(".deleteBtn").addEventListener("click", function () {
      taskList.removeChild(listItem);
    });
  }
});