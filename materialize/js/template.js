function displayCardSiswa(kelas) {
    let daftarSiswa = {
        guru: [
            {
                nama: "Awan Winanto",
                posisi: "Guru Matematika",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "Jln. Tambun Bungai",
                noTelp: "123456789012",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            }
        ],
        staff: [
            {
                nama: "",
                posisi: "",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas91: [
            {
                nama: "Ahmad Fadlianur",
                kelas: "9-1",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "Jln. Tandean",
                noTelp: "085212345678",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            },
            {
                nama: "Muhamad Kemal Faza",
                kelas: "9-1",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "Jln. Kapuas",
                noTelp: "089693048519",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            }
        ],
        kelas92: [
            {
                nama: "Muhammad Isra",
                kelas: "9-2",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "Jln. Tambun Bungai",
                noTelp: "089628174832",
                pesanKesan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eveniet!"
            }
        ],
        kelas93: [
            {
                nama: "",
                kelas: "9-3",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas94: [
            {
                nama: "",
                kelas: "9-4",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas95: [
            {
                nama: "",
                kelas: "9-5",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas96: [
            {
                nama: "",
                kelas: "9-6",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas97: [
            {
                nama: "",
                kelas: "9-7",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                alamat: "",
                noTelp: "",
                pesanKesan: ""
            }
        ],
        kelas98: [
            {
                nama: "",
                kelas: "9-8",
                img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
                <img src="${daftarSiswa[i].img}" class="materialboxed">
                <span class="card-title">${daftarSiswa[i].nama}</span>
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
            console.log(daftarSiswa[i]);
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
}