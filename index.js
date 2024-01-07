const choreInput = document.getElementById('choreInput');
const addChoreBtn = document.getElementById('addChoreBtn');
const choreList = document.getElementById('choreList');
const deleteCompletedBtn = document.getElementById('deleteCompletedBtn');

// adding chores
addChoreBtn.addEventListener('click', function () {
  const choreText = choreInput.value;
  if (choreText.trim() !== '') {
    const choreItem = document.createElement('div');
    choreItem.innerHTML = `<input type = 'checkbox'> ${choreText}`;
    choreList.appendChild(choreItem);
    choreInput.value = '';
  }
});
// chore list
choreList.addEventListener('change', function (event) {
  if (event.target.type == 'checkbox') {
    const choreText = event.target.parentElement.textContent.trim();
    if (event.target.checked) {
      choreText.classList.add('completed');
    } else {
      choreText.classList.remove('completed');
    }
  }
});

// deleting completed chores
deleteCompletedBtn.addEventListener('click', function() {
 const completedChores = choreList.querySelectorAll('.completed');
 completedChores.forEach(chore => chore.remove());
});
