// =======================
// 🎯 Part 1: Event Handling
// =======================

// 1. Toggle message on button click
const revealBtn = document.getElementById('revealMessageBtn');
const message = document.getElementById('message');

revealBtn.addEventListener('click', () => {
  message.classList.toggle('hidden');
});

// 2. Toggle dark mode
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===============================
// 🎮 Part 2: Interactive Elements
// ===============================

// Counter game
let count = 0;
const counter = document.getElementById('counter');
document.getElementById('increaseBtn').addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

document.getElementById('decreaseBtn').addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

// FAQ toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ==================================
// 📋✅ Part 3: Form Validation
// ==================================

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

// Email regex pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.classList.add('hidden');

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  // If all is valid
  if (valid) {
    formSuccess.classList.remove('hidden');
    form.reset();
  }
});
