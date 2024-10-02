const dialog = document.querySelector('#dialog')

// button 1   
const openDialog1 = document.querySelector('#openDialog1')
openDialog1.addEventListener('click', () => {
   dialog.showModal()
})

// button 2   
const openDialog2 = document.querySelector('#openDialog2')
openDialog2.addEventListener('click', () => {
   dialog.showModal()
})

closeDialog.addEventListener('click', () => {
   dialog.close()

})