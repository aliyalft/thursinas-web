"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


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



export default function Navbar(){


const [scrolled,setScrolled] = useState(false);

const [open,setOpen] = useState(false);



useEffect(()=>{


const handleScroll = ()=>{

setScrolled(window.scrollY > 24);

};


handleScroll();


window.addEventListener(
"scroll",
handleScroll,
{
passive:true
}
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);





return (

<header

className={`
fixed
top-0
left-0
right-0
z-50
transition-all
duration-500

${
scrolled
?
"border-b border-slate-200/70 bg-[#FCF8EF]/85 backdrop-blur-xl"
:
"bg-transparent"
}

`}

>



<nav

className="
mx-auto
max-w-7xl
px-5
py-4
lg:px-10
flex
items-center
justify-between
"

>





{/* LOGO */}


<a

href="#beranda"

className="
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12
rounded-full
overflow-hidden
border
border-cyan-400/60
bg-white
shadow-sm
"

>


<img

src="/assets/logo-trs1.png"

alt="Logo Thursina's"

className="
w-full
h-full
object-cover
"

/>


</div>




<div>

<p

className="
font-display
text-xl
leading-none
text-navy
"

>

Thursina's

</p>


<p

className="
text-[0.6rem]
tracking-[0.3em]
uppercase
text-slate-500
mt-1
"

>

Fashion Art

</p>


</div>



</a>








{/* DESKTOP MENU */}



<div

className="
hidden
lg:flex
flex-1
items-center
justify-center
"

>


<ul

className="
flex
items-center
gap-8
text-sm
text-slate-700
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
relative
py-2
transition-colors
hover:text-cyan-600

after:absolute
after:left-0
after:right-0
after:-bottom-1
after:h-px
after:bg-cyan-500

after:origin-left
after:scale-x-0
hover:after:scale-x-100

after:transition-transform
"

>

{item.label}

</a>


</li>


))

}


</ul>



</div>








{/* DESKTOP CTA */}



<a

href="#kontak"

className="
hidden
lg:block
rounded-full
bg-cyan-500
px-7
py-3
text-sm
font-medium
text-white
shadow-lg
shadow-cyan-500/20
transition
hover:-translate-y-1
"

>

Hubungi Kami

</a>







{/* MOBILE BUTTON */}



<button

onClick={()=>setOpen(!open)}

aria-label="Menu"

className="
lg:hidden
relative
z-[70]
w-11
h-11
rounded-full
border
border-slate-200
bg-white/80
backdrop-blur
flex
items-center
justify-center
"

>

{

open

?

<X size={21}/>

:

<Menu size={21}/>

}


</button>





</nav>









{/* MOBILE OVERLAY */}



<AnimatePresence>


{

open && (


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

transition={{
duration:.25
}}

className="
fixed
inset-0
bg-black/25
backdrop-blur-sm
lg:hidden
"

onClick={()=>setOpen(false)}

/>


)

}


</AnimatePresence>










{/* MOBILE DRAWER */}



<AnimatePresence>


{

open && (


<motion.aside

initial={{
x:"100%"
}}

animate={{
x:0
}}

exit={{
x:"100%"
}}

transition={{

type:"spring",

stiffness:260,

damping:28

}}

className="
fixed
right-0
top-0
h-screen
w-[78%]
max-w-[330px]
bg-[#FCF8EF]/95
backdrop-blur-xl
shadow-2xl
lg:hidden
z-[60]
overflow-y-auto
"

>





{/* DRAWER HEADER */}



<div

className="
px-5
pt-5
pb-6
border-b
border-slate-200/70
"

>


<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12
rounded-full
overflow-hidden
border
border-cyan-400/60
bg-white
"

>


<img

src="/assets/logo-trs1.png"

alt="Logo"

className="
w-full
h-full
object-cover
"

/>


</div>





<div>


<p

className="
font-display
text-xl
text-navy
"

>

Thursina's

</p>


<p

className="
text-[0.6rem]
tracking-[0.3em]
uppercase
text-slate-500
"

>

Fashion Art

</p>


</div>


</div>



</div>








{/* LINKS */}



<ul

className="
px-5
py-4
space-y-1
"

>


{

links.map((item)=>(


<li

key={item.href}

>


<a

href={item.href}

onClick={()=>setOpen(false)}

className="
block
py-4
font-display
text-2xl
text-[#102A43]
border-b
border-slate-200/60
transition
hover:text-cyan-600
"

>

{item.label}

</a>


</li>


))

}


</ul>









{/* CTA */}



<div

className="
px-5
pb-8
pt-3
"

>


<a

href="#kontak"

onClick={()=>setOpen(false)}

className="
block
rounded-full
bg-[#20C4C7]
py-4
text-center
text-white
shadow-lg
shadow-cyan-500/20
transition
hover:scale-[1.02]
"

>

Hubungi Kami

</a>


</div>






</motion.aside>


)

}


</AnimatePresence>



</header>


)

}