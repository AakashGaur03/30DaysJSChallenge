// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveToStorages(key,value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);

    const localStorageValue = localStorage.getItem(key);
    
    const sessionStorageValue = sessionStorage.getItem(key);
    
    console.log(`Value from localStorage: ${localStorageValue}`);
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

saveToStorages("name","Aakash")

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearStorages(){
    localStorage.clear()
    sessionStorage.clear()
}

const clearAllStorages = document.getElementById("clearAllStorages")

clearAllStorages.addEventListener("click",()=>{
    clearStorages()
})