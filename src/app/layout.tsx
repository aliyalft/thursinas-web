import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Poppins
} from "next/font/google";

import "./globals.css";


const poppins = Poppins({

  subsets:["latin"],
  weight:[
    "300",
    "400",
    "500",
    "600"
  ],

  variable:"--font-sans"

});


const cormorant = Cormorant_Garamond({

  subsets:["latin"],

  weight:[
    "400",
    "500",
    "600",
    "700"
  ],

  variable:"--font-serif"

});



export const metadata: Metadata = {

  title:"Thursina's | Fashion Art Handmade",

  description:
  "Fashion handmade dengan sentuhan lukisan tangan."

};



export default function RootLayout({

children,

}: Readonly<{

children:React.ReactNode;

}>) {


return (

<html lang="id">

<body

className={`
${poppins.variable}
${cormorant.variable}
`}

>

{children}

</body>


</html>

);

}