
// Fungsi untuk membuat kartu siswa atau guru atau staff
function displayCardSiswa(kelas, dari, sampai) {

    // Daftar guru, staff, dan siswa berbentuk object yang berisi array yang didalamnya ada object
    let daftarSiswa = {
        guru: [
            {
                nama: "Awan Winanto",
                posisi: "Guru Matematika",
                img: "",
                alamat: "Jln. Tambun Bungai",
                noTelp: "123456789012",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            }
        ],
        staff: [
            {
                nama: "",
                posisi: "",
                img: "",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas91: [
            {
                nama: "Ahmad Fadlianur",
                kelas: "9-1",
                img: "",
                alamat: "Jln. Tandean",
                noTelp: "085212345678",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            },
            {
                nama: "Muhamad Kemal Faza",
                kelas: "9-1",
                img: "",
                alamat: "Jln. Kapuas",
                noTelp: "089693048519",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            }
        ],
        kelas92: [
            {
                nama: "Muhammad Isra",
                kelas: "9-2",
                img: "",
                alamat: "Jln. Tambun Bungai",
                noTelp: "089628174832",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            }
        ],
        kelas93: [
            {
                nama: "",
                kelas: "9-3",
                img: "img1.jpg",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas94: [
            {
                nama: "",
                kelas: "9-4",
                img: "",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas95: [
            {
                nama: "",
                kelas: "9-5",
                img: "",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas96: [
            {
                nama: "",
                kelas: "9-6",
                img: "",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas97: [
            {
                nama: "",
                kelas: "9-7",
                img: "",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas98: [
            {
                nama: "",
                kelas: "9-8",
                img: "",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ]
    }

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

    // Membuat html card menggunakan for loop
    for ( let i = dari; i < sampai; i++ ) {
        let html = `
        <div class="col m6 l4 light">
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

        // Menambahkan html ke dalam div yang class-nya row
        $('.container .row').append(html);

        // Memanipulasi isi didalam modal 
        const modalBtn = document.querySelectorAll('.modal-trigger');
        const list = Array.from(document.querySelectorAll('li.collection-item'));
        modalBtn[i].addEventListener('click', function() {
            const pesan = document.querySelector('.modal-content p');
            pesan.textContent = "";
            $(pesan).html(`<b>\`\`${daftarSiswa[i].pesanKesan}\`\`</b>`);
            list[0].textContent = "";
            list[1].textContent = "";
            list[2].textContent = "";
            list[3].textContent = "";
            $(list[0]).html(`<b>Nama : </b>${daftarSiswa[i].nama}`);
            if (kelas == "guru" || kelas == "staff") {
                $(list[1]).html(`<b>Posisi : </b>${daftarSiswa[i].posisi}`);
            } else {
                $(list[1]).html(`<b>Kelas : </b>${daftarSiswa[i].kelas}`);
            }
            $(list[2]).html(`<b>Alamat : </b>${daftarSiswa[i].alamat}`);
            $(list[3]).html(`<b>No Telp : </b>${daftarSiswa[i].noTelp}`);
        });
    };

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
    $('body').append(html2);
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
        $(".container .row").append(html);
    };

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
    $('body').append(html2);
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
                <div class="container">
                    <h3 class="center-align">Daftar Siswa Kelas ${kelas}</h3>
                    <div class="divider"></div>
                    <div class="row">
                        
                    </div>
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
        <div class="container">
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

    // Menambahkan html ke dalam body
    $('body').append(html);
};

// Fungsi untuk menghapus semua card yang tampil
function hapusPage() {
    const page = Array.from(document.querySelectorAll('.number'));
    for ( let i = 0; i < page.length; i++ ) {

        // Menghilangkan clas active pada navigasi
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
}

// Fungsi untuk menampilkan card agar sesuai dengan jumlah data per halamannya
function tampilPage(kelas, indexHalaman) {

    // Memeriksa apakah kelas yang ada di parameter itu kegiatan atau bukan
    if ( kelas != "kegiatan" ) {

        // Jika bukan maka akan diperiksa lagi index ke berapa kah halaman itu, dan akan menampilkan card siswa atau staff atau guru
        switch ( indexHalaman ) {
            case 0:
                displayCardSiswa(kelas, 0, 1);
                break;
            case 1:
                displayCardSiswa(kelas, 10, 20);
                break;
                case 2:
                displayCardSiswa(kelas, 20, 30);
                break;
            case 3:
                displayCardSiswa(kelas, 30, 40);
                break;
                
            default:
                displayCardSiswa(kelas, 40, 50);
                break;
        }
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
};

// Fungsi untuk menampilkan halaman secara lengkap berdasarkan kelas
function tampilHalamanLengkap(kelas) {

    // Membuat variabel index sebagai acuan pada halaman
    let indexHalaman = 0;

    // Menampilkan body untuk yang pertama
	displayBody(kelas);

    // Menampilkan card urutan pertama saat halaman di load
    tampilPage(kelas, indexHalaman);

    // Menghentikan link agar tidak terload
    const linkPage = Array.from(document.querySelectorAll('.pagination li.waves-effect a'));
    for ( let i = 0; i < linkPage.length; i++ ) {
        linkPage[i].addEventListener('click', function(e) {
            e.preventDefault();
        });
    };

    // Menambahkan event saat tombol prev atau next atau navigasi ditekan
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const navList = Array.from(document.querySelectorAll('.number'));
    if ( indexHalaman != 0 ) {
        prev.addEventListener('click', function() {
            hapusPage();
            indexHalaman--;
            tampilPage(kelas, indexHalaman);
        });
    } else if ( indexHalaman != navList.length-1 ) {
        next.addEventListener('click', function() {
            hapusPage();
            indexHalaman++;
            tampilPage(kelas, indexHalaman);
        })
    }
    for ( let i = 0; i < navList.length; i++ ) {
        navList[i].addEventListener('click', function() {
            hapusPage();
            indexHalaman = navList[i].textContent - 1;
            tampilPage(kelas, indexHalaman);
        })
    }
}