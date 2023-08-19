import { Stack,Box } from "@mui/material";
import img1 from "../img/Blue and Pink Soft Magazine Cover Mockup Instagram Post.png";

import img2 from"../img/111644866.jpg"

import img3 from "../img/egb.jpeg"

import img4 from"../img/photo1692488173.jpeg"

const About = () => {
  return (
    <div>
      <h2> nə üçün ReadCycle?</h2>

<Stack flexDirection="row" gap="10px">



      <p
        style={{
          fontSize: "20px",
        }}
      >
       Bəli bu sizə çox qəribə gələcək, axı bu şirkətin sahibkarları
        Azərbaycanlılardı . <br />
        Bunun özü bir fərqlilikdir eləcədə bir balaca situatsiya da olsa sizlərə
        xatırlatmag istədikki <br /> (həyat fərqliliyi sevir).
        <br /> Biz bu şirkəti yaratdıqda qərara gəldikki ele bir ad seçim edəkki
        insanların düşüncəsində qalaq və <br /> biz bunu təkcə adımız ilə deyil
        <br />
        öz fəaliyyətimiz ilə göstərmiyi məqsəd qoymuşuq. <br /> Zəmanəmiz
        nəqədər inkşaf etsədə bir o qədərdə yaşam tərzi çətinləşir . <br />
        Ona görədə bele qərara gəldikki yenede vurğulamag istərdim fərqlilik
        edək , <br /> İnsanların çoxun problemi vaxtdır. <br /> Nəqədər az
        olsada yenede kitab oxuyan vaxtını onlara sərf edən insanlar qalıb.{" "}
        <br />
        Lakin maddiyətin yaratdığı probləmlər vardır və bizim şirkətdən istifadə
        edərək müştəri həm oxuyacag,həm də qazanacag. <br />
        Fikrimizcə çox insana kitab oxutdurub azda olsa təcrübə qazandıra
        bilərik.
<br />

Artıq müştərilərimiz artmağa başlayıb baxmayaraq ki, yeniyik. <br /> Kitab sevərlər sosial-şəbəkələrdən bizi izləyin ki , sevdiyiniz kitabları anında əldə edin.
      </p>



      <img style={{
        width:"200px"
      }} src={img1} alt="" />
</Stack>



<h1>Sahibkarlar</h1>


<Stack flexDirection="row" gap="40px" justifyContent="center">


<Box  
sx={{
   
        padding:"10px",
        width:"200px",
        boxShadow:"rgba(0, 0, 0, 0.05);"
      }}


>
    <h2>Sumalov intiqam</h2>
<img style={{
        width:"200px"
      }} src={img2} alt="" />


</Box>



<Box

sx={{

    padding:"10px",
    width:"200px",
   
    boxShadow:"rgba(0, 0, 0, 0.05);"
  }}
>
    <h2>Bayramov Eyyub</h2>
<img style={{
        width:"200px",
        height:"200px"
      }} src={img3} alt="" />


</Box>



<Box

sx={{

    padding:"10px",
    width:"200px",
    boxShadow:"rgba(0, 0, 0, 0.05);"
  }}
>
    <h2>Həsənov Samir</h2>
<img style={{
      width: "211px",
      height: "214px"
      }} src={img4} alt="" />


</Box>
</Stack>







    </div>
  );
};

export default About;
