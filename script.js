const btn = document.getElementById("btn");
const signUpForm = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("sign-up");
const signInBtn = document.getElementById("sign-in");
const storage = document.getElementById("storage");

const logInForm = document.getElementById("login-form");
const logInEmail = document.getElementById("email2");
const logInPassword = document.getElementById("password2");
const logInBtn = document.getElementById("login-btn");



const taskData =  [];
let currentTask = {};

// add
const addForm = () => {
  const taskObj = {
    id: `${emailInput.value.toLowerCase()}-${Date.now()}`,
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    
  }; 
    taskData.push(taskObj);
    updateTaskContainer();
    console.log(taskData);
}


const updateTaskContainer = () => {
    storage.innerHTML = "";
  
    taskData.forEach(
      ({ id, name, email, password }) => {
          (storage.innerHTML += `
          <div class="task" id="${id}">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p> 
            <button onclick="deleteTask(this)">Delete</button>
          </div>
        `)
      }
    );
  };

  const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
  
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    // localStorage.setItem("data", JSON.stringify(taskData));
  }
  
  const deleteEntry = () => (
    taskData.splice(taskData.id)
  );
  
  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addForm();
    storage.style.display = "block";
    signUpForm.classList.toggle("hidden")

  }) 

btn.addEventListener("click", () => 
       hide()
     );


signInBtn.addEventListener("click", () => {
    logInForm.classList.toggle("hidden")
   hide();
})
 
function hide() {
    signUpForm.classList.toggle("hidden")
    btn.style.display = "none";
}