function getCategories() {

  var settings = {
    "async": true,
    "crossDomain": true,
    dataType: 'jsonp',
    "url": "http://www.mocky.io/v2/5cd252e631000010213396ad",
    "method": "GET"
  }

  $.ajax(settings).done( xu_ly_ket_qua );
  
}

function xu_ly_ket_qua (response) {

  var ulDanhMuc = $("#danhmuc");

  for (var i = 0 ; i < response.ketqua.length; i++) {
    var danhMuc = document.createElement('li'); // ====> <li></li>

    var idText = response.ketqua[i].id;
    var tieuDe = response.ketqua[i].tieude;

    danhMuc.setAttribute('id', idText);  // ===>  <li id='so nao do'></li>
    danhMuc.innerText = tieuDe; // ===>  <li id='so nao do'>Tiêu đề danh mục</li>


    ulDanhMuc.append(danhMuc);
  }

  ulDanhMuc.attr('class', 'mau-do');
  
}