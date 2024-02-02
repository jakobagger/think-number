"use strict";

window.addEventListener("load", main);

function main(){
console.log("Now witness the power of this fully operational JavaScript!");
hideAnswerButtons();
document.querySelector("#start-btn").addEventListener("click", startGame);
document.querySelector("#low-btn").addEventListener("click", answerLow);
document.querySelector("#high-btn").addEventListener("click", answerHigh);
document.querySelector("#correct-btn").addEventListener("click", answerCorrect);
}

function hideAnswerButtons(){
    document.querySelector("#low-btn").classList.add("hide");
    document.querySelector("#high-btn").classList.add("hide");
    document.querySelector("#correct-btn").classList.add("hide");
}

function showAnswerButtons(){
    document.querySelector("#low-btn").classList.remove("hide");
    document.querySelector("#high-btn").classList.remove("hide");
    document.querySelector("#correct-btn").classList.remove("hide");
}

function startGame(event){
    showGuess();
    showAnswerButtons();
    document.querySelector("#start-message").classList.add("hide");
}

function showGuess(){
    const guess = makeGuess();
    const list = document.querySelector("#guess-list");
    const html = `<li>I'm guessing ${guess}. </li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function makeGuess(){
    return Math.floor(Math.random()*99)+1;
}

function answerLow(){
    console.log("The computer's guess was too low.");
    const lastItem = document.querySelector("#guess-list li:last-child");
    lastItem.textContent += "That was too low."
    showGuess();
}

function answerHigh(){
    console.log("The computer's guess was too high.");
    const lastItem = document.querySelector("#guess-list li:last-child");
    lastItem.textContent += "That was too high."
    showGuess();
}

function answerCorrect(){
    console.log("The computer's guess was correct!.");
    const lastItem = document.querySelector("#guess-list li:last-child");
    lastItem.textContent += "That was correct, hooray!."
    hideAnswerButtons();
}