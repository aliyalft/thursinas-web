import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


return [


{

url:
"https://thursina.shop",

lastModified:
new Date(),

changeFrequency:
"weekly",

priority:
1,

},



{

url:
"https://thursina.shop/tentang",

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
0.8,

},



{

url:
"https://thursina.shop/galeri",

lastModified:
"weekly",

changeFrequency:
"weekly",

priority:
0.9,

},



{

url:
"https://thursina.shop/layanan",

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
0.8,

},



{

url:
"https://thursina.shop/kelas",

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
0.7,

},



{

url:
"https://thursina.shop/kontak",

lastModified:
new Date(),

changeFrequency:
"monthly",

priority:
0.8,

}


];


}