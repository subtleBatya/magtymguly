import { useState } from 'react'
// import { FaSearch } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import uzynburc from '../assets/uzynburc.png'
// import gysgaburc from '../assets/gysga8burc.png'
// import ucgelin from '../assets/ucgelin.png'
// import gozel from '../assets/gozel.png'
// import left from '../assets/8burc.png'
// import right from '../assets/8burc.png'
// import news from '../assets/newscyz.png'
// import sekizburc from '../assets/8burc.png'
// import makalacyz from '../assets/makalacyz.png'
// import makalarect from '../assets/makalarect.png'

import { NavLink } from 'react-router-dom'
import { FaPenFancy } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(false);

  return (
    
      <div className='root'>
        {/* <div className='bg-blue-700  header_top relative text-white font-bold '>
        
        
        <div className=" container pt-10 flex justify-between items-end pb-3">
           <div className=" line-clamp-2 text-start w-1/3 font-semibold uppercase tracking-widest">
           Türkmenistanyň<br />Yaşlar Syýasaty
           </div>
        
          <div className=" line-clamp-2 text-center w-1/3 font-semibold capitalize tracking-wide">logo</div> 
          <div className='line-clamp-2 text-end w-1/3 flex flex-col font-semibold tracking-wide'>
            <div className="">18.04.24</div>  
            <div className="">AŞGABAT/TÜRKMENISTAN</div>
          </div>
         
        </div>


        <div className=' navbar text-white bg-blue-700'>
         <div className="container pt-8 h-auto w-[100%] z-20 flex justify-between items-end pb-3">
         <div className="links">
            <ul className="flex justify-between items-center gap-4 font-semibold">
             <li className=' cursor-pointer'>Bas sahypa</li>
             <li className=' cursor-pointer'>Bas sahypa</li>
             <li className=' cursor-pointer'>Bas sahypa</li>
             <li className=' cursor-pointer'>Bas sahypa</li>
             <li className=' cursor-pointer'>Bas sahypa</li>
             <li className=' cursor-pointer'>Bas sahypa</li>
             <li className=' cursor-pointer'>Bas sahypa</li>
           </ul>
          </div>
          <div className="flex items-center gap-6">
          <FaSearch />
          <div className=' items-center justify-center align-middle'>
            <div className='  font-semibold rounded-none ' onClick={() => setShow(true)}>TM</div>
            
            <div className={`absolute top-30 px-8 py-4 gap-2 bg-white text-gray-400 p-5 z-20 shadow-lg ${show ? 'block' : 'hidden'}`}>
              <div>EN</div>
              <div>RU</div>
            </div>
          </div>
          
          
          
          </div>
         </div>
          
          

        </div>

     
     
     
     
     
     </div> */}
     <div className="container">
            {/* <div className=' text-[#CFCFCF] gap-3 my-10 flex items-center'>
              <a href="https://subtleBatya.github.io/yashlar-homepg/">Bas sahypa</a>
              <IoIosArrowForward />
              <div>Makalalar</div>
            </div>
            <div className="flex justify-center items-end w-full">
              <div className="w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px]">
                Makalalar
              </div>
              <div className='flex w-full items-center gap-2'>
                <hr className='w-full border-[1px] textGold'/>
                <img src={sekizburc} alt="" />
              </div>
            </div>

        
        <div className="makalalar mt-20">
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            <div className="makala">
                <div className=" flex items-center gap-4">
                <span className="text-sm textGold">10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                  <hr className='w-full border-[1px] textGold'/>
                  <img src={makalarect} alt="" /></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                <span className=" text-sm textGold">Ady Familiyasy</span>
                <div className="textDark line-clamp-2 w-full">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
                </div>
                
            </div>
            
            
        </div>
        
        <div className="mt-24"></div> */}

        
      
      
      <div className="text-4xl text-center mx-auto font-bold mt-8 tracking-wide w-2/4">Magtymguly Pyragy <br /> 1724-1807(83 yaş)</div>
      <div className='text-lg font-semibold space-y-4 mt-12 tracking-wide'>
        
        <div>
        
        <div>
          <div className='text-3xl'>Magtymgulynyň döredijilik tematikasy</div>  <br />
          Magtymgulynyň döredijilik tematikasy giň we hertaraply. Onda türkmen halkynyň geçmişi, geljegi we şol wagtky ýagdaýy göz öňüňe gelýär.
        </div>
        </div>
        <div>
        <div className=' text-3xl my-5'>
          Durmuşy goşgulary <br />
        </div>
Beýik akyldar Magtymgulynyň döredijiliginde durmuşy goşgular esasy orunlaryň birini eýeleýär, Ol çilim çekmek, nas atmak, ogurlyk, nähak gan dökmek ýaly pis häsiýetlere garşy göreş alyp barypdyr. Özüniň goşgularynda olary rehimsiz ýazgarypdyr. Şol göreşde çeper dili ýarag hökmünde ulanypdyr. <br />

Şahyr "Nas atan" şygrynda nas atanyň hapasyzçylygyny görkezip, ony masgaralaýar we şu kärini taşlamaga çagyrýar: <br />
<div className="mt-3"></div>
 <span className=' font-bold'>
    Akar durar üsti-başyň poh eder, <br />
    Senden gaçar deňi-duşuň, nas atan! <br />
 </span> 
 <div className="mt-3"></div>
Şahyr özüniň eserlerinde gybatkeşligi, töhmeti iň bir ýaramaz häsiýet hökmünde ýazgarýar: <br />
<div className="mt-3"></div>
 <span className=' font-bold'>
    Ömrüň ýele berme, azma ýoluňdan,<br />
    Agyrtmagyl ili-günüň, gybatkeş.<br />
 </span> 
 <div className="mt-3"></div>
Magtymguly ýaman häsiýetleri ýazgarmak bilen erbetlikleri dini düşünjeleriň üsti bilen tertibe salmaga synanyşypdyr.<br />

Şahyr gelin-gyzlaryň edepli, päkize, mylaýym bolmagyny isläpdir, ata-enäni sylamaýan, hapysa gelin-gyzlary pisläpdir.<br />
<div className="mt-3"></div>
<span className=' font-bold'>
    Gozel , sirke basar saçyny,<br />
    Artmaz-ýuwmaz tabagynyň, daşyny,<br />
    Sylamaz atasyn, ene ýaşyny<br />
    Onyň hyzmatyndan gaçasyň geler.<br />
 </span> 
 <div className="mt-3"></div>


Magtymguly ýaramaz häsiýetlere garşy göreşmek temasyny edebiýatda giň möçberde işläp we propagandirlän şahyrdyr.
        </div>
        <div>
        <div className=' text-3xl my-5'>
        Öwut-nesihat häsiýetli goşgulary <br />
        </div>
       
Şahyryň döredijiliginde adamlarda oňat häsiýetleri terbiýelemekde uly orny owüt-nesihat häsiýetli şygyrlar tutýar. Bu temadan Magtymguly "Janyna degmez", "Durasyň geler", "Ýör biläni", "Il ýagşy", "Zor bolar", "Bolar"", "Aýrylma" ýaly onlarça şygyr ýazypdyr. Şahyr bu goşgularynda döwürdeşlerine asylly terbiýe bermek, olaryň mert, ar-namysly bolmaklaryny nesihat edip, binamys, namartlary ýaňsa alypdyr. Şahyr "Gerekdir" diýen şygrynda:
<br />
Giň ýerde garga deý bolsun wehimli,<br />
Ýerinde hünäri işi gerekdir<br />

diýip, ýigidiň göwrüminiň giň, gerekli ýerinde hünäriniň bolmaly-dygyny, hüşgärligini beýan edipdir.
<br />
Magtymgulynyň "Il biläni" şygrynyň:<br />
<div className="mt-3"></div>
<span className=' font-bold'>
  Goç ýigide toýdur-baýram,<br />
  Her iş gelse, il biläni<br />
</span>
<div className="mt-3"></div>

setirleri agzybirligi ündäpdir, Şahyr "Janyna degmez" goşgusynda hesiýeti boýunça gapma-garşy adamy suratlandyrýar.
<br />
<div className="mt-3"></div>
<span className=' font-bold'>
  Adam bar müň tümen iýdirseň azdyr,<br />
  Bardyr adam - iýen nanyna degmez.<br />
</span>
<div className="mt-3"></div>


Şahyr oňat hesiýetleri ündände, ýaramaz häsiýetleri ýazgaranda, wagyz-nesihat etmek tärinden peýdalanýar. Ol ähli türkmen ýigitlerini jeň meýdanynda şu sypatda görmek isleýär:
<br />
<div className="mt-3"></div>
<span className=' font-bold'>
  At salanda doňuz kimin topulyp,<br />
  Aýy kimin asylyşy gerekdir.<br />
</span>
<div className="mt-3"></div>


Magtymguly oňat-gylyk häsiýetler adamyň bezegi diýip düşünipdir.
        </div>

        {/* SOSIAL DENSIZLIK */}
        <div>
                <div className=' text-3xl my-5'>
                  Sosial-deňsizlik temasy <br />
                </div>  
          Magtymgulynyň döredijiliginde sotsial-deňsizlik meselesi düýpli işlenen temalaryň biridir. Onuň bu temada ýazan eserlerine "Salar guşun aňlamaz", "Gaça başlady", "Ötüp baradyr", "Ýat bolar", "Il gözlär", "Käre döndi", Golda bary bolmasa", "Ajap eýýam gelmedi" ýaly şygyrlar degişlidir.
        <br />
          Magtymgulynyň döwründe türkmen topragy daşary ýurt basybalyjylary, içerki han-begler tarapyndan depelenipdir. Şu ýagdaýy şahyr "Gaça başlady" diýen şygrynda şeýle beýan edýär:
        <br />
        <div className="mt-3"></div>
       <span className=' font-bold mt-8'>
        Gömüldi derýalar, ýykyldy daglar, <br />
        Ýetimler gözýaşyn döke başlady.<br />
        Orramsydan bolan haramhor begler,<br />
        Ýurdy bir ýanyndan ýyka başlady.<br />
       </span>
       <div className="mt-3"></div>
       Şahyr zamanasyny erbetligiň mekanyna öwren adamlary ýazgarýar:
<br />
Şalarda galmady hökmi-adalat <br />
Magtymguly özüniň adalatsyzlygyň höküm sürýän jemgiýetinde ýaşaýandygyny, şeýle jemgyýetde zadyň, malyň, baýlygyň bolmasa aljak galaň ýokdugyny "Golda bary bolmasa" şygrynda görkszipdir:
<br />
<div className="mt-3"></div>
<span className=' font-bold mt-8'>
  Zamana beýledir, göze ilmezler, <br />
  Her ýigidiň golda bary bolmasa... <br />
</span>
 
<br />
Magtymguly adyllygy depeleýän adamlary diniň üsti bilen toba etmäge, amana getirmäge çalyşýar.
<br />
<div className="mt-3"></div>
<span className=' font-bold'>
  Magtymguly, bu dünýäniň namysyn,<br />
  Ýygyp-düýrüp ele berdim hamysyn,<br />
  Pikir derýasyna aklym gämisin<br />
  Batyrmyşam çyka bilmen neýleýin?<br />
</span>

<div className="mt-3"></div>
diýen setirlerinde bolsa ýurtdaky ýagdaýyň şeýle bulaşyklygyndan baş çykaryp bilmeýändigini aýdypdyr. Şahyryň goşgularynda pikiriň gysga we dogry berilmegi bu goşgularyň ýatda oňat galmagynyň ilkinji şerti bolup durýar.
        </div>
        {/* WATANCYLYK TEMASY */}
        <div>
        <div className=' text-3xl my-5'>
          Watançylyk, gahrymançylyk lirikasy <br />
        </div>  
        <div className='mb-5'></div>
Watançy şahyr Magtymgulynyň gahrymançylyk, il-ýurt, agzybirlik, birleşmek hakyndaky şygyrlary onuň döredijiligine iň görnükli orunlaryň birini eýeleýär. Bu temada Magtymguly "Türkmeniň", "Ýeli Gürgeniň" , "Depe nedir, düz nedir", "Öňi-ardy bilinmez", "Döker bolduk ýaşymyz", "Gidiji bolma", "Gözlär men", "Başy gerekdir", "Mert bolmaz" ýaly birnäçe goşgular döredipdir.
<br />
Magtymguly hakyky watançy hökmünde türkmen ýurduna, onuň gözel tebigatyna, baýlygyna, batyr ýigitlerine guwanypdyr. Şahyr "Gidiji bolma" şygrynda:
<br />
<div className="mt-3"></div>
<span className=' font-bold'>
  Gel köňlüm, men saňa nesihat kylaý:<br />
  Watany terk edip gidiji bolma<br />
</span>

<div className="mt-3"></div>
diýip, öz döwürdeşlerine ýüzlenýär. Magtymguly Türkmenistanyň, aýratyn hem öz önüp-esen ýeri bolan Etrek, Gürgen töwerekleriniň giň, gözel we hasylly sähralaryny, daglaryny, tebigy baýlyklaryny, goç ýigitleri taryplaýar. Şahyryň "Ýeli Gürgeniň", "Türkmeniň" şygyrlarynyň şu setirleri-de oňa güwä geçýär:
<div className="mt-3"></div>
<span className=' font-bold'>
  Öňünde belent dag, serinde duman, <br />
  Deňizden öwüser ýeli Gürgeniň.<br />
  Bulut oýnap, baran dolsa çaýlara,<br />
  Akar boz bulanyp, sili Gürgeniň,<br />
</span>

<div className="mt-3"></div>
ýa-da

<br />
<div className="mt-3"></div>
<span className=' font-bold'>
  Dagda, düzde kowsa, saýýatlar diri,<br />
  Ala bilmez, ýolbars ogly türkmeniň.<br />
</span>
<div className="mt-3"></div>


Beýik şahyryň döwründe türkmen taýpalary dagynyk ýaşapdyrlar. Halk hemişe talanypdyr, ajaýyp zatlar weýran edilipdir. Magtymguly hemişe şeýle pajygaly durmuşdan gutulmagyň aladasyny edipdir. Ol keseki duşmanlardan goranmak üçin ýigitleri mertlige, gahrymanlyga çagyrypdyr:
<div className="mt-3"></div>
<span className=' font-bold'>
  Ýaşy ýeten arap atyň şanynda,<br />
  Mälim bolmaz depe nedir, düz nedir.<br />
  Ýüňi ýeten goç ýigidiň ýanynda,<br />
  Atmyş nedir, ýetmiş nedir, ýüz nedir.<br />
</span>
<div className="mt-3"></div>

Şahyr il-ýurt üçin hyzmat eden goç ýigitleri dabaralandyrýar, tersine namartlary, il-ýurduna hyýanat edýänleri näletleýär. Şu jähtden şahyryň şu setirlerini ýatlamak bolar:
<div className="mt-3"></div>
<span className=' font-bold'>
  Aga begler muhannesiň on müňi -<br />
  Mert ähliniň alty ýüzüne degmez.<br />
  "Är men" diýen her nöweçden är bolmaz,<br />
  Gaýraty, namysy, ary gerekdir.<br />
</span>
<div className="mt-3"></div>

Magtymguly dagynyk ýaşan türkmen taýpalaryny birleşdirmek bilen ýurduň özbaşdaklygyny, halkyň asuda ýaşamagyny gazanmak bolar diýen netije gelipdir. Bu ideýa şahyryň "Türkmeniň", "Döke bolduk ýaşymyz", "Türkmen binasy" ýaly şygyrlarynda öz beýanany tapypdyr:
<div className="mt-3"></div>
<span className=' font-bold'>
  Bir suprada taýýar kylynsa aşlar,<br />
  Göteriler ol ykbaly türkmeniň.<br />
</span>
<div className="mt-3"></div>
<span className=' font-bold'>
  Teke, ýomut, gökleň, ýazyr, ärsary<br />
  Bir dowlete gulluk etsek bäşimiz.<br />
</span>
<div className="mt-3 position: relative"></div>

Magtymgulynyň watançylyk, gahrymançylyk temada ýazan eserleri taryhy taýdan anyklygy, takyk manysy, çeper obrazlara baýlygy bilen-de tapawutlanýar.
        </div>
        <div className='position: absolute right-8'>
          <FaPenFancy />
        </div>
        
        <div className='container mt-20 pt-10 grid grid-cols-2 gap-3'>
            <NavLink to={`/magtymguly/`} className='bg-[#E3FFD9] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-[#477139] font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>
                  Bas Sahypa
                    {/* {t('youthPolicy')} */}
                </div>
            </NavLink   >
            <NavLink to={`/yyly/`} className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-goldColor font-semibold aspect-video'>
                <div className='w-1/2 text-yellow-600 text-[30px]'>
                {/* {t('makala')} */}
                300 Yyllygy 
                </div>
            </NavLink>
            
        </div>
      </div>
      <div className='mt-28'></div>
        
        
     </div>
      
     {/* <div className="w-full">
      <div className="w-[60vw] mx-auto text-[#CDCDCD]">
        <div className='flex justify-center p-3 mt-10 border-b border-[#CDCDCD] text-[#CDCDCD] items-center h-[auto] w-full'>
          <input type="text" className=' w-full outline-none text-xl border-0' placeholder='Su yerden gozle...' />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="#CDCDCD"/>
          </svg>
        </div>
        <div className="flex w-[90%] cursor-pointer justify-center gap-3 mx-auto mt-10 text-[#CDCDCD] items-center">
          <div className='px-4 py-2 border-[2px] rounded-[25px]'>Makalalar</div>
          <div className='px-4 py-2 border-[2px] rounded-[25px]'>Makalalar</div>
          <div className='px-4 py-2 border-[2px] rounded-[25px]'>Makalalar</div>
          <div className='px-4 py-2 border-[2px] rounded-[25px]'>Makalalar</div>
          <div className='px-4 py-2 border-[2px] rounded-[25px]'>Makalalar</div>
        </div>
        <div className='w-[80%] cursor-pointer justify-center mx-auto mt-5 font-semibold text-[#393939] flex-col space-y-3 text-lg'>
          <div className='  px-4 py-3 bg-[#fafafa]'>Topic Name</div>
          <div className='  px-4 py-3 bg-[#fafafa]'>Topic Name</div>
          <div className='  px-4 py-3 bg-[#fafafa]'>Topic Name</div> 
          <div className='  px-4 py-3 bg-[#fafafa]'>Topic Name</div>
          <div className='  px-4 py-3 bg-[#fafafa]'>Topic Name</div>
        </div>

      </div>
     </div> */}
{/* 
      <div className="bgBlue mt-20">
        <div className="container py-10 text-white">
          <div className="flex">
            <div className="w-3/5 flex">
              <ul className='flex w-1/2 flex-col  items-left gap-3 font-semibold'>
                <li className=' cursor-pointer text-left'>Baş Sahypa</li>
                <li className=' cursor-pointer text-left'>Ýaşlar Syýasaty</li>
                <li className=' cursor-pointer text-left'>Habarlar</li>
                <li className=' cursor-pointer text-left'>Mümkinçilikler</li>
                <li className=' cursor-pointer text-left'>Kitaphana</li>
                <li className=' cursor-pointer text-left'>Medeniýet</li>
              </ul>
              <ul className='flex w-1/2 flex-col  items-left gap-3 font-semibold'>
                <li className=' cursor-pointer text-left'>Baş Sahypa</li>
                <li className=' cursor-pointer text-left'>Ýaşlar Syýasaty</li>
                <li className=' cursor-pointer text-left'>Habarlar</li>
                <li className=' cursor-pointer text-left'>Mümkinçilikler</li>
                <li className=' cursor-pointer text-left'>Kitaphana</li>
                <li className=' cursor-pointer text-left'>Medeniýet</li>
              </ul>
            </div>
            <div className="w-2/5">
              <div className="flex items-center justify-between">
                <div className=" flex flex-col gap-3">
                  <span className='text-[#FFFFFF]/50 text-xs'>Habarlasmak ucin</span>
                  <div className="text-lg">+993 (63) 060606 </div>
                </div>
                <div className="flex flex-col text-right gap-3">
                  <div className="text-left">
                    <span className="text-[#FFFFFF]/50 text-xs">Elektron Pocta</span>
                    <div className="text-lg">youth@tm.com</div>
                  </div>
                </div>
              </div>
              <div className="text-left flex flex-col gap-2 w-2/3 mt-20">
                <span className="text-[#FFFFFF]/50 text-xs">Bildirişlerden Habardar Bol</span>
                <div className="flex justify-center  bg-white  items-center">
                <span className="text-[#C5C5C5] p-3 text-xs font-semibold">Email</span>
                <input type="text" className='w-2/3 h-full outline-none text-xs textDark' />
                <span className="textBlue p-3 text-xs cursor-pointer font-semibold">Gosul</span>
                </div>
              </div>
            </div>
          </div>

          <hr className='w-full border-[1px] my-10 border-white'/>
          <div className="flex text-sm">
            <div className="w-3/5">
              <div>Türkmenistanyň Ýaşlar Syýasaty</div>
            </div>
            <div className="w-2/5 flex items-center justify-between">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Türkmenistanyň Ýaşlar Baradaky Kanuny</span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H8M8 1L1 8M8 1V8" stroke="white" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>© 2024</div>
            </div>
          </div>

        </div>
      </div>
       */}
      </div>
    
  )
}

export default App
