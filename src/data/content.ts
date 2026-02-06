
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
  | 'download';

export interface SlideContent {
  id: string;
  type: SlideType;
  section?: string;
  title: string;
  subtitle?: string;
  content?: string;
  theme?: 'calm' | 'serious' | 'energetic';
  image?: string;
  items?: { title: string; desc: string; icon?: any }[]; // Grid/Split items
  bullets?: { text: string; icon?: any }[] | string[];
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
    content: 'Kajian Pendidikan Agama Islam - Bab 6',
    interactionHint: 'Scroll untuk memulai pembelajaran',
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
      { title: 'Anggota 1', desc: 'NIM: ...', icon: 'User' },
      { title: 'Anggota 2', desc: 'NIM: ...', icon: 'User' },
      { title: 'Anggota 3', desc: 'NIM: ...', icon: 'User' },
      { title: 'Anggota 4', desc: 'NIM: ...', icon: 'User' },
      { title: 'Anggota 5', desc: 'NIM: ...', icon: 'User' },
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
    items: [
      {
        title: 'Jalalain',
        desc: 'Penduduk Mekkah terbagi dua: yang beriman (warga surga) dan yang kufur selamanya (ahli neraka).',
        icon: 'BookOpen'
      },
      {
        title: 'Quraish Shihab',
        desc: 'Menolak bukan karena tak tahu, tapi karena keras kepala dan gengsi mempertahankan posisi sosial.',
        icon: 'UserX'
      },
      {
        title: 'Ibnu Katsir',
        desc: 'Allah Maha Mengetahui siapa yang berhak dapat hidayah dan siapa yang memilih sesat (mufsidin).',
        icon: 'Lightbulb'
      }
    ]
  },

  // --- DEFINISI (DIAGRAM) ---
  {
    id: '5-definition',
    type: 'diagram',
    section: 'PENGERTIAN',
    title: 'Makna Toleransi',
    subtitle: 'Dari Bahasa & Istilah',
    items: [
      {
        title: 'Tolerance (Inggris)',
        desc: 'Kesabaran, kelapangan dada.',
        icon: 'Heart'
      },
      {
        title: 'Tasamuh (Arab)',
        desc: 'Sama-sama berlaku baik, lemah lembut, dan saling pemaaf.',
        icon: 'Handshake'
      },
      {
        title: 'Al-Hanifiyyah',
        desc: 'Jalan lurus yang lapang dan tidak sempit (HR. Ahmad).',
        icon: 'Zap'
      },
      {
        title: 'Al-Samhah',
        desc: 'Toleran, memudahkan, tidak memberatkan.',
        icon: 'Scale'
      }
    ]
  },

  // --- INTERNAL TOLERANCE (ZIGZAG) ---
  {
    id: '6-internal',
    type: 'zigzag',
    section: 'TOLERANSI INTERNAL',
    title: 'Sesama Muslim',
    subtitle: 'Menghargai perbedaan pendapat (Furu\'iyah)',
    bullets: [
      {
        text: 'Nabi Marah pada Muadz: Karena memanjangkan shalat saat jadi imam, memberatkan makmum yang sakit/lemah. "Apakah kamu ingin membuat fitnah (kekacauan)?"',
        icon: 'AlertTriangle'
      },
      {
        text: 'KH Hasyim Asyari & KH Faqih: Saling menghormati perbedaan penggunaan Bedug vs Kentongan. Saat berkunjung, tuan rumah menyesuaikan diri demi menghormati tamu.',
        icon: 'Handshake'
      }
    ]
  },

  // --- EXTERNAL TOLERANCE (CASE STUDY) ---
  {
    id: '7-external',
    type: 'case-study',
    section: 'TOLERANSI EKSTERNAL',
    title: 'Antar Umat Beragama',
    subtitle: 'Hadis Riwayat Al-Bukhari',
    content: 'Studi Kasus: Suatu hari, jenazah seorang Yahudi dibawa melewati Nabi Muhammad SAW dan para sahabat.',
    interactionHint: 'Apa respon Nabi saat itu?',
    image: 'https://images.unsplash.com/photo-1596561026048-ff31df95e927?q=80&w=2000&auto=format&fit=crop', // Ancient city/crowd vibe
    // The component logic handles the reveal: "Nabi berdiri menghormati. 'Bukankah dia juga manusia?'"
  },

  // --- EXTERNAL EXAMPLES (LIST) ---
  {
    id: '8-external-examples',
    type: 'list',
    section: 'CONTOH NYATA',
    title: 'Teladan Toleransi',
    subtitle: 'Sikap Nabi & Ulama pada Non-Muslim',
    bullets: [
      { text: '**Doa Nabi untuk Kabilah Daus**: "Ya Allah berilah petunjuk kepada kabilah Daus dan datangkanlah mereka bersama orang muslim". Nabi mendoakan hidayah, bukan laknat.', icon: 'Heart' },
      { text: '**Sunan Kudus & Sapi**: Melarang menyembelih sapi untuk menghormati umat Hindu di Kudus. Bentuk penghargaan sosial tanpa mengorbankan akidah.', icon: 'ShieldCheck' },
      { text: '**Piagam Madinah**: Konstitusi pertama yang menjamin kebebasan beragama dan perlindungan bagi umat Yahudi selama mereka tidak memerangi.', icon: 'Scale' }
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
    subtitle: 'Poin-poin Penting untuk Diingat',
    // Using an image appropriate for summary/closing context
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2000&auto=format&fit=crop',
    bullets: [
      { text: '**Tasamuh**: Islam agama yang mudah, cinta damai, dan menghargai perbedaan khilafiyah.', icon: 'Heart' },
      { text: '**Batas Toleransi**: Boleh dalam muamalah/sosial (duniawi), **haram** dalam aqidah/ibadah (lakum diinukum waliyadiin).', icon: 'AlertTriangle' },
      { text: '**Hifz an-Nafs**: Menjaga jiwa manusia adalah kewajiban mulia, tidak boleh menumpahkan darah tanpa alasan haq.', icon: 'ShieldCheck' }
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
