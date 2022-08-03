console.log('this work')

function getBookData() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0679775439')
    .then(response => response.json())
    .then(data => console.log(data))
    let books = data;
    let title = (book.item[0].volumnInfo.title)

}

// invocation

getBookData()







