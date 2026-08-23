"use client";


import { motion } from "framer-motion";



export default function Tentang(){


return (

<section

id="tentang"

className="
relative
overflow-hidden
px-5
py-24
lg:px-10
lg:py-36
"

>


{/* Decorative watercolor */}

<div

className="
absolute
right-0
top-10
h-80
w-80
rounded-full
bg-cyan-100
opacity-25
blur-[100px]
"

/>



<div

className="
relative
mx-auto
grid
max-w-7xl
items-center
gap-14
lg:grid-cols-[0.95fr_1fr]
lg:gap-24
"

>



{/* IMAGE */}



<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
relative
"

>



<div

className="
canvas-texture
relative
overflow-hidden
rounded-[3rem_1rem_3rem_1rem]
border
border-cyan-100
shadow-[0_40px_80px_-50px_var(--navy)]
"

>


<img

src="/assets/proses-lukis.png"

alt="Proses melukis kain Thursina's"

loading="lazy"

className="
w-full
h-full
object-cover
transition-transform
duration-[1.2s]
hover:scale-105
"

/>


</div>






{/* YEAR BADGE */}

<div

className="
absolute
right-[-10px]
bottom-[-10px]
grid
h-20
w-20
place-items-center
rounded-full
border
border-cyan-400
bg-white/95
shadow-[0_20px_50px_-25px_rgba(16,42,67,.35)]
backdrop-blur

sm:h-24
sm:w-24
sm:right-[-15px]
sm:bottom-[-15px]

lg:h-28
lg:w-28
lg:right-[-30px]
lg:bottom-[-20px]
"

>


<div

className="
text-center
"

>


<p

className="
font-display
text-2xl
text-navy
sm:text-3xl
"

>

2017

</p>


<p

className="
mt-1
text-[0.5rem]
sm:text-[0.55rem]
tracking-[0.3em]
uppercase
text-cyan-600
"

>

Est.

</p>


</div>


</div>



</motion.div>









{/* CONTENT */}



<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
lg:pt-10
"

>




{/* LABEL */}


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

Tentang Kami

</p>


</div>







<h2

className="
mt-6
font-display
text-4xl
leading-tight
text-navy
sm:text-5xl
lg:text-6xl
"

>

Sebuah Perjalanan

<br/>


<em

className="
italic
"

>

Seni & Tradisi

</em>


</h2>








<p

className="
mt-8
max-w-xl
text-lg
leading-relaxed
text-slate-600
"

>

Berdiri sejak tahun 2017, Thursina's menghadirkan
perpaduan antara fashion dan seni lukis tangan
melalui karya yang dibuat secara personal.

</p>




<p

className="
mt-5
max-w-xl
leading-relaxed
text-slate-600
"

>

Setiap karya lahir dari proses kreatif yang penuh
ketelitian. Goresan warna, motif, dan detail pada
setiap produk menjadikan fashion bukan hanya
sebuah benda pakai, tetapi sebuah cerita yang
dapat dikenang.

</p>





<p

className="
mt-8
font-script
text-3xl
text-cyan-500
"

>

"Setiap karya, satu cerita."

</p>






</motion.div>





</div>



</section>


)

}