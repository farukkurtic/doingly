let unfinishedTasks = 0;
let numOfTasks = 0;
let tasks = [];
$(".clear-button").hide(); 

$(".icon-container").on("click", function(){
    let exists = false;
        for(let i = 0; i < tasks.length; i++) {
            if($("#forma input").val() === tasks[i]){
                alert("Task already exists!");
                exists = true;
            }
        }
        if(exists === false) {
            tasks.push($("#forma input").val());
            if($("#forma input").val() === "") {
                alert("Please enter a task");
            }
            else {
                $("#list").append(`<li><input type="checkbox" name="" id="" class="check"><p>${$("#forma input").val()}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div></li>`);
                $("#forma input").val("");
                unfinishedTasks++;
                numOfTasks++;
                if(numOfTasks > 0) {
                    $(".no-tasks").hide();
                    $(".clear-button").show();
                }
                else {
                    $(".no-tasks").show();
                }
                $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
            }
        }
})

$('#list').on('click', '.fa-trash-can', function(){
    if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p>${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        unfinishedTasks--;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
        $(this).closest("li").remove();
        for(let i = 0; i < tasks.length; i++) {
            if($(this).closest("li").text() === tasks[i]) {
                delete tasks[i];
            }
        }
        numOfTasks--;
        if(numOfTasks > 0) {
            $(".no-tasks").hide();
            $(".clear-button").show();
        }
        else {
            $(".no-tasks").show();
        }
        console.log(numOfTasks);
    }
    else if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        unfinishedTasks++;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
        $(this).closest("li").remove();
        for(let i = 0; i < tasks.length; i++) {
            if($(this).closest("li").text() === tasks[i]) {
                delete tasks[i];
            }
        }
        numOfTasks--;
        if(numOfTasks > 0) {
            $(".no-tasks").hide();
            $(".clear-button").show();
        }
        else {
            $(".no-tasks").show();
        }
        console.log(numOfTasks);
    }
    else if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check" checked><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`){
        unfinishedTasks--;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
        $(this).closest("li").remove();
        for(let i = 0; i < tasks.length; i++) {
            if($(this).closest("li").text() === tasks[i]) {
                delete tasks[i];
            }
        }
        numOfTasks--;
        if(numOfTasks > 0) {
            $(".no-tasks").hide();
            $(".clear-button").show();
        }
        else {
            $(".no-tasks").show();
        }
        console.log(numOfTasks);
    }
    else {
        unfinishedTasks++;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
        $(this).closest("li").remove();
        for(let i = 0; i < tasks.length; i++) {
            if($(this).closest("li").text() === tasks[i]) {
                delete tasks[i];
            }
        }
        numOfTasks--;
        if(numOfTasks > 0) {
            $(".no-tasks").hide();
            $(".clear-button").show();
        }
        else {
            $(".no-tasks").show();
        }
        console.log(numOfTasks);
    }
    
})

$("#list").on("click", ".check", function() {
    if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p>${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check" checked><p><s>${($(this).closest("li").text())}</s></p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
        unfinishedTasks--;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
    }
    else if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check" checked><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
        unfinishedTasks++;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
    }
    else if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check" checked><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`){
        $(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`;
        unfinishedTasks--;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
    }
    else {
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check"><p>${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
        unfinishedTasks++;
        $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");
    }
})

$("#list").on("click", ".fa-pen-to-square", function() {
    if($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check"><p>${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
    } 
    else if ($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check"><p>${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check"><p contenteditable="true">${($(this).closest("li").text())}</p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
    }
    else if ($(this).closest("li").html() === `<input type="checkbox" name="" id="" class="check" checked><p contenteditable="true"><s>${($(this).closest("li").text())}</s></p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`) {
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check" checked><p><s>${($(this).closest("li").text())}</s></p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
    }
    else { 
        $(this).closest("li").html(`<input type="checkbox" name="" id="" class="check" checked><p contenteditable="true"><s>${($(this).closest("li").text())}</s></p><div class="icons"><i class="fa-solid fa-pen-to-square fa-lg"></i><i class="fa-solid fa-trash-can fa-lg"></i></div>`);
    }
})

$(".clear-button").on("click", function() {
    $("ul").html("");
    tasks = [0];
    unfinishedTasks = 0;
    $(this).hide();
    $(".no-tasks").show();
    $("#tag-container h3").text("Hello, " + username + "! You have " + unfinishedTasks + " unfinished tasks left.");

})

let username = prompt("What's your name?");
$("#tag-container h3").text("Hello, " + username + "!");

