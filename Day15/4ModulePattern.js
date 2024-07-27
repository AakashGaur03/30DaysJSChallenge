// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createItemCollection() {
    let items = []

    return {

        addItem: function (item) {
            items.push(item)
            console.log(`Item ${item} added`)
        },

        removeItem: function (item) {
            const index = items.indexOf(item)
            if (index !== -1) {

                items.splice(index, 1)
                console.log(`Item ${item} removed`)
            } else {
                console.log(`Item ${item} not found`)
            }
        },

        listItems: function () {
            console.log('Items:', items)
        }
    }
}

const manager = createItemCollection()

manager.addItem('apple')
manager.addItem('banana')
manager.listItems()
manager.addItem('kiwi')

manager.removeItem('banana')
manager.removeItem('pineapple')

manager.listItems()