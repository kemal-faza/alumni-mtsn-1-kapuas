let base_url = null;
// Fungsi untuk membuat kartu siswa atau guru atau staff
function displayCardSiswa(kelas, daftarSiswa, dari, sampai) {

    // Daftar guru, staff, dan siswa berbentuk object yang berisi array yang didalamnya ada object
    

    // Memeriksa kelas yang ada diparamter dan menyesuaikan daftar dengan kelas
    switch (kelas) {
        case "9-1":
            daftarSiswa = daftarSiswa.kelas91;
            break;
        case "9-2":
            daftarSiswa = daftarSiswa.kelas92;
            break;
        case "9-3":
            daftarSiswa = daftarSiswa.kelas93;
            break;
        case "9-4":
            daftarSiswa = daftarSiswa.kelas94;
            break;
        case "9-5":
            daftarSiswa = daftarSiswa.kelas95;
            break;
        case "9-6":
            daftarSiswa = daftarSiswa.kelas96;
            break;
        case "9-7":
            daftarSiswa = daftarSiswa.kelas97;
            break;
        case "9-8":
            daftarSiswa = daftarSiswa.kelas98;
            break;
        case "staff":
            daftarSiswa = daftarSiswa.staff;
            break;
    
        default:
            daftarSiswa = daftarSiswa.guru;
            break;
    };

    let jumlahDataPagination = sampai;
    let jumlahBaris = null;
    let jumlahDataPerBaris = null;
    if ( window.innerWidth < 992 ) {
        jumlahDataPerBaris = 3
        jumlahBaris = Math.ceil(jumlahDataPagination / jumlahDataPerBaris);
    } else if ( window.innerWidth > 992 ) {
        jumlahDataPerBaris = 4
        jumlahBaris = Math.ceil(jumlahDataPagination / jumlahDataPerBaris);
    }

    let i = dari;
    for ( let j = 0; j < jumlahBaris; j++  ) {
        let html = `<div class="row kartu">`;
        while (  i < jumlahDataPerBaris ) {
            if ( i == sampai ) {
                break;
            }
            html += `
            <div class="col m4 l3 light">
                <div class="card">
                    <div class="card-image">
                    <img src="`
            // Mengambil gambar sekaligus menentukan jalur filenya
            if ( kelas == "guru" || kelas == "staff" ) {
                html += `img/${kelas}/${daftarSiswa[i].img}`;
            } else {
                html += `../img/siswa/${kelas}/${daftarSiswa[i].img}`;
            }
            html += `" class="materialboxed">
                    <span class="card-title"><b>${daftarSiswa[i].nama}</b></span>
                    </div>
                    <div class="card-content">
                        <button data-target="modal1" class="btn modal-trigger waves-effect waves-light" style="margin-left: 30%;">Detail</button>
                    </div>
                </div>
            </div>`;
            i++;
        };
        jumlahDataPerBaris *= 2;
        html += `</div>`;
        
        // Menambahkan html ke dalam div yang class-nya row
        $('.kontainer').append(html);
        if (i == sampai) {
            break;
        }
    }
    
    let j = 0;
    for ( let i = dari; i < sampai; ++i ) {
        // Memanipulasi isi didalam modal 
        const modalBtn = document.querySelectorAll('.modal-trigger');
        const list = Array.from(document.querySelectorAll('li.collection-item'));
        modalBtn[j].addEventListener('click', function() {
            const pesan = document.querySelector('.modal-content p');
            pesan.textContent = "";
            $(pesan).html(`Pesan Kesan : <br><b>\`\` ${daftarSiswa[i].pesanKesan} \`\`</b>`);
            list[0].textContent = "";
            list[1].textContent = "";
            list[2].textContent = "";
            list[3].textContent = "";
            list[4].textContent = "";
            $(list[0]).html(`<b>Nama : </b>${daftarSiswa[i].nama}`);
            if (kelas == "guru" || kelas == "staff") {
                $(list[1]).html(`<b>Posisi : </b>${daftarSiswa[i].posisi}`);
            } else {
                $(list[1]).html(`<b>Kelas : </b>${daftarSiswa[i].kelas}`);
            }
            $(list[2]).html(`<b>TTL : </b>${daftarSiswa[i].ttl}`);
            $(list[3]).html(`<b>Alamat : </b>${daftarSiswa[i].alamat}`);
            $(list[4]).html(`<b>No Telp : </b>${daftarSiswa[i].noTelp}`);
        });
        j++;
    };

    // Membuat html card menggunakan for loop

    // Membuat Pagination
    const jumlahDataPerHalaman = 10;
    const jumlahData = daftarSiswa.length;
    
    // Menghitung jumlah halaman yang diperlukan sesuai dengan jumlah data yang ada
    const jumlahHalaman = Math.ceil(jumlahData / jumlahDataPerHalaman);

    // Membuat html yang ke-2 untuk pagination
     html2 = `
    <div class="container center">
            <ul class="pagination">
                <li class="waves-effect prev"><a href=""><i class="material-icons">chevron_left</i></a></li>`;

    // Menambahkan navigasi sesuai dengan halaman yang dibutuhkan
    for ( let i = 0; i < jumlahHalaman; i++ ) {
        let j = i;
        html2 += `  <li class="waves-effect number"><a href="">${++j}</a></li>`;
    }
    html2 += `<li class="waves-effect next"><a href=""><i class="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    `;

    // Menambahkan html yang ke-2 ke dalam body
    $('.pagination-container').append(html2);
};

// Fungsi untuk membuat kartu dari halaman kegiatan.html
function displayCardKegiatan(dari, sampai) {

    // Daftar kegiatan yang berbentuk array yang berisi object
    const kegiatan = [
        {
            judul: "Upacara Hari Kemerdekaan Indonesia",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        },
        {
            judul: "Lomba 17 Agustus",
            imgThumbnail: "1.jpg",
            imgModal: "2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestiae ut quidem magni debitis officia est non labore et quam sunt excepturi assumenda dolores porro molestias qui at voluptate reiciendis."
        }
    ];

    // Membuat html card-nya menggunakan for loop
    for ( let i = dari; i < sampai; i++ ) {
        let html = `
            <div class="col m6 l4 light kartu">
                <div class="card">
                    <div class="card-image">
                        <img src="img/kegiatan/${kegiatan[i].judul}/${kegiatan[i].imgThumbnail}" class="materialboxed">
                        <span class="card-title">${kegiatan[i].judul}</span>
                    </div>
                    <div class="card-content">
                        <button data-target="modal1" class="btn modal-trigger wafes-effect waves-light" style="margin-left: 30%;">Detail</button>
                    </div>
                </div>
            </div>
        `;

        // Menambahkan html ke dalam div yang class-nya row
        $(".kontainer .row").append(html);

        // Mengubah / memanipulasi isi di dalam modal
        const modalBtn = document.querySelectorAll('.modal-trigger');
        for ( let i = 0; i < modalBtn.length; i++ ) {
            modalBtn[i].addEventListener('click', function() {
                const imgModal = document.querySelector('.img-modal');
                imgModal.src = `img/kegiatan/${kegiatan[i].judul}/${kegiatan[i].imgModal}`;
                const text = document.querySelector('.text-modal');
                text.textContent = kegiatan[i].text;
            });
        };
    };


    // Membuat Pagination
    const jumlahDataPerHalaman = 10;
    const jumlahData = kegiatan.length;

    // Menghitung jumlah halaman yang diperlukan sesuai dengan jumlah data yang ada
    const jumlahHalaman = Math.ceil(jumlahData / jumlahDataPerHalaman);

    // Membuat html yang ke-2 untuk pagination
    html2 = `
    <div class="container center">
            <ul class="pagination">
                <li class="waves-effect prev"><a href=""><i class="material-icons">chevron_left</i></a></li>`;

    // Menambahkan navigasi sesuai jumlah halaman yang diperlukan
    for ( let i = 0; i < jumlahHalaman; i++ ) {
        let j = i;
        html2 += `  <li class="waves-effect number"><a href="">${++j}</a></li>`;
    }
    html2 += `<li class="waves-effect next"><a href=""><i class="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    `;

    // Menambahkan html yang ke-2 ke dalam body
    $('.pagination-container').append(html2);
};

// Fungsi untuk menambahkan kerangka html di body
function displayBody(kelas) {

    // Membuat kerangka html yang dasar untuk semua halaman
    let html = `
        <!-- Navbar -->
	<div class="navbar-fixed">
		<!-- Dropdown Navbar -->
		<ul id="dropdown1" class="dropdown-content">
        `;
    for ( let i = 1; i < 9; i++ ) {
        if ( kelas == "guru" || kelas == "staff" || kelas == "kegiatan" ) {
            html += `<li><a href="siswa/kelas9${i}.html">kelas 9-${i}</a></li>
            `;
        } else {
            html += `<li><a href="kelas9${i}.html">kelas 9-${i}</a></li>
            `;
        }
    };
	html += `</ul>
		<!-- Dropdown Sidebar -->
		<ul id="dropdown2" class="dropdown-content">
        `
    for ( let i = 1; i < 9; i++ ) {
        if ( kelas == "guru" || kelas == "staff" || kelas == "kegiatan" ) {
            html += `<li><a href="siswa/kelas9${i}.html">kelas 9-${i}</a></li>
            `;
        } else {
            html += `<li><a href="kelas9${i}.html">kelas 9-${i}</a></li>
            `;
        }
    };
	html += `</ul>
		<!-- Akhir Dropdown -->
		<nav class="teal">
			<div class="container">
				<div class="nav-wrapper">
                `;
	if ( kelas == "guru" || kelas == "staff" || kelas == "kegiatan" ) {
        html += `<a href="./" class="brand-logo">`;
    } else {
        html += `<a href="../" class="brand-logo">`;
    }
    html += `<i class="fa fa-home" style="font-size: 35px;" title="Home"></i></a>
    <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">`
	if ( kelas == "guru" || kelas == "staff" || kelas == "kegiatan" ) {
        html += `
        <li><a href="kegiatan.html">Kegiatan</a></li>`;
    } else {
        html += `
        <li><a href="../kegiatan.html">Kegiatan</a></li>`;
    }
    html += `<li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Siswa<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
				</div>
			</div>
		</nav>
	</div>
	<!-- Akhir Navbar -->

    <!-- Sidebar -->
	<ul class="sidenav" id="mobile-nav">`;
	if ( kelas == "guru" || kelas == "staff" || kelas == "kegiatan" ) {
        html += `
        <li><a href="kegiatan.html">Kegiatan</a></li>`;
    } else {
        html += `
        <li><a href="../kegiatan.html">Kegiatan</a></li>`;
    };
	html += `<li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Siswa<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
	<!-- Akhir Sidebar -->

	<!-- Daftar -->`
    if ( kelas != "kegiatan" ) {
        switch (kelas) {
            case "guru":
                html += `
                <div class="container">
                    <h3 class="center-align">Daftar Guru</h3>
                    <div class="divider"></div>
                    <div class="row">
                        
                    </div>
                </div>`;
                break;
            case "staff":
                html += `
                <div class="container">
                    <h3 class="center-align">Daftar Staff</h3>
                    <div class="divider"></div>
                    <div class="row">
                        
                    </div>
                </div>`;
                break;
            default:
                html += `
                <div class="container kontainer">
                    <h3 class="center-align">Daftar Siswa Kelas ${kelas}</h3>
                    <div class="divider"></div>
                </div>`;
                break;
        }
        html += `<!-- Modal -->
        <div id="modal1" class="modal">
            <div class="modal-content">
            <h4>Detail `
        if ( kelas == "guru" ) {
            html += `Guru`;
        } else if ( kelas == "staff" ) {
            html += `Staff`;
        } else {
            html += `Siswa`;
        }
        html += `</h4>
                <ul class="collection">
                    <li class="collection-item"></li>
                    <li class="collection-item"></li>
                    <li class="collection-item"></li>
                    <li class="collection-item"></li>
                    <li class="collection-item"></li>
                </ul>
                <p></p>
            </div>
            <div class="modal-footer">
                <button class="modal-close btn waves-effect waves-light">Tutup</button>
            </div>
        </div>
        `;
    } else {
        html += `
        <div class="container kontainer">
            <h3 class="center-align">Daftar Kegiatan</h3>
            <div class="divider"></div>
            <div class="row">
                
            </div>
        </div>
        
        <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>Detail Kegiatan</h4>
                <img src="" width="50%" class="img-modal">
                <p class="text-modal"></p>
            </div>
            <div class="modal-footer">
                <button class="modal-close btn waves-effect waves-light">Tutup</button>
            </div>
        </div>`;
    };

    html += `
    <div class="pagination-container"></div>
    `;
    
    if ( kelas == "kegiatan" || kelas == "guru" || kelas == "staff" ) {
        base_url = `siswa/`;
    } else {
        base_url = `./`;
    }

    html += `
    <footer class="page-footer blue-grey darken-3">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Alumni MTsN 1 Kapuas</h5>
                    <p class="grey-text text-lighten-4">Daftar para alumni MTsN 1 Kapuas Tahun 2021 Angkatan ke-24</p>     
                    <p class="grey-text text-lighten-4">Jika ada kesalahan dalam penulisan identitas silahkan hubungi saya dengan mengklik icon dibawah</p>   
                    <a class="grey-text text-lighten-4" href="https://wa.me/6285248258322" target="_blank">
                        <img src="${base_url}../img/logo/whatsapp.png" class="responsive-img" width="35">
                    </a>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Navigasi</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="${base_url}../">Home</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}../kegiatan.html">Kegiatan</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas91.html">Kelas 9-1</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas92.html">Kelas 9-2</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas93.html">Kelas 9-3</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas94.html">Kelas 9-4</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas95.html">Kelas 9-5</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas96.html">Kelas 9-6</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas97.html">Kelas 9-7</a></li>
                        <li><a class="grey-text text-lighten-3" href="${base_url}kelas98.html">Kelas 9-8</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright blue-grey darken-4">
            <div class="container center">
                Muhamad Kemal Faza ~ Copyright © 2021.
            </div>
        </div>
    </footer>
    `;

    // Menambahkan html ke dalam body
    $('body').append(html);
};

// Fungsi untuk menghapus semua card yang tampil
function hapusPage() {
    const page = Array.from(document.querySelectorAll('.number'));
    for ( let i = 0; i < page.length; i++ ) {

        // Menghilangkan class active pada navigasi
        page[i].classList.remove('active');
    };
    const card = document.querySelectorAll('.kartu');
    card.forEach(function(e) {

        // Menghilangkan elemen card
        e.remove();
    });
    const pagination = document.querySelectorAll('.container.center');
    pagination.forEach(function(e) {

        // Menghilangkan elemen pagination
        e.remove();
    })
};

function navigasi(kelas, indexHalaman) {
    // Menghentikan link agar tidak terload
    const linkPage = Array.from(document.querySelectorAll('.pagination li.waves-effect a'));
    for ( let i = 0; i < linkPage.length; i++ ) {
        linkPage[i].addEventListener('click', function(e) {
            e.preventDefault();
        });
    };

    // Menghilangkan dan memunculkan tombol next dan prev jika halaman berada di index tertentu
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const navList = Array.from(document.querySelectorAll('.number'));
    if ( indexHalaman == 0 && indexHalaman != navList.length-1 ) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    } else if ( indexHalaman == navList.length-1 && indexHalaman != 0 ) {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
    } else if ( indexHalaman != 0 && indexHalaman != navList.length-1 ) {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    };

    // Menambahkan class pada navigasi dan memberitahu ada di halaman yang mana sekarang 
    navList[indexHalaman].classList.add('active');

    // Menambahkan event saat tombol prev atau next atau navigasi ditekan
    if ( indexHalaman != 0 ) {
        prevBtn.addEventListener('click', function() {
            hapusPage();
            indexHalaman--;
            tampilPage(kelas, indexHalaman);
            window.scrollTo(0, 0);
        });
    } else if ( indexHalaman != navList.length-1 ) {
        nextBtn.addEventListener('click', function() {
            hapusPage();
            indexHalaman++;
            tampilPage(kelas, indexHalaman);
            window.scrollTo(0, 0);
        })
    }
    for ( let i = 0; i < navList.length; i++ ) {
        navList[i].addEventListener('click', function() {
            hapusPage();
            indexHalaman = navList[i].textContent - 1;
            tampilPage(kelas, indexHalaman);
            window.scrollTo(0, 0);
        })
    };

    // Inisialisai materialbox
	const materialbox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(materialbox, {
        startingTop: '4%',
        endingTop: '50%'
    });
};

function menghitungJumlahData(kelas, daftarSiswa) {
    switch (kelas) {
        case "9-1":
            daftarSiswa = daftarSiswa.kelas91;
            break;
        case "9-2":
            daftarSiswa = daftarSiswa.kelas92;
            break;
        case "9-3":
            daftarSiswa = daftarSiswa.kelas93;
            break;
        case "9-4":
            daftarSiswa = daftarSiswa.kelas94;
            break;
        case "9-5":
            daftarSiswa = daftarSiswa.kelas95;
            break;
        case "9-6":
            daftarSiswa = daftarSiswa.kelas96;
            break;
        case "9-7":
            daftarSiswa = daftarSiswa.kelas97;
            break;
        case "9-8":
            daftarSiswa = daftarSiswa.kelas98;
            break;
        case "staff":
            daftarSiswa = daftarSiswa.staff;
            break;
    
        default:
            daftarSiswa = daftarSiswa.guru;
            break;
    };
    return daftarSiswa.length;
}

// Fungsi untuk menampilkan card agar sesuai dengan jumlah data per halamannya
function tampilPage(kelas, indexHalaman) {

    // Memeriksa apakah kelas yang ada di parameter itu kegiatan atau bukan
    if ( kelas != "kegiatan" ) {

        $.getJSON("../materialize/js/siswa.json", function(data) {
            let daftarSiswa = data.daftarSiswa;

            let sampai = menghitungJumlahData(kelas, daftarSiswa);

            let sampaiDengan = null;

            // Jika bukan maka akan diperiksa lagi index ke berapa kah halaman itu, dan akan menampilkan card siswa atau staff atau guru
            switch ( indexHalaman ) {
                case 0:
                    if ( sampai == 10 || sampai > 10 ) {
                        sampaiDengan = 10;
                    } else if ( sampai < 10 ) {
                        sampaiDengan = sampai;
                    }
                    displayCardSiswa(kelas, daftarSiswa, 0, sampaiDengan);
                    navigasi(kelas, indexHalaman);
                    break;
                case 1:
                    if ( sampai == 20 || sampai > 20 ) {
                        sampaiDengan = 20;
                    } else if ( sampai < 20 ) {
                        sampaiDengan = sampai;
                    }
                    displayCardSiswa(kelas, daftarSiswa, 10, sampaiDengan);
                    navigasi(kelas, indexHalaman);
                    break;
                case 2:
                    if ( sampai == 30 || sampai > 30 ) {
                        sampaiDengan = 30;
                    } else if ( sampai < 30 ) {
                        sampaiDengan = sampai;
                    }
                    displayCardSiswa(kelas, daftarSiswa, 20, sampaiDengan);
                    navigasi(kelas, indexHalaman);
                    break;
                case 3:
                    if ( sampai == 40 || sampai > 40 ) {
                        sampaiDengan = 40;
                    } else if ( sampai < 40 ) {
                        sampaiDengan = sampai;
                    }
                    displayCardSiswa(kelas, daftarSiswa, 30, sampaiDengan);
                    navigasi(kelas, indexHalaman);
                    break;
                    
                default:
                    if ( sampai == 50 || sampai > 50 ) {
                        sampaiDengan = 50;
                    } else if ( sampai < 50 ) {
                        sampaiDengan = sampai;
                    }
                    displayCardSiswa(kelas, daftarSiswa, 40, sampaiDengan);
                    navigasi(kelas, indexHalaman);
                    break;
            }
        });
    } else {

        // Jika iya maka akan diperiksa lagi index ke berapa kah halaman itu, dan akan menampilkan card kegiatan
        switch ( indexHalaman ) {
            case 0:
                displayCardKegiatan(0, 10);
                break;
            case 1:
                displayCardKegiatan(10, 11);
                break;

            default:
                displayCardKegiatan(20, 30);
                break;
        }
    };
};

// Fungsi untuk menampilkan halaman secara lengkap berdasarkan kelas
function tampilHalamanLengkap(kelas) {

    // Membuat variabel index sebagai acuan pada halaman
    let indexHalaman = 0;

    // Menampilkan body untuk yang pertama
	displayBody(kelas);

    // Menampilkan card urutan pertama saat halaman di load
    tampilPage(kelas, indexHalaman);
}