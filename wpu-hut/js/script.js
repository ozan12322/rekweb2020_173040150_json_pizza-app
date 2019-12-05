$.getJSON('data/pizza.json', function(data){
	let menu = data.menu;
	$.each(menu, function(i, data){
		$('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>')
	})
});