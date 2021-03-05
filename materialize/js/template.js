function displayCardSiswa(kelas) {
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

    // Membuat card
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
    }
    for ( let i = 0; i < daftarSiswa.length; i++ ) {
        let html = `
        <div class="col m6 l4 light">
            <div class="card">
                <div class="card-image">
                <img src="`
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
        $('.container .row').append(html);
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
    }
};

function displayCardKegiatan() {
    const kegiatan = [
        {
            judul: "Upacara Hari Kemerdekaan Indonesia",
            img: ["1.jpg", "2.jpg", "3.jpg"]
        },
        {
            judul: "Lomba 17 Agustus",
            img: ["1.jpg", "2.jpg", "3.jpg"]
        }
    ];
    for ( let i = 0; i < kegiatan.length; i++ ) {
        let html = `
            <h3 class="left-align">${kegiatan[i].judul}</h3>
            <div class="divider"></div>
            <div class="row">`;
        for ( let j = 0; j < kegiatan[i].img.length; j++ ) {
            html += `
                <div class="col m6 l4 light">
                    <div class="card">
                        <div class="card-image">
                            <img src="img/kegiatan/${kegiatan[i].judul}/${kegiatan[i].img[j]}" class="materialboxed">
                        </div>
                    </div>
                </div>
            `;
        }
        html += `
            </div>
        `;
        $(".kontainer").append(html);
    };
};

function displayBody(kelas) {
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
        <li><a href="kegiatan.html">Kegiatan</a></li>
		<li><a href="guru.html">Guru</a></li>
		<li><a href="staff.html">Staff</a></li>
		<li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Siswa<i class="material-icons right">arrow_drop_down</i></a></li>`;
    } else {
        html += `
        <li><a href="../kegiatan.html">Kegiatan</a></li>
		<li><a href="../guru.html">Guru</a></li>
		<li><a href="../staff.html">Staff</a></li>
		<li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Siswa<i class="material-icons right">arrow_drop_down</i></a></li>`;
    }
    html += `</ul>
				</div>
			</div>
		</nav>
	</div>
	<!-- Akhir Navbar -->

    <!-- Sidebar -->
	<ul class="sidenav" id="mobile-nav">`;
	if ( kelas == "guru" || kelas == "staff" || kelas == "kegiatan" ) {
        html += `
        <li><a href="kegiatan.html">Kegiatan</a></li>
		<li><a href="guru.html">Guru</a></li>
		<li><a href="staff.html">Staff</a></li>
		<li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Siswa<i class="material-icons right">arrow_drop_down</i></a></li>`;
    } else {
        html += `
        <li><a href="../kegiatan.html">Kegiatan</a></li>
		<li><a href="../guru.html">Guru</a></li>
		<li><a href="../staff.html">Staff</a></li>
		<li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Siswa<i class="material-icons right">arrow_drop_down</i></a></li>`;
    };
	html += `</ul>
	<!-- Akhir Sidebar -->

	<!-- Daftar Guru -->`
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
        <div class="container kontainer">
		
	    </div>`;
    }
    $('body').append(html);
}