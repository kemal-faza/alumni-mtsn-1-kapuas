// Fungsi untuk menampilkan card guru
function getGuru(keywords = null) { // Set parameter keywords ke null

    // Ambil JSON yang berisi data guru
    $.getJSON('js/guru.json', function(data) {

        // Deklarasikan variabel
        let [html1, html2, html3, html4, html5] = ['', '', '', '', '']; // Deskripsikan 5 valiabel sekaligus
        let daftarGuru = [];
        let daftarWaliKelas = [];
        let staff = ['pel.', 'administrasi', 'ka.', 'wakamad', 'perpustakaan', 'penjaga', 'satpam', 'cleaning']; // Jabatan para staff
        
        // Urutkan data berdasarkan nama
        data.sort(function(a, b){
            var x = a.nama.toLowerCase();
            var y = b.nama.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });

        // Looping data guur
        $.each(data, function (i, guru) {

            // Cek apakah user sedang mencari data guru
            if (keywords) {

                // Jika iya

                // Deklarasikan variabel
                let nama = guru.nama.toLowerCase();
                let keyword = keywords.toLowerCase();

                // Jika keyword yang dicari terdapat pada nama guru
                if (nama.includes(keyword)) {

                    // Set html daftar-guru
                    $('#daftar-guru').html(`
                    <div class="row text-center mt-5">
                        <div class="col">
                            <h1>Daftar Guru</h1>
                            <hr>
                        </div>
                    </div>
                    <div class="row justify-content-center" id="pengajar"></div>
                    `);

                    // Tambahkan html card
                    html5 += `
                        <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                            <div class="card">
                                <img src="img/guru/${guru['image']}" class="card-img-top" alt="${guru['nama']}">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${guru['nama']}</h5>
                                    <hr>
                                    <h6 class="card-text">${guru['jabatan']}${(guru['jabatan'] != '' && guru['bidang_studi'] != '') ? ' | ' : ''}${(guru['bidang_studi'] != '') ? 'Mengajar ' + guru['bidang_studi'] : ''}</h6>
                                </div>
                            </div>
                        </div>
                    `;

                    // Masukkan data guru ke dalam array baru
                    daftarGuru.push(guru);
                }
            } else {

                // Jika tidak mencari

                // Set html daftar-guru
                $('#daftar-guru').html(`
                <div class="row text-center mt-5">
                    <div class="col">
                        <h1>Kepala Sekolah</h1>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center" id="kepala-sekolah"></div>
                
                <div class="row text-center mt-5">
                    <div class="col">
                        <h1>Staff</h1>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center" id="staff"></div>

                <div class="row text-center mt-5">
                    <div class="col">
                        <h1>Wali Kelas</h1>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center" id="wali-kelas"></div>

                <div class="row text-center mt-5">
                    <div class="col">
                        <h1>Guru BP/BK</h1>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center" id="guru-bp"></div>

                <div class="row text-center mt-5">
                    <div class="col">
                        <h1>Pengajar</h1>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center" id="pengajar"></div>
                `);

                // Ambil jabatan guru
                let jabatan = guru['jabatan'].toLowerCase();

                // Jika jabatannya adalah wali kelas
                if (jabatan.includes('wali')) {
                    // Masukkan data guru ke dalam array baru
                    daftarWaliKelas.unshift(guru);
                }

                // Urutkan array baru yang berisi data wali kelas berdasarkan kelasnya
                daftarWaliKelas.sort(function(a, b){
                    var x = a.jabatan.toLowerCase();
                    var y = b.jabatan.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });

                // Jika jabatannya adalah kepala sekolah
                if (jabatan.includes('kepala sekolah')) {

                    // Tambahkan html card untuk kepala sekolah
                    html1 += `
                        <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                            <div class="card">
                                <img src="img/guru/${guru['image']}" class="card-img-top" alt="${guru['nama']}">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${guru['nama']}</h5>
                                    <hr>
                                    <h6 class="card-text">${guru['jabatan']}${(guru['jabatan'] != '' && guru['bidang_studi'] != '') ? ' | ' : ''}${(guru['bidang_studi'] != '') ? 'Mengajar ' + guru['bidang_studi'] : ''}</h6>
                                </div>
                            </div>
                        </div>
                    `;

                    // Masukkan data guru ke dalam array baru
                    daftarGuru.push(guru);
                } else if (jabatan.includes('guru bp/bk')) { // Jika jabatannya adalah guru bp/bk

                    // Tambahkan html card untuk guru bp/bk
                    html4 += `
                        <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                            <div class="card">
                                <img src="img/guru/${guru['image']}" class="card-img-top" alt="${guru['nama']}">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${guru['nama']}</h5>
                                    <hr>
                                    <h6 class="card-text">${guru['jabatan']}${(guru['jabatan'] != '' && guru['bidang_studi'] != '') ? ' | ' : ''}${(guru['bidang_studi'] != '') ? 'Mengajar ' + guru['bidang_studi'] : ''}</h6>
                                </div>
                            </div>
                        </div>
                    `;

                    // Masukkan data guru ke dalam array baru
                    daftarGuru.push(guru);
                } else if (jabatan == '') { // Jika tidak memiliki jabatan berarti ini adalah pengajar biasa

                    // Tambahkan card untuk pengajar
                    html5 += `
                        <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                            <div class="card">
                                <img src="img/guru/${guru['image']}" class="card-img-top" alt="${guru['nama']}">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${guru['nama']}</h5>
                                    <hr>
                                    <h6 class="card-text">${guru['jabatan']}${(guru['jabatan'] != '' && guru['bidang_studi'] != '') ? ' | ' : ''}${(guru['bidang_studi'] != '') ? 'Mengajar ' + guru['bidang_studi'] : ''}</h6>
                                </div>
                            </div>
                        </div>
                    `;
                    daftarGuru.push(guru);
                }
                if (guru.jabatan == 'Ka. Perpustakaan') { // Jika jabatan adalah kepala perpustakaan

                    // Maka tambahkan card untuk kepala perpustakaan
                    html2 += `
                            <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                                <div class="card">
                                    <img src="img/guru/${guru['image']}" class="card-img-top" alt="${guru['nama']}">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">${guru['nama']}</h5>
                                        <hr>
                                        <h6 class="card-text">${guru['jabatan']}${(guru['jabatan'] != '' && guru['bidang_studi'] != '') ? ' | ' : ''}${(guru['bidang_studi'] != '') ? 'Mengajar ' + guru['bidang_studi'] : ''}</h6>
                                    </div>
                                </div>
                            </div>
                        `;
                } else { // Jika bukan kepala perpustakaan

                    // Looping array stadd
                    $.each(staff, function (i, data) {

                        // Jika jabatannya ada didalam jabatan para staff
                        if (jabatan.includes(data)) {

                            // Tambahkan html card untuk para staff
                            html2 += `
                                <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                                    <div class="card">
                                        <img src="img/guru/${guru['image']}" class="card-img-top" alt="${guru['nama']}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${guru['nama']}</h5>
                                            <hr>
                                            <h6 class="card-text">${guru['jabatan']}${(guru['jabatan'] != '' && guru['bidang_studi'] != '') ? ' | ' : ''}${(guru['bidang_studi'] != '') ? 'Mengajar ' + guru['bidang_studi'] : ''}</h6>
                                        </div>
                                    </div>
                                </div>
                            `;
                            daftarGuru.push(guru);
                        }
                    });
                }
            }
        });

        // Looping array wali kelas
        $.each(daftarWaliKelas, function (i, waliKelas) {

            // Tambahkan html card untuk wali kelas
            html3 += `
                <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                    <div class="card">
                        <img src="img/guru/${waliKelas['image']}" class="card-img-top" alt="${waliKelas['nama']}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${waliKelas['nama']}</h5>
                            <hr>
                            <h6 class="card-text">${waliKelas['jabatan']}${(waliKelas['jabatan'] != '' && waliKelas['bidang_studi'] != '') ? ' | ' : ''}${(waliKelas['bidang_studi'] != '') ? 'Mengajar ' + waliKelas['bidang_studi'] : ''}</h6>
                        </div>
                    </div>
                </div>
            `;
            daftarGuru.push(waliKelas);
        });

        // Jika guru tidak ada maka tampilkan pemberitahuan
        if (daftarGuru.length == 0) {

            // Ubah html daftar-guru
            $('#daftar-guru').html(`
                <div class="row text-center mt-5">
                    <div class="col">
                        <h1>Daftar Guru</h1>
                        <hr>
                    </div>
                </div>
                <div class="row justify-content-center" id="pengajar"></div>
            `);

            html5 += `
            <div class="col">
                <div class="alert alert-danger text-center" role="alert">
                    <h4>Guru yang dicari tidak ditemukan!</h4>
                    <p>Pastikan nama guru yang dicari sudah benar</p>
                </div>
            </div>
            `;
        }

        // Ubah html di tempat kepala sekolah
        $('#kepala-sekolah').html(html1);

        // Ubah html di tempat para staff
        $('#staff').html(html2);

        // Ubah html di tempat wali kelas
        $('#wali-kelas').html(html3);

        // Ubah html di tempat guru bp/bk
        $('#guru-bp').html(html4);

        // Ubah html di tempat pengajar
        $('#pengajar').html(html5);
    });
};

// Saat halaman dimuat tampilkan semua guru
$('body').on('load', getGuru())

// Saat user mencari guru tampilkan guru yang dicari
$('#keyword').on('input', function () {
    getGuru($(this).val());
    window.scrollTo(0, 0)
});