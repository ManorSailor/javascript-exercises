// Get the array & argument to remove
// Check if the list contains said element via loop
// If it does, remove it
// return the array

const removeFromArray = function(list, ...element) {
    for (const item of element) {
        if (list.includes(item)) list.splice(list.indexOf(item), 1);
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
