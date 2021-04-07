function tampilCard(kelas, keywords, classes) {
    if ( !classes && keywords ) {
        $.getJSON('../js/siswa.json', function(data) {
            let daftarSiswa = data.daftarSiswa;
            let html = ``;
            daftarSiswaNew = [];
            for ( let prop in daftarSiswa ) {
                $.each(daftarSiswa[prop], function(i, data) {
                    if ( !data.posisi ) {
                        let nama = data.nama.toLowerCase();
                        let keyword = keywords.toLowerCase();
                        if ( nama.includes(keyword) ) {
                            daftarSiswaNew.push(data);
                            html += `
                                <div class="col-md-4 mb-4 col-lg-3">
                                    <div class="card">
                                        <img src="../img/siswa/${data.kelas}/${data.img}" class="card-img-top" alt="${data.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${data.nama}</h5>
                                            <hr>
                                            <button type="button" class="btn btn-primary modal-trigger" data-toggle="modal" data-target="#modal">
                                                Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }
                    }
                })
                
            }
            $('#daftar-siswa').html(html);

            $('#judul').html(`Daftar Siswa`);
            
            ubahModal(daftarSiswaNew);
        })
        return;
    } else if ( keywords == "" || !keywords ) {
        $.getJSON('../js/siswa.json', function(data) {
            let daftarSiswa = data.daftarSiswa;

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

            let html = ``;
            $.each(daftarSiswa, function(i, data) {
                html += `
                    <div class="col-md-4 mb-4 col-lg-3">
                        <div class="card">
                            <img src="../img/siswa/${kelas}/${data.img}" class="card-img-top" alt="${data.nama}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${data.nama}</h5>
                                <hr>
                                <button type="button" class="btn btn-primary modal-trigger" data-toggle="modal" data-target="#modal">
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            $('#daftar-siswa').html(html);

            $('#judul').html(`Daftar Siswa Kelas ${kelas}`);

            ubahModal(daftarSiswa);
        });
    }
}

function ubahModal(daftarSiswa) {
    let j = 0;
    for ( let i = 0; i < daftarSiswa.length; ++i ) {
        // Memanipulasi isi didalam modal 
        const modalBtn = document.querySelectorAll('.modal-trigger');
        const list = Array.from(document.querySelectorAll('li.list-group-item'));
        modalBtn[j].addEventListener('click', function() {
            const pesan = document.querySelector('blockquote p');
            pesan.textContent = "";
            $(pesan).html(`<strong>Pesan Kesan : </strong><br>\`\` ${daftarSiswa[i].pesanKesan} \`\``);
            list[0].textContent = "";
            list[1].textContent = "";
            list[2].textContent = "";
            list[3].textContent = "";
            list[4].textContent = "";
            $(list[0]).html(`<strong>Nama : </strong>${daftarSiswa[i].nama}`);
            $(list[1]).html(`<strong>Kelas : </strong>${daftarSiswa[i].kelas}`);
            $(list[2]).html(`<strong>TTL : </strong>${daftarSiswa[i].ttl}`);
            $(list[3]).html(`<strong>Alamat : </strong>${daftarSiswa[i].alamat}`);
            $(list[4]).html(`<strong>No Telp : </strong>${daftarSiswa[i].noTelp}`);
        });
        j++;
    };
};

function tampilBodySiswa(kelas) {
    const html = `
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="../">
                    <i class="bi bi-house-fill"></i>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active mr-3">
                            <a class="nav-link" href="../kegiatan.html">Kegiatan</a>
                        </li>
                        <li class="nav-item dropdown active mr-3">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Siswa
                            </a>
                            <div class="dropdown-menu mb-3" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="kelas91.html">Kelas 9-1</a>
                                <a class="dropdown-item" href="kelas92.html">Kelas 9-2</a>
                                <a class="dropdown-item" href="kelas93.html">Kelas 9-3</a>
                                <a class="dropdown-item" href="kelas94.html">Kelas 9-4</a>
                                <a class="dropdown-item" href="kelas95.html">Kelas 9-5</a>
                                <a class="dropdown-item" href="kelas96.html">Kelas 9-6</a>
                                <a class="dropdown-item" href="kelas97.html">Kelas 9-7</a>
                                <a class="dropdown-item" href="kelas98.html">Kelas 9-8</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="input-group">
                                <input type="search" class="form-control" placeholder="Cari siswa.." id="keyword" autocomplete="off" autofocus>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Akhir Navbar -->

        <!-- Daftar Siswa -->
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <h1 id="judul"></h1>
                    <hr>
                </div>
            </div>
            <div class="row" id="daftar-siswa">
                
            </div>
        </div>
        <!-- Akhir Daftar Siswa -->

        <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Detai Siswa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"></li>
                        </ul>
                        <blockquote class="blockquote">
                            <p class="mb-0"></p>
                        </blockquote>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Akhor Modal -->

        <!-- Footer -->
        <footer>
            <div class="container-fluid bg-dark p-5 text-light">
                <div class="row">
                    <div class="col">
                        <h3>Alumni MTsN 1 Kapuas</h3>
                        <p>Daftar Para Alumni MTsN 1 Kapuas Tahun 2021</p>
                        <p class="mb-0">Jika ada kesalahan penulisan nama atau menginginkan perubahan identitas silahkan hubungi saya dengan mengklik icon dibawah ini</p>
                        <a href="https://wa.me/6285248258322">
                            <img src="../img/logo/whatsapp.png" alt="WhatsApp" width="25">
                        </a>
                    </div>
                    <div class="col">
                        <p class="text-right">Copyright © 2021 ~ Muhamad Kemal Faza,</p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Akhir Footer -->
    `;
    $('body').append(html)
    tampilCard(kelas)
    $('#keyword').on('input', function() {
        tampilCard(kelas, $(this).val(), false)
    });
};