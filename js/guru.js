
function getGuru(keywords = null) {
    $.getJSON('js/guru.json', function(data) {
        let [html1, html2, html3, html4, html5] = ['', '', '', '', ''];
        let daftarGuru = [];
        let daftarWaliKelas = [];
        let staff = ['pel.', 'administrasi', 'ka.', 'wakamad', 'perpustakaan', 'penjaga', 'satpam', 'cleaning'];
        
        data.sort(function(a, b){
            var x = a.nama.toLowerCase();
            var y = b.nama.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });

        $.each(data, function (i, guru) {
            if (keywords) {
                let nama = guru.nama.toLowerCase();
                let keyword = keywords.toLowerCase();

                
                if (nama.includes(keyword)) {

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
            } else {
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

                let jabatan = guru['jabatan'].toLowerCase();

                if (jabatan.includes('wali')) {
                    daftarWaliKelas.unshift(guru);
                }

                daftarWaliKelas.sort(function(a, b){
                    var x = a.jabatan.toLowerCase();
                    var y = b.jabatan.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });

                if (jabatan.includes('kepala sekolah')) {
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
                    daftarGuru.push(guru);
                } else if (jabatan.includes('guru bp/bk')) {
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
                    daftarGuru.push(guru);
                } else if (jabatan == '') {
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
                if (guru.jabatan == 'Ka. Perpustakaan') {
                    html2 += `
                            <div class="col-md-4 mb-4 col-lg-3 col-sm-6">
                                <div class="card">
                                    <img src="img/guru/Dra__NorHasanah.JPG" class="card-img-top" alt="Dra. Norhasanah">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Dra. Norhasanah</h5>
                                        <hr>
                                        <h6 class="card-text">Ka. Perpustakaan | Mengajar Akidah Akhlak</h6>
                                    </div>
                                </div>
                            </div>
                        `;
                } else {
                    $.each(staff, function (i, data) {
                        if (jabatan.includes(data)) {
                            if (guru.jabatan == 'Ka. Perpustakaan') {
                                
                            } else {
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
                            }
                            daftarGuru.push(guru);
                        }
                    });
                }
            }
        });
        $.each(daftarWaliKelas, function(i, waliKelas) {
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
        })
        if (daftarGuru.length == 0) {
            html1 += `
            <div class="col">
                <div class="alert alert-danger text-center" role="alert">
                    <h4>Guru yang dicari tidak ditemukan!</h4>
                    <p>Pastikan nama guru yang dicari sudah benar</p>
                </div>
            </div>
            `;
        }
        $('#kepala-sekolah').html(html1);
        $('#staff').html(html2);
        $('#wali-kelas').html(html3);
        $('#guru-bp').html(html4);
        $('#pengajar').html(html5);
    });
};

$('body').on('load', getGuru())
// console.log($('#keyword').val().length)
$('#keyword').on('input', function () {
    getGuru($(this).val());
});