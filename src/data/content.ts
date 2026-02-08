
import DoaDausImg from '../assets/doa-daus.png';
import RespectFuneralImg from '../assets/respect-funeral.png';
import SunanKudusImg from '../assets/sunan-kudus.png';
import MedinaCharterImg from '../assets/medina-charter.png';

export type SlideType =
  | 'hero'
  | 'title'
  | 'split'
  | 'grid'
  | 'timeline'
  | 'diagram'
  | 'zigzag'
  | 'list'
  | 'reflection'
  | 'case-study'
  | 'summary'
  | 'quote'
  | 'closing'
  | 'image-overlay'
  | 'team-members'
  | 'download'
  | 'definition'
  | 'story'
  | 'story'
  | 'showcase'
  | 'content';

export interface SlideContent {
  id: string;
  type: SlideType;
  section?: string;
  title: string;
  subtitle?: string;
  content?: string;
  theme?: 'calm' | 'serious' | 'energetic';
  image?: string;
  footerText?: string;
  items?: Array<{
    title: string;
    desc: string;
    icon?: string;
    wisdom?: string;
    metaTitle?: string;
    metaDesc?: string;
    nickname?: string;
    image?: string;
  }>;
  bullets?: { text: string; icon?: any; metaTitle?: string }[] | string[];
  verse?: { text: string; translation: string; source: string };
  interactionHint?: string;
}

export const slides: SlideContent[] = [
  // --- OPENING ---
  {
    id: '1-hero',
    type: 'hero',
    section: 'BAB 6',
    title: 'TOLERANSI',
    subtitle: 'Membina Kedamaian & Harmoni',
    content: 'Pendidikan Agama Islam - Bab 6',
    interactionHint: 'Scroll untuk memulai membaca',
    theme: 'calm'
  },

  // --- TEAM MEMBERS ---
  {
    id: '1a-team',
    type: 'team-members',
    section: 'KELOMPOK',
    title: 'Anggota Kelompok',
    subtitle: 'Tim Penyusun Presentasi',
    items: [
      { title: 'Muh. Andy Pradana', nickname: 'Andy', desc: 'NIM: ...', icon: 'User' },
      { title: 'Muh. Andy Pradana', nickname: 'Andy', desc: 'NIM: ...', icon: 'User' },
      { title: 'Muh. Andy Pradana', nickname: 'Andy', desc: 'NIM: ...', icon: 'User' },
      { title: 'Muh. Andy Pradana', nickname: 'Andy', desc: 'NIM: ...', icon: 'User' },
    ]
  },

  // --- KISAH INSPIRATIF (TIMELINE) ---
  {
    id: '2-history',
    type: 'timeline',
    section: 'E. KISAH INSPIRATIF',
    title: 'Lintasan Sejarah',
    subtitle: 'Potret Toleransi Masyarakat Muslim',
    bullets: [
      {
        text: 'Zaman Nabi: Piagam Madinah menyatukan Muhajirin, Anshar, dan Yahudi dalam satu konstitusi yang menjamin kebebasan beragama.',
        icon: 'ScrollText'
      },
      {
        text: 'Abu Bakar: Rela hidup sederhana dan miskin demi keadilan sosial, tidak mengambil harta negara untuk kepentingan pribadi.',
        icon: 'Scale'
      },
      {
        text: 'Umar bin Khattab: Menegur Abu Bakar agar mengambil haknya, namun Abu Bakar menolak demi beban amanah di akhirat.',
        icon: 'ShieldCheck'
      },
      {
        text: 'Masyarakat Madani: Keadilan dan pengakuan hak orang lain adalah inti dakwah menuju masyarakat yang harmonis.',
        icon: 'Users'
      }
    ]
  },

  // --- WAWASAN KEISLAMAN (DALIL 1) ---
  {
    id: '3-dalil-yunus',
    type: 'split',
    section: 'F. WAWASAN KEISLAMAN',
    title: 'Q.S. Yunus: 40-41',
    subtitle: 'Dasar Teologis Toleransi',
    content: '**Ayat 40**:\nوَمِنْهُمْ مَنْ يُؤْمِنُ بِهِ وَمِنْهُمْ مَنْ لَا يُؤْمِنُ بِهِ وَرَبُّكَ أَعْلَمُ بِالْمُفْسِدِينَ\n"Dan di antara mereka ada orang-orang yang beriman kepadanya (Al-Qur\'an), dan di antaranya ada (pula) orang-orang yang tidak beriman kepadanya. Sedangkan Tuhanmu lebih mengetahui tentang orang-orang yang berbuat kerusakan."\n\n**Ayat 41**:\nوَإِنْ كَذَّبُوكَ فَقُلْ لِي عَمَلِي وَلَكُمْ عَمَلَكُمْ أَنتُمْ بَرِيَّنُوْنَ مِمَّا أَعْمَلُ وَأَنَا بَرِيءٌ مِمَّا تَعْمَلُونَ\n"Dan jika mereka (tetap) mendustakan (Muhammad), maka katakanlah, Bagiku pekerjaanku dan bagimu pekerjaanmu. Kamu tidak bertanggung jawab terhadap apa yang aku kerjakan dan aku pun tidak bertanggung jawab terhadap apa yang kamu kerjakan."',
    items: [
      {
        title: 'Kelompok Manusia',
        desc: 'Ada yang beriman, dan ada yang menolak kebenaran karena gengsi sosial.',
        icon: 'Users'
      },
      {
        title: 'Prinsip',
        desc: 'Amal masing-masing. Tidak ada paksaan, dan setiap orang bertanggung jawab atas pilihannya sendiri.',
        icon: 'UserCheck'
      }
    ],
    theme: 'serious'
  },

  // --- WAWASAN KEISLAMAN (DALIL 2: Q.S. AL-KAFIRUN) ---
  {
    id: '3b-dalil-kafirun',
    type: 'split',
    section: 'F. WAWASAN KEISLAMAN',
    title: 'Q.S. Al-Kafirun: 1-6',
    subtitle: 'Tegas dalam Akidah',
    content: '**Q.S. Al-Kafirun 1-6**:\nقُلْ يَا أَيُّهَا الْكَافِرُونَ (1) لَا أَعْبُدُ مَا تَعْبُدُونَ (2) وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ (3) وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ (4) وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ (5) لَكُمْ دِينُكُمْ وَلِيَ دِينِ (6)\n\n"Katakanlah (Muhammad), "Wahai orang-orang kafir! (1) Aku tidak akan menyembah apa yang kamu sembah, (2) dan kamu bukan penyembah apa yang aku sembah, (3) dan aku tidak pernah menjadi penyembah apa yang kamu sembah, (4) dan kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah. (5) Untukmu agamamu, dan untukkulah agamaku." (6)"\n\nSurah ini menegaskan batasan toleransi: boleh bekerja sama dalam urusan dunia, tapi **tidak boleh mencampuradukkan akidah dan ibadah**.',
    items: [
      {
        title: 'Asbabun Nuzul',
        desc: 'Jawaban tegas Nabi saw. atas tawaran kafir Quraisy untuk bertukar sesembahan selama setahun.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Prinsip',
        desc: 'Tidak ada kompromi dalam hal keimanan dan peribadatan kepada Allah Swt.',
        icon: 'Lock'
      }
    ],
    theme: 'serious'
  },

  // --- TAFSIR (GRID) ---
  {
    id: '4-tafsir',
    type: 'grid',
    section: 'TAFSIR',
    title: 'Penjelasan Ulama',
    subtitle: 'Makna Q.S. Yunus: 40-41 menurut Mufassir',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2000&auto=format&fit=crop', // Books/Light context
    items: [
      {
        title: 'Pembagian Kelompok',
        desc: 'Penduduk Makkah terbagi dua: yang beriman kepada Al-Qur\'an dan yang tetap kufur selamanya.',
        icon: 'Users',
        metaTitle: 'Tafsir Jalalain'
      },
      {
        title: 'Akar Penolakan',
        desc: 'Sebagian menolak bukan karena tidak tahu, tapi karena keras kepala demi menjaga kedudukan sosial.',
        icon: 'Lock',
        metaTitle: 'M. Quraish Shihab'
      },
      {
        title: 'Hidayah & Kesesatan',
        desc: 'Allah Swt. yang paling mengetahui siapa yang berhak mendapat petunjuk dan siapa yang memilih jalan sesat.',
        icon: 'Compass',
        metaTitle: 'Ibnu Katsir'
      },
      {
        title: 'Peringatan & Ancaman',
        desc: 'Kalimat "Tuhanmu lebih mengetahui" merupakan peringatan keras bagi para perusak dan kaum musyrikin.',
        icon: 'AlertTriangle',
        metaTitle: 'Ibnu Asyur'
      },
      {
        title: 'Keadilan Balasan',
        desc: 'Allah mengetahui setiap kerusakan, kedzaliman, dan sikap melampaui batas, serta akan memberi balasan adil.',
        icon: 'Scale',
        metaTitle: 'Al-Maraghi'
      },
      {
        title: 'Keimanan Hati',
        desc: 'Sesungguhnya iman adalah perbuatan hati yang terdalam, bukan sekadar apa yang tampak secara lahiriah.',
        icon: 'Heart',
        metaTitle: 'Al-Sya\'rawi'
      },
      {
        title: 'Prinsip Lepas Tangan',
        desc: '"Bagiku pekerjaanku, bagimu pekerjaanmu" - Penegasan tanggung jawab amal masing-masing individu di akhirat.',
        icon: 'ShieldCheck',
        metaTitle: 'Tanggung Jawab Amal'
      }
    ]
  },

  // --- DEFINISI (DIAGRAM) ---
  {
    id: '5-definition',
    type: 'definition',
    section: 'PENGERTIAN',
    title: 'Makna Toleransi',
    subtitle: 'Menelusuri Akar Kata & Esensi Perilaku',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop', // Hands/Teamwork/Togetherness
    items: [
      {
        title: 'KBBI (Bahasa)',
        desc: 'Sifat toleran; menghargai, membiarkan, atau membolehkan pendirian yang berbeda dengan diri sendiri.',
        icon: 'Book'
      },
      {
        title: 'Tolerance (Inggris)',
        desc: 'Berasal dari kata "Tolerare" yang berarti kesabaran, daya tahan, dan kelapangan dada.',
        icon: 'Heart'
      },
      {
        title: 'Tasamuh (Arab)',
        desc: 'Berarti lembut dan murah hati. Sikap berlapang dada dan menghargai perbedaan tanpa melepas prinsip.',
        icon: 'Handshake'
      }
    ],
    footerText: 'Berdasarkan H.R. Ahmad, ajaran yang paling dicintai Allah adalah <b>al-hanifiyyah</b> (jalan lurus yang jauh dari kebatilan) dan <b>al-samhah</b> (toleran/mudah). Prinsip ini dibangun di atas kemudahan, sebagaimana firman-Nya: <i>"Dan Dia tidak menjadikan kesukaran bagi kalian dalam agama ini..."</i> (Q.S. al-Hajj: 78).'
  },

  // --- TOLERANSI INTERNAL (REDESIGN) ---
  {
    id: '6-internal',
    type: 'story',
    section: 'TOLERANSI INTERNAL',
    title: 'Sesama Muslim',
    subtitle: 'Menelusuri Hikmah dalam Perbedaan Furu\'iyah',
    image: 'https://www.detik.com/sulsel/berita/d-6747643/kisah-sahabat-yang-ditegur-rasulullah-karena-bacaan-salatnya-panjang', // Islamic geometry/Atmospheric mosque
    items: [
      {
        title: 'Teguran Nabi kepada Mu\'adz',
        desc: 'Sahabat Mu\'adz bin Jabal pernah memanjangkan bacaan shalat saat menjadi imam, sehingga seorang makmum yang kelelahan melapor kepada Nabi. Mendengar hal itu, Nabi sangat marah dan menegur: "Wahai Mu\'adz! Apakah kamu ingin menjadi tukang fitnah (membuat orang lari dari agama)?"',
        icon: 'AlertTriangle',
        wisdom: 'Seorang pemimpin harus peka terhadap kondisi makmumnya (lemah, sakit, atau punya hajat). Toleransi berarti memudahkan, bukan memberatkan.',
        metaTitle: 'Prinsip Kemudahan',
        metaDesc: 'Al-Samhah dalam Ibadah'
      },
      {
        title: 'Bedug vs Kentongan',
        desc: 'KH. Hasyim Asy\'ari (Tebuireng) menggunakan bedug, sedangkan KH. Abdullah Faqih (Maskumambang) menggunakan kentongan. Saat Kiai Hasyim berkunjung, Kiai Faqih memerintahkan santrinya mengganti sementara kentongan dengan bedug demi menghormati sang tamu.',
        icon: 'Handshake',
        wisdom: 'Perbedaan pendapat dalam masalah cabang (furu\'iyah) tidak boleh merusak ukhuwah. Penghormatan sosial jauh lebih tinggi daripada memaksakan pendapat pribadi.',
        metaTitle: 'Ulama Nusantara',
        metaDesc: 'Adab di Atas Perbedaan'
      }
    ]
  },

  // --- EXTERNAL TOLERANCE (CONTENT) ---
  {
    id: '7-external',
    type: 'content',
    section: 'TOLERANSI EKSTERNAL',
    title: 'Dasar Teologis',
    subtitle: 'Q.S. Al-Mumtahanah: 8',
    content: `لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُمْ مِنْ دِيَارِكُمْ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ

"Allah tidak melarang kamu berbuat baik dan berlaku adil terhadap orang-orang yang tidak memerangimu dalam urusan agama dan tidak mengusir kamu dari kampung halamanmu. Sesungguhnya Allah mencintai orang-orang yang berlaku adil."

Ayat ini menegaskan bahwa Islam tidak melarang umatnya untuk berbuat baik (al-birr) dan berlaku adil (al-qist) kepada non-muslim, selama mereka tidak memusuhi Islam. Hubungan sosial yang harmonis adalah kunci kedamaian.`,
    items: [
      {
        title: "Prinsip Keadilan",
        desc: "Berlaku adil adalah perintah Allah kepada siapa saja, termasuk kepada mereka yang berbeda keyakinan."
      },
      {
        title: "Hubungan Sosial",
        desc: "Boleh menjalin hubungan baik, saling membantu, dan bekerja sama dalam urusan duniawiyah."
      }
    ]
  },

  // --- EXTERNAL EXAMPLES (SHOWCASE) ---
  {
    id: '8-external-examples',
    type: 'showcase',
    section: 'CONTOH NYATA',
    title: 'Teladan Toleransi',
    subtitle: 'Sikap Nabi & Ulama pada Non-Muslim',
    items: [
      {
        title: 'Doa untuk Kabilah Daus',
        desc: 'Ketika al-Thufail bin \'Amr melaporkan bahwa Kabilah Daus menolak dakwah dan meminta Nabi melaknat mereka, Nabi justru berdoa: "Ya Allah berilah petunjuk kepada kabilah Daus dan datangkanlah mereka bersama orang muslim".',
        icon: 'Heart', // Icon ignored by component
        wisdom: 'Dakwah itu merangkul bukan memukul, mendoakan bukan melaknat.',
        metaTitle: '01',
        image: DoaDausImg
      },
      {
        title: 'Penghormatan Jenazah',
        desc: 'Saat jenazah Yahudi lewat, Nabi berdiri menghormati. Sahabat bertanya: "Bukankah itu Yahudi?" Nabi menjawab: "Bukankah dia juga manusia?"',
        icon: 'UserCheck', // Icon ignored by component
        wisdom: 'Kemanusiaan mendahului perbedaan keyakinan. Hormati manusia karena dia ciptaan Tuhan.',
        metaTitle: '02',
        image: RespectFuneralImg
      },
      {
        title: 'Sunan Kudus & Sapi',
        desc: 'Sunan Kudus melarang menyembelih sapi di wilayah Kudus untuk menghormati umat Hindu yang mensucikan sapi. Strategi dakwah kultural yang sangat bijak.',
        icon: 'ShieldCheck', // Icon ignored by component
        wisdom: 'Menghargai keyakinan orang lain tidak berarti mengorbankan akidah sendiri.',
        metaTitle: '03',
        image: SunanKudusImg
      },
      {
        title: 'Piagam Madinah',
        desc: 'Konstitusi tertulis pertama di dunia yang menjamin kebebasan beragama bagi Yahudi dan Nasrani selama mereka tidak memerangi kaum muslimin.',
        icon: 'ScrollText', // Icon ignored by component
        wisdom: 'Negara yang kuat dibangun di atas fondasi keadilan dan perlindungan hak bagi semua warganya.',
        metaTitle: '04',
        image: MedinaCharterImg
      }
    ]
  },

  // --- DALIL 2 (QUOTE) ---
  {
    id: '9-dalil-maidah',
    type: 'quote',
    section: 'MEMELIHARA KEHIDUPAN',
    title: 'Q.S. Al-Maidah: 32',
    verse: {
      text: "مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
      translation: "\"Barangsiapa membunuh seseorang, bukan karena orang itu membunuh orang lain, atau bukan karena berbuat kerusakan di bumi, maka seakan-akan dia telah membunuh semua manusia. Barangsiapa memelihara kehidupan seorang manusia, maka seakan-akan dia telah memelihara kehidupan semua manusia.\"",
      source: "Q.S. Al-Maidah: 32"
    }
  },

  // --- TAFSIR AL-MAIDAH: 32 (GRID) ---
  {
    id: '9c-tafsir-maidah',
    type: 'grid',
    section: 'TAFSIR',
    title: 'Makna Ayat',
    subtitle: 'Penjelasan Ulama tentang Q.S. Al-Maidah: 32',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000&auto=format&fit=crop', // Book/Library context
    items: [
      {
        title: 'Universalitas Hukum',
        desc: 'Ibnu \'Asyur menjelaskan bahwa syari\'at ini telah ditetapkan sejak masa Bani Isra\'il dan tetap berlaku bagi umat Islam karena mengandung kemaslahatan universal (hifz an-nafs).',
        icon: 'Globe',
        metaTitle: 'Ibnu \'Asyur'
      },
      {
        title: 'Konteks Historis',
        desc: 'Buya Hamka (Tafsir Al-Azhar) menyoroti bahwa aturan ini ditekankan pada Bani Isra\'il karena sejarah mereka yang mudah menumpahkan darah, bahkan membunuh para Nabi.',
        icon: 'History',
        metaTitle: 'Buya Hamka'
      },
      {
        title: 'Alasan Pelarangan',
        desc: 'Al-Maraghi menegaskan bahwa pembunuhan hanya dibenarkan dalam penegakan hukum (qishash) atau perang (jihad). Diluar itu, pembunuhan merusak tatanan kehidupan.',
        icon: 'ShieldAlert',
        metaTitle: 'Al-Maraghi'
      },
      {
        title: 'Nilai Satu Nyawa',
        desc: '"...seakan-akan dia telah memelihara kehidupan semua manusia". Menyelamatkan satu nyawa adalah representasi penghargaan tertinggi terhadap hak asasi manusia.',
        icon: 'HeartHandshake',
        metaTitle: 'Prinsip Kemanusiaan'
      },
      {
        title: 'Ancaman Kerusakan',
        desc: 'Ayat ini menutup dengan peringatan bahwa meskipun rasul telah datang membawa bukti nyata, masih banyak manusia yang "melampaui batas" (israf) dengan berbuat kerusakan.',
        icon: 'AlertTriangle',
        metaTitle: 'Peringatan'
      }
    ]
  },

  // --- NEW: IMAGE OVERLAY SECTION ---
  {
    id: '9b-visual-break',
    type: 'image-overlay',
    section: 'REFLEKSI VISUAL',
    title: 'Keindahan dalam Keberagaman',
    subtitle: 'Seperti pelangi yang indah karena berbeda warnanya, kehidupan menjadi harmonis karena kita saling menghargai perbedaan.',
    content: 'Toleransi bukan sekadar membiarkan, tetapi menghargai dan merayakan keberagaman sebagai anugerah Tuhan.',
  },

  // --- CLOSING/SUMMARY ---
  {
    id: '10-summary',
    type: 'summary',
    section: 'KESIMPULAN',
    title: 'Intisari Bab 6',
    subtitle: '6 Poin Penting tentang Toleransi',
    bullets: [
      {
        text: '**Makna Tasamuh**: Islam adalah agama *rahmatan lil alamin* yang mengajarkan kemudahan, cinta damai, dan menghargai perbedaan sebagai sunnatullah.',
        icon: 'Heart',
        metaTitle: 'Esensi'
      },
      {
        text: '**Bukti Sejarah**: Rasulullah Saw. mencontohkan toleransi nyata melalui **Piagam Madinah**, yang menjamin hak hidup berdampingan antarumat beragama dengan adil.',
        icon: 'ScrollText',
        metaTitle: 'Teladan'
      },
      {
        text: '**Batasan Akidah**: Toleransi berlaku luas dalam urusan dunia (muamalah), namun **tegas** dalam akidah: *"Untukmu agamamu, untukku agamaku"* (Q.S. Al-Kafirun).',
        icon: 'ShieldCheck',
        metaTitle: 'Prinsip'
      },
      {
        text: '**Hifz an-Nafs**: Menjaga nyawa adalah kewajiban mutlak. Membunuh satu jiwa tanpa alasan *haq* sama dengan membunuh seluruh manusia (Q.S. Al-Maidah: 32).',
        icon: 'LifeBuoy',
        metaTitle: 'Kemanusiaan'
      },
      {
        text: '**Dasar Teologis**: Q.S. Al-Mumtahanah: 8 menegaskan bolehnya berbuat baik dan berlaku adil kepada non-muslim yang tidak memusuhi Islam.',
        icon: 'BookOpen',
        metaTitle: 'Dalil'
      },
      {
        text: '**Harmoni Sosial**: Tujuan akhir toleransi adalah terciptanya masyarakat yang rukun, damai, dan saling menghargai tanpa mengorbankan keyakinan masing-masing.',
        icon: 'Users',
        metaTitle: 'Tujuan'
      }
    ]
  },

  // --- DOWNLOAD ---
  {
    id: '11-download',
    type: 'download', // Make sure this matches the SlideType string
    title: 'Unduh Materi Presentasi',
    subtitle: 'Silakan unduh materi lengkap dalam format PPT atau Dokumen untuk dipelajari kembali.'
  },

  // --- FOOTER ---
  {
    id: '12-closing',
    type: 'closing',
    title: 'Terima Kasih',
    subtitle: 'Semoga kita menjadi pribadi yang toleran dan membawa kedamaian bagi semesta.'
  }
];
