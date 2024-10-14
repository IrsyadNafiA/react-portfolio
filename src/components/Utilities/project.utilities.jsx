import Wellbeing from "../Albums/wellbeing.png";
import Peminjaman from "../Albums/peminjaman.png";
import Portal from "../Albums/portal.png";
import NotFound from "../Albums/404.jpg";

const dataProject = [
  {
    id: 1,
    img: `${Portal}`,
    title: "Cladtek Portal",
    desc: "Aplikasi manajemen karyawan di PT. Cladtek Bi-Metal Manufacturing.",
    date: "May 2023 - May 2024",
    tech: "CodeIgniter 3, TailwindCSS, JQuery, MySQL, Alpine JS.",
    link: "https://portal.cladtek.com/",
  },
  {
    id: 2,
    img: `${NotFound}`,
    title: "Guide Me",
    desc: "Aplikasi rekomendasi tempat wisata yang ada di Kota Batam. Selain itu aplikasi ini dikompetisikan pada KMIPN V 2023 di Politeknik Negeri Surabaya",
    date: "Aug 2023",
    tech: "Laravel, TailwindCSS, JQuery, MySQL.",
    link: "https://github.com/IrsyadNafiA/guideme",
  },
  {
    id: 3,
    img: `${Wellbeing}`,
    title: "Well Being",
    desc: "Aplikasi kesehatan untuk pemenuhan gizi",
    date: "Apr 2023",
    tech: "HTML, CSS, Bootstrap, Javascript.",
    link: "https://wellbeing-ivory.vercel.app/",
  },
  {
    id: 4,
    img: `${Peminjaman}`,
    title: "Peminjaman Barang",
    desc: "Aplikasi untuk melakukan peminjaman barang.",
    date: "Feb 2022 - Jul 2022",
    tech: "HTML, Bootstrap, PHP, Javascript, MySQL.",
    link: "https://github.com/IrsyadNafiA/peminjaman-alat-laboratorium",
  },
];

export default dataProject;
