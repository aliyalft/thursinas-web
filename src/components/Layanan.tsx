"use client";


import { motion } from "framer-motion";



const layanan = [

{
no:"01",

judul:"Fashion Fabric Painting",

deskripsi:
"Lukisan tangan di atas clutch, vest, sepatu, hijab, pashmina hingga mukena. Setiap motif dibuat dengan memperhatikan karakter dan cerita pemakainya.",

warna:"bg-mint"

},


{
no:"02",

judul:"Custom Painting",

deskripsi:
"Ceritakan ide dan konsep yang kamu miliki. Kami menerjemahkannya menjadi komposisi warna dan goresan yang memiliki karakter unik.",

warna:"bg-peach"

},


{
no:"03",

judul:"Kelas Lukis",

deskripsi:
"Belajar teknik melukis kain bersama Thursina's melalui kelas privat maupun kelompok, tersedia secara online dan offline.",

warna:"bg-sky"

},


{
no:"04",

judul:"Jasa Desain Digital",

deskripsi:
"Menghadirkan kebutuhan visual kreatif seperti desain poster, video, dan konsep digital untuk berbagai kebutuhan.",

warna:"bg-butter"

}

];




export default function Layanan(){


return (

<section

id="layanan"

className="
relative
overflow-hidden
px-5
py-24
lg:px-10
lg:py-36
bg-[#FBFAF5]
"

>


{/* BACKGROUND IMAGE DESKTOP */}

<div

className="
absolute
right-0
top-0
hidden
h-full
w-[65%]
bg-cover
bg-right
opacity-60
sm:block
"

style={{
backgroundImage:"url('/assets/service-bg.png')"
}}

/>


{/* MOBILE BACKGROUND */}

<div
className="
absolute
right-[-10px]
top-[-90px]
block
h-[500px]
w-[500px]
bg-cover
bg-center
opacity-60
sm:hidden
"
style={{
backgroundImage:"url('/assets/service-bg-mobile.png')"
}}
/>


{/* IVORY OVERLAY */}

<div

className="
absolute
inset-0
bg-gradient-to-b
from-[#FBFAF5]/80
via-[#FBFAF5]/45
to-[#FBFAF5]/85
"

/>



{/* WATER COLOR DECORATION */}

<div

className="
absolute
right-[-120px]
top-20
z-20
h-96
w-96
rounded-full
bg-cyan-100
opacity-30
blur-[120px]
"

/>



<div

className="
relative
z-30
mx-auto
max-w-7xl
"

>



{/* HEADER */}



<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
max-w-2xl
"

>


<div

className="
flex
items-center
gap-4
"

>


<span

className="
h-px
w-10
bg-cyan-400
"

/>



<p

className="
text-[0.72rem]
tracking-[0.45em]
uppercase
text-cyan-600
"

>

Creative Services

</p>


</div>






<h2

className="
mt-6
font-display
text-4xl
leading-tight
text-navy
sm:text-6xl
lg:text-7xl
"

>

Explore Our

<br/>

<em className="italic">

Creativity

</em>


</h2>





<p

className="
mt-6
text-slate-600
leading-relaxed
"

>

Tidak hanya menghasilkan karya fashion,
Thursina's juga membuka ruang untuk
berkreasi, belajar, dan berkolaborasi
melalui berbagai layanan kreatif.

</p>



</motion.div>









{/* SERVICES LIST */}



<div

className="
mt-14
border-t
border-slate-200/80
"

>


{

layanan.map((item,index)=>(


<motion.article

key={item.no}


initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{

delay:index*.08

}}



className="
group
relative
grid
grid-cols-1
items-start
gap-5
border-b
border-slate-200/80
py-10
md:grid-cols-[auto_1fr_1.1fr]
md:gap-12
md:py-14
overflow-hidden
"

>



{/* COLOR BLOB */}



<div

className={`

absolute
left-0
top-5
h-40
w-40
blob
${item.warna}
opacity-25
transition-opacity
duration-700
group-hover:opacity-70

`}

/>







{/* NUMBER */}



<p

className="
relative
font-display
text-2xl
text-cyan-600
"

>

{item.no}

</p>









{/* TITLE */}



<h3

className="
relative
font-display
text-3xl
leading-tight
text-navy
transition-transform
duration-500
md:text-5xl
md:group-hover:translate-x-3
"

>

{item.judul}

</h3>









{/* DESCRIPTION */}



<p

className="
relative
max-w-md
leading-relaxed
text-slate-600
md:pt-3
"

>

{item.deskripsi}

</p>






</motion.article>


))


}



</div>



</div>



</section>


)

}