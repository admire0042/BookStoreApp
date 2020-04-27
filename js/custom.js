
$("#addBtn").click(function (){
	$("#bookModal").show();
})
$("#cancelBtn").click(function (){
	$("#bookModal").hide();
})
$("#newBookBtn").click(function (){
	addToELibrary();
})





const bookRow = document.getElementById('bookRow');
const elibrary = [];
function Book(title, pub, pages, yearPub, coverImgURL,bookPrice, bookAuthor, bookLang,bookCount, bookExtr) {
	this.title = title;
	this.pub = pub;
	this.pages = pages;
	this.yearPub = yearPub;
	this.coverImgURL = coverImgURL;
	this.price = bookPrice;
	this.author = bookAuthor;
	this.language = bookLang;
	this.country = bookCount;
	this.extract = bookExtr;
	this.read = 0;
}


function addToELibrary() {
	if (validateInput()) {
		let title = $("#txtTitle").val();
		let pub = $("#txtPub").val();
		let pages = $("#txtPages").val();
		let coverImgURL = $("#txtCoverURL").val();
		let yearPub = $("#txtPubYear").val();
		let price = $("#bookPrice").val();
		let author = $("#bookAuthor").val();
		let language = $("#languages").val();
		let country = $("#bookCountry").val();
		let extract = $("#bookExtract").val();

		let book = new Book(title, pub, pages,yearPub,coverImgURL,price, author, language, country, extract)
		// elibrary.push(book);
		saveBook(book);
		location.reload();
		
	} else {
		alert('Sorry, all fields are required');
	}
}

function validateInput() {
	if ($("#txtTitle").val() == '' || $("#txtPub").val() == '' || $("#txtPages").val() == '' || $("#txtCoverURL").val() == '' || $("#txtPubYear").val()== "" || $("#bookPrice").val() =="" || $("#bookAuthor").val() ==""||$("#languages").val() =="") {
		return false;
	}
	return true;
}


function render() {
	if (localStorage.getItem('books') != null) {
		let booksArray = JSON.parse(localStorage.getItem('books'));
		for (var i = 0; i < booksArray.length; i++) {
			bookRow.innerHTML += `<div class="col-md-4 all-details mt-5">
			
			<div class="row">
			  <div class="col-md-6">
			    <div class="book-cover">
			  <img src="${booksArray[i].coverImgURL}" onclick="displayBookDetails(${i})" class="card-img images img-fluid">
			  <span class="all-buttons btn btn-default" onclick="displayBookDetails(${i})">Details</span>
			  <button class="all-buttons favoriteButton mt-2" style="background-color:${booksArray[i].read}";>fav</button>
		         </div>
			  </div>
			  <div class="col-md-6">
			 
                    <p style="color:${booksArray[i].read}";  class="card-title text-white">Title: ${booksArray[i].title}</p>
                    <p class="card-title text-white" id="authorofBook">Author: ${booksArray[i].author}</p>
                    <h6 class="card-title text-white">Price: &#8358;${booksArray[i].price}</h6>
					<h6 class="card-title text-white">Published : ${booksArray[i].yearPub}</h6>
					<div class="delete_details">
				
					<span class="all-buttons btn btn-default" onclick="deleteBook(${i})" >Delete</span>
					</div>
			  </div>
			</div>
               
				
           
        </div>`;
		}
	} else {
		console.log('No books yet');
	}
}


function render() {
	if (localStorage.getItem('books') != null) {
		let booksArray = JSON.parse(localStorage.getItem('books'));
		for (var i = 0; i < booksArray.length; i++) {
			bookRow.innerHTML += `<div class="col-md-4 mb-5">
            <div class="color">
				<img src="${booksArray[i].coverImgURL}" onclick="showDetails(${i})" class="card-img image img-fluid">
					<h3 class="card-title">${booksArray[i].title}</h3>
					<p>Author: ${booksArray[i].author}</p>
					<p>Price: &#8358;${booksArray[i].price}</p>
					<p>Year of Publishing: ${booksArray[i].yearPub}</p>
                    <span id="delete"class="btn btn-primary" onclick="deleteBook(${i})" >Delete Book</span>
		</div>`;
		}
	} else {
		console.log('No books yet');
	}
}

const show = document.querySelector('#show');
		function closeModalBox(){
			show.style.display = 'none';
		}

function showDetails(boo){
	if (localStorage.getItem('books') !== null){
		booksArray = JSON.parse(localStorage.getItem('books'))
		booksArray[boo];
		console.log(booksArray[boo]);
		document.getElementById("show").innerHTML=`
		<h6 class="clas6">Publisher: <span>${booksArray[boo].pub}</span></h6>
		<p>Price: <span>${booksArray[boo].price}</span></p>
		<p>Extract: <span>${booksArray[boo].extract}</span></p>
		<p>Pages: <span>${booksArray[boo].pages}</span></p>
		<p>Language: <span>${booksArray[boo].language}</span></p>
		<p>Country: <span>${booksArray[boo].country}</span></p>
		 <button class="btn btn2 btn-block btn-primary" id="btn" onClick="closeModalBox()">close</button>
	</div>
		`;
		console.log(booksArray[boo].bookextract)

		document.getElementById("show").style.display = 'block';
	}
}
		
// function closeModalBox(){
// 	detailsModal.style.display = 'none';
// }

function saveBook(bookObj) {
	let booksArray = [];
	if (localStorage.getItem('books') == null) {
		booksArray.push(bookObj);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('New book added to the eLibrary!');
	} else {
		booksArray = JSON.parse(localStorage.getItem('books'));
		booksArray.push(bookObj);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('New book added to the eLibrary');
	}
}

function deleteBook(bookID) {
	if (localStorage.getItem('books') !== null) {
		booksArray = JSON.parse(localStorage.getItem('books'));
		booksArray.splice(bookID, 1);
		localStorage.setItem('books', JSON.stringify(booksArray));
		alert('book deleted');
		location.reload();
	}
}

		

