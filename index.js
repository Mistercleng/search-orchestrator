const readline = require('readline-sync')

function start() {
    const content = {}
    content.category = askAndRetunrCategoryTerm()

    content.searchTerm = askAndReturnSearchTerm()

    function askAndReturnSearchTerm(){
        return readline.question('Type a search term: ')
    }

    function askAndRetunrCategoryTerm(){
        const category = ['Hardware', 'Software', 'Aplication']
        const selectCategoryIndex = readline.keyInSelect(category)
        const selectCategoryText = category[selectCategoryIndex]
        
        return selectCategoryText
    }
    console.log(content)
}
start()