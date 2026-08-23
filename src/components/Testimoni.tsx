"use client";


import { motion } from "framer-motion";



const testimoni = [

{
isi:
"Kalau cari barang-barang unik dengan kualitas yang juara, aku selalu balik lagi ke sini. Sudah punya beberapa item dari mulai baju, tas, scarf hingga sepatu. Gambarnya selalu detail dan hasilnya memuaskan.",

nama:"Mynherva Herlambang",

lokasi:"Pelanggan Thursina's"

},


{
isi:
"Sudah punya beberapa item produk dari Thursina's Craft dan selalu suka. Terasa premium-nya karena setiap produk dikerjakan handmade satu per satu.",

nama:"Dyone Septianis Herlambang",

lokasi:"Pelanggan Thursina's"

}

];





export default function Testimoni(){


return (

<section

id="testimoni"

className="
relative
overflow-hidden
bg-[#EAF5F8]
px-5
py-24
lg:px-10
lg:py-36
"

>


{/* WATER COLOR DECOR */}



<div

className="
absolute
left-[-150px]
top-20
h-[420px]
w-[420px]
rounded-full
bg-cyan-200
opacity-30
blur-[120px]
"

/>



<div

className="
absolute
right-[-120px]
bottom-[-80px]
h-[420px]
w-[420px]
rounded-full
bg-[#F8DCCB]
opacity-35
blur-[130px]
"

/>



<div

className="
absolute
right-[25%]
top-[35%]
h-[300px]
w-[300px]
rounded-full
bg-white
opacity-50
blur-[120px]
"

/>





<div

className="
relative
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
w-12
bg-cyan-500
"

/>


<p

className="
text-[0.72rem]
tracking-[0.4em]
uppercase
text-cyan-600
"

>

Cerita Mereka

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

Karya yang <em className="italic">Dikenang</em>


</h2>




<p

className="
mt-6
max-w-lg
leading-relaxed
text-slate-600
"

>

Cerita dari mereka yang telah merasakan
karya handmade Thursina's dalam keseharian.

</p>



</motion.div>









{/* CARDS */}



<div

className="
mt-12
grid
gap-6
md:grid-cols-2
lg:gap-10
"

>


{

testimoni.map((item,index)=>(


<motion.figure

key={item.nama}


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.12
}}


className="
relative
overflow-hidden
rounded-[2.2rem_0.8rem_2.2rem_0.8rem]
bg-[#FBFAF5]
p-7
sm:p-9
canvas-texture
shadow-[0_25px_60px_-45px_rgba(15,47,73,0.4)]
"

>


{/* NUMBER */}


<p

className="
absolute
right-6
top-5
font-display
text-6xl
text-cyan-500/20
"

>

0{index+1}

</p>





{/* QUOTE */}


<span

className="
font-display
text-6xl
leading-none
text-cyan-400/50
select-none
"

>

"

</span>







<blockquote

className="
mt-3
font-display
text-lg
leading-relaxed
text-navy
italic
sm:text-xl
lg:text-2xl
"

>

{item.isi}

</blockquote>








<figcaption

className="
mt-7
border-t
border-navy/10
pt-5
"

>


<p

className="
font-script
text-2xl
text-navy
"

>

{item.nama}

</p>



<p

className="
mt-1
text-[0.65rem]
tracking-[0.24em]
uppercase
text-slate-500
"

>

{item.lokasi}

</p>



</figcaption>






</motion.figure>


))


}



</div>





</div>



</section>


)

}