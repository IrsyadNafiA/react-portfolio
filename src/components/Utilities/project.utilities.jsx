import React from "react";
import Portfolio from '../Albums/Portfolio.png'
import Wellbeing from '../Albums/wellbeing.png'
import Peminjaman from '../Albums/peminjaman.png'


const dataProject = [
    {
        "id" : 1,
        "img" : `${Wellbeing}`,
        "title" : "Well Being",
        "desc" : "Aplikasi kesehatan untuk pemenuhan gizi",
        "date" : "Apr 2023",
        "tech" : "HTML, CSS, Bootstrap, Javascript."
    },
    {
        "id" : 2,
        "img" : `${Peminjaman}`,
        "title" : "Peminjaman Barang",
        "desc" : "Aplikasi untuk melakukan peminjaman barang.",
        "date" : "Feb 2022 - Jul 2022",
        "tech" : "HTML, Bootstrap, PHP, Javascript."
    },
]

export default dataProject