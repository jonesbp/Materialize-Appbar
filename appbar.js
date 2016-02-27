const fs = require('fs')
const themes = require('./themes.json')

fs.readFile('./template.txt', (_, data) => {
  themes.forEach(theme => {
    const file = `Material ${theme}.sublime-theme`
    fs.writeFile(file, data)
  })
})

