const foods = [
  {
    id: 1,
    name: "Nastar Premium by Auré",
    price: 45000,
    deskripsi: `
    🌙💗 Nastar Premium by Auré 💗🌙
    Nastar homemade dengan adonan luar berbahan butter premium yang lembut, wangi, dan lumer di mulut.
    Dipadukan dengan isian selai nanas asli yang dimasak perlahan hingga legit dan seimbang manis-asamnya. Bagian atas dioles kuning telur dan taburan keju premium, yang menghasilkan rasa gurih dan tampilan mewah.
    Dipanggang fresh setiap batch, tanpa bahan pengawet dan tanpa pewarna buatan. Dikemas dalam toples premium ukuran 600 ml yang cantik, dilengkapi stiker eksklusif yang menarik, menjadikannya pilihan sempurna untuk sajian Lebaran maupun hampers istimewa. ✨
    HARGA : Rp. 45.000`,
    group: "hampers",
    hampersType: "kue-kering",
    type: "premium",
    image: "/images/nastar.jpeg",
  },

  {
    id: 2,
    name: "Chocolate Cookies Premium by Auré",
    price: 35000,
    deskripsi: `
    🌙💗 Chocolate Cookies Premium by Auré 💗🌙
    Cookies homemade berbahan cokelat premium dengan tekstur tebal dan fudgy. Dipenuhi chocolate chips melimpah yang memberi sensasi crunchy di setiap gigitan.
    Aroma cokelatnya rich, Rasa cokelatnya kaya, seimbang, dan tidak terlalu manis. Dipanggang fresh setiap batch, tanpa bahan pengawet dan tanpa pewarna buatan.
    Dikemas dalam toples premium ukuran 600 ml yang cantik, dilengkapi stiker eksklusif yang menarik, cocok untuk sajian Lebaran maupun hampers special✨
    HARGA : Rp. 35.000`,
    group: "hampers",
    hampersType: "kue-kering",
    type: "premium",
    image: "/images/cookies.jpeg",
  },

  {
    id: 3,
    name: "Kuping Gajah Premium by Auré",
    price: 20000,
    deskripsi: `
    🌙💗 Kuping Gajah Premium by Auré 💗🌙
    Kue kering klasik dengan tekstur renyah dan ringan, perpaduan rasa manis dan gurih yang seimbang, serta motif dua warna yang cantik dan khas.
    Aroma lembutnya membuat camilan ini selalu jadi favorit. Dikemas dalam toples premium ukuran 600 ml yang cantik, dilengkapi stiker eksklusif yang menarik, cocok untuk sajian Lebaran maupun isian hampers berkelas. ✨
    HARGA : Rp. 20.000`,
    group: "hampers",
    hampersType: "kue-kering",
    type: "regular",
    image: "/images/kuping-gajah.jpg",
  },

  {
    id: 4,
    name: "Soes Coklat Premium by Auré",
    price: 25000,
    deskripsi: `
    🌙💗 Soes Coklat Premium by Auré 💗🌙
    Kue soes dengan kulit lembut dan ringan, diisi vla cokelat premium yang creamy dan rich, dengan rasa manis yang pas dan lumer di mulut.
    Setiap gigitan menghadirkan cita rasa cokelat yang elegan dan memanjakan.
    Dikemas dalam toples premium ukuran 600 ml yang cantik, dilengkapi stiker eksklusif yang menarik, cocok untuk sajian Lebaran maupun isian hampers berkelas✨
    HARGA : Rp. 25.000`,
    group: "hampers",
    hampersType: "kue-kering",
    type: "regular",
    image: "/images/kue-soes.jpg",
  },

  {
    id: 6,
    name: "Aurea Hampers",
    price: 60000,
    deskripsi: `
🌙💗 Aurea Hampers 💗🌙

Hampers Lebaran berisi minuman Marjan Squash yang segar, kue kering & crackers renyah, Arjuna Soes yang lembut, serta Teh Celup Sosro untuk momen santai bersama keluarga. Dikemas cantik dengan ribbon, orchid, dan hangtag, pas untuk hadiah Idul Fitri.
Cocok untuk Keluarga, kerabat, tetangga, rekan kerja, dan relasi.
✨ “Lengkap Isinya, Ramai Suasananya!” ✨
HARGA : Rp. 60.000`,
    group: "hampers",
    hampersType: "snack-sembako",
    image: "/images/aurea.jpeg",
  },

  {
    id: 7,
    name: "Custom Hampers",
    price: 0,
    deskripsi: `
🌙💗 Custom Hampers 💗🌙

AURÉ menghadirkan Custom Hampers yang dibuat sesuai dengan budget, tema, dan kebutuhanmu, memberikan kebebasan untuk menentukan isi, nuansa warna, hingga konsep kemasan. Setiap hampers dikurasi dengan cermat, dikerjakan secara detail, dan dikemas rapi agar tampil elegan, personal, serta siap langsung diberikan. Layanan ini cocok untuk berbagai kebutuhan, mulai dari hadiah personal, corporate gift, hingga momen spesial dan hari raya. 

Minimal order: 1 box
Budget: Menyesuaikan request (rekomendasi akan diberikan oleh tim AURÉ)
Isi produk bisa request sesuai kebutuhan 
Desain & warna disesuaikan dengan keinginan pelanggan 
Revisi: Maks. 1x sebelum produksi
Harga final menyesuaikan isi & tingkat kesulitan custom produksi

“Custom with Heart, Curated with Care.”`,
    group: "hampers",
    hampersType: "snack-sembako",
    image: "/images/custom-hampers.png",
  },

  {
    id: 8,
    name: "Meica Hampers",
    price: 95000,
    deskripsi: `
    🌙💗 Meica Hampers 💗🌙
    Hampers Meica menghadirkan perpaduan bingkisan manis dan fungsional untuk momen Idul Fitri. Berisi Nastar Premium dalam toples 600 mL dengan rasa lembut dan isian nanas yang lumer, dilengkapi mangkuk set cantik yang bisa digunakan kembali untuk sajian keluarga.
    Dikemas rapi dalam keranjang plastik bernuansa elegan, dipercantik dengan ribbon manis dan hangtag spesial Lebaran, menjadikan hampers ini tampak premium dan berkesan sebagai hadiah. Cocok untuk: Keluarga, kerabat, tetangga, rekan kerja, hingga relasi dan hampers corporate.
✨ “Manis Sajinya, Cantik Hadiahnya.” ✨
HARGA : Rp. 95.000`,
    group: "hampers",
    hampersType: "pecah-belah",
    image: "/images/meica.png",
  },

  {
    id: 9,
    name: "Nashi Hampers",
    price: 145000,
    deskripsi: `
    🌙💗 Nashi Hampers 💗🌙
    Hampers Nashi menghadirkan set perlengkapan makan yang cantik dan fungsional untuk melengkapi momen kebersamaan keluarga.
    Berisi piring 8 inci, mangkuk 5 inci, mangkuk set, gelas kaca, serta sumpit (2 pcs) dengan desain menarik yang cocok untuk penggunaan sehari-hari maupun sajian spesial. Seluruh isi dikemas rapi dalam keranjang rotan bernuansa natural, dipercantik dengan ribbon manis dan hangtag Lebaran, memberikan kesan elegan, hangat, dan siap dijadikan hadiah.
Cocok untuk: Keluarga, pasangan baru, kerabat, sahabat, rekan kerja, hingga hadiah rumah baru atau hampers corporate.
✨ “Hadiah Fungsional, Kesan Maksimal” ✨
HARGA : Rp. 145.000`,
    group: "hampers",
    hampersType: "pecah-belah",
    image: "/images/nashi.png",
  },

  {
    id: 10,
    name: "Fafirly Hampers",
    price: 165000,
    deskripsi: `
    🌙💗 Fafirly Hampers 💗🌙
    Hampers Fafily menghadirkan bingkisan Lebaran yang lengkap untuk momen kebersamaan keluarga.
    Berisi piring 8 inci, mangkuk 5 inci, gelas kaca, sumpit (2 pcs) serta Nastar Premium dalam toples 600 mL yang lembut dan lezat, menjadikannya perpaduan sempurna antara perlengkapan makan dan sajian hari raya. Seluruh isi dikemas rapi dalam keranjang rotan bernuansa natural, dipercantik dengan ribbon elegan dan hangtag Lebaran, memberikan tampilan cantik, hangat, dan siap dijadikan hadiah istimewa.
Cocok untuk: Keluarga, kerabat, tetangga, rekan kerja, relasi, pasangan baru, hingga hampers corporate.
✨Hampers Keluarga, Hangatkan Hari Raya✨
HARGA : Rp. 165.000`,
    group: "hampers",
    hampersType: "pecah-belah",
    image: "/images/fafirly.png",
  },

  {
    id: 11,
    name: "Hannifa Hampers",
    price: 175000,
    deskripsi: `
    🌙💗 Hannifa Hampers 💗🌙
    Hampers Hamija hadir sebagai bingkisan Lebaran yang ceria dan lengkap untuk menemani momen silaturahmi.
    Berisi piring 8 inci, mangkuk 5 inci, camilan favorit seperti Astor kaleng, Tango, dan crackers, serta minuman Marjan yang menyegarkan untuk sajian hari raya bersama keluarga. Seluruh isi ditata rapi dalam keranjang rotan bernuansa natural, dipercantik dengan ribbon manis dan hangtag Lebaran, memberikan tampilan cantik, fresh, dan siap dijadikan hadiah.
Cocok untuk: Keluarga, kerabat, tetangga, rekan kerja, sahabat, hingga hampers corporate dengan nuansa hangat dan fun.
✨ “Sajian Lengkap, Lebaran Makin Meriah.” ✨
HARGA : Rp. 175.000`,
    group: "hampers",
    hampersType: "pecah-belah",
    image: "/images/hannifa.png",
  },

  {
    id: 12,
    name: "Lily 4 hampers",
    price: 135000,
    deskripsi: `
    🌙💗 Lily 4 Hampers 💗🌙
    Hampers Lebaran berisi nastar premium homemade 600 ml, cookies premium 600 ml, soes coklat premium 600 ml, dan kuping gajah premium 600 ml, dibuat dengan bahan bahan premium pilihan, fresh tanpa pengawet. Kue Nastar bertekstur lembut, lumer, dengan isian nanas manis-asam seimbang. Cookies renyah, buttery, dan wangi, nikmat di setiap gigitan. Dikemas rapi dengan tas mika, ribbon elegan, dan hangtag, praktis dan cantik untuk hadiah Idul Fitri🌙✨
Cocok untuk Keluarga, sahabat, rekan kerja, dan relasi bisnis.
✨ “Dua Toples Manis, Satu Makna Silaturahmi.” ✨
HARGA : Rp. 135.000`,
    group: "hampers",
    hampersType: "paket-hemat",
    image: "/images/lily4.png",
  },

  {
    id: 13,
    name: "Ren Hampers",
    price: 20000,
    deskripsi: `
🌙💗 Ren Gift 💗🌙

Mini totebag gemas dengan nuansa pink pastel, berisi Indomilk mini, top & Chocopie, dipercantik dengan ribbon elegan dan hangtag manis. Dikemas rapi, lucu, dan siap dibagikan. Cocok untuk berbagi kebahagiaan dengan saudara, keponakan, dan anak anak di hari raya Idul Fitri. 
Hadiah mungil yang bisa bikin senyum lebar dan hati ikut bahagia di hari yang suci✨

Harga:
• Satuan: Rp 20.000
• Paket bundling: Rp 55.000 (3 pcs)
    `,
    group: "hampers",
    hampersType: "paket-hemat",
    image: "/images/ren.png",
  },

  {
    id: 14,
    name: "Aluna Hampers",
    price: 80000,
    deskripsi: `
🌙💗 Aluna Hampers 💗🌙

Hampers Aluna hadir sebagai pilihan bingkisan cantik yang fungsional dan berkesan. Dikemas dalam tas keranjang anyaman bernuansa natural, dipercantik dengan pita elegan, ribbon manis, dan hangtag eksklusif. Aluna hampers berisi gula pasir 500 g, minyak goreng 500 mL, teh celup 15 pcs, dan Tasty 124 g untuk melengkapi kebutuhan hari raya.
Hampers ini cocok untuk berbagai momen spesial seperti Lebaran, maupun tanda perhatian untuk orang terkasih.
Cocok untuk keluarga, kerabat, tetangga, rekan kerja, dan relasi.
✨ Praktis, cantik, dan penuh makna dalam satu bingkisan✨
HARGA : Rp. 80.000`,
    group: "hampers",
    hampersType: "snack-sembako",
    image: "/images/lily2.png",
  },
  
  {
    id: 15,
    name: "Lily 2 Hampers",
    price: 95000,
    deskripsi: `
🌙💗 Lily 2 Hampers 💗🌙

Hampers Lebaran berisi nastar premium homemade 600 ml dan cookies premium 600 ml, dibuat dengan bahan bahan premium pilihan, fresh tanpa pengawet. Kue Nastar bertekstur lembut, lumer, dengan isian nanas manis-asam seimbang. Cookies renyah, buttery, dan wangi, nikmat di setiap gigitan. Dikemas rapi dengan tas mika, ribbon elegan, dan hangtag, praktis dan cantik untuk hadiah Idul Fitri🌙✨
Cocok untuk Keluarga, sahabat, rekan kerja, dan relasi bisnis.
✨ “Dua Toples Manis, Satu Makna Silaturahmi.” ✨
HARGA : Rp. 95.000`,
    group: "hampers",
    hampersType: "paket-hemat",
    image: "/images/lily2.png",
  },

  {
    id: 16,
    name: "Qura Hampers",
    price: 45000,
    deskripsi: `
🌙💗 Qura Gift 💗🌙

Hampers Lebaran berisi nastar premium homemade 500 ml, dibuat dengan bahan bahan premium pilihan, fresh tanpa pengawet, lembut dan lumer di setiap gigitan. Dikemas cantik dengan ribbon dan hangtag eksklusif, rasanya pun pasti istimewa, siap dijadikan hadiah istimewa di hari raya.
Cocok untuk Keluarga, sahabat, tetangga, rekan kerja, dan relasi✨
✨ Manisnya nastar, hangatnya kebersamaan🎁

Harga:
• Satuan: Rp 45.000
• Custom: menyesuaikan pilihan kue kering
    `,
    group: "hampers",
    hampersType: "kue-kering",
    type: "custom-satuan",
    image: "/images/qura.png",
  },
];

export default foods;
