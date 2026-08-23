"use client";


import { FaInstagram } from "react-icons/fa";



const links = [

{
label:"Beranda",
href:"#beranda"
},

{
label:"Tentang",
href:"#tentang"
},

{
label:"Galeri",
href:"#galeri"
},

{
label:"Layanan",
href:"#layanan"
},

{
label:"Kelas Lukis",
href:"#kelas"
},

{
label:"Kontak",
href:"#kontak"
}

];




export default function Footer(){


return (

<footer

className="
relative
overflow-hidden
bg-navy
px-5
py-16
text-white
lg:px-10
"

>


{/* decorative blob */}


<div

className="
absolute
right-[-120px]
top-[-100px]
h-80
w-80
watercolor
bg-cyan-400
opacity-20
"

/>




<div

className="
relative
mx-auto
grid
max-w-7xl
gap-12
md:grid-cols-[1.4fr_1fr_1fr]
"

>





{/* BRAND */}



<div>


<div

className="
flex
items-center
gap-3
"

>


<div

className="
h-12
w-12
overflow-hidden
rounded-full
border
border-cyan-300
bg-white
"

>


<img

src="/assets/logo-trs1.png"

alt="Logo Thursina's"

className="
h-full
w-full
object-cover
"

/>


</div>



<p

className="
font-display
text-3xl
"

>

Thursina's

</p>



</div>





<p

className="
mt-6
max-w-sm
text-sm
leading-relaxed
text-white/70
"

>

Fashion art handmade asal Cimahi Selatan.
Menghadirkan produk fashion dengan
sentuhan lukisan tangan yang memiliki
cerita sejak tahun 2017.

</p>




<p

className="
mt-6
font-script
text-3xl
text-cyan-300
"

>

wearable stories

</p>



</div>







{/* NAVIGATION */}



<nav>


<p

className="
text-[0.6rem]
tracking-[0.28em]
uppercase
text-white/50
"

>

Navigasi

</p>




<ul

className="
mt-5
space-y-3
text-sm
text-white/80
"

>


{

links.map((item)=>(


<li

key={item.href}

>


<a

href={item.href}

className="
transition
hover:text-cyan-300
"

>

{item.label}

</a>


</li>


))


}


</ul>



</nav>








{/* SOCIAL */}



<div>


<p

className="
text-[0.6rem]
tracking-[0.28em]
uppercase
text-white/50
"

>

Terhubung

</p>




<a

href="https://instagram.com/thursina_craft_fashion"

target="_blank"

rel="noreferrer"

className="
mt-5
inline-flex
items-center
gap-3
rounded-full
border
border-white/20
px-5
py-3
text-sm
text-white/80
transition
hover:border-cyan-300
hover:text-cyan-300
"

>


<FaInstagram size={18}/>


@thursina_craft_fashion


</a>





<p

className="
mt-5
text-sm
text-white/70
"

>

WhatsApp

<br/>

08165440595 / 081333356289

</p>



<p

className="
mt-3
text-sm
text-white/70
"

>

Jam Operasional

<br/>

10.00 - 16.00 WIB

</p>



</div>






</div>







{/* COPYRIGHT */}



<div

className="
relative
mx-auto
mt-14
max-w-7xl
border-t
border-white/15
pt-6
text-xs
text-white/50
"

>


© {new Date().getFullYear()} Thursina's.
Handmade with love in Cimahi Selatan.


</div>



</footer>


)

}