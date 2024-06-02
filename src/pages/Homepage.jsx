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
import Pyragy from '../assets/Pyragy.jpg' 
import { NavLink } from 'react-router-dom'


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

        
      
      <div className=' mt-8 w-2/8'>
        <img className='justify-center  align-middle items-center mx-auto' src={Pyragy} />
      </div>
      <div className="text-4xl text-center mx-auto font-bold mt-8 tracking-wide w-2/4">Magtymguly Pyragy <br /> 1724-1807(83 yaş)</div>
      <div className='text-xl font-semibold space-y-4 mt-12 tracking-wide'>
        <div className=' '>
          Magtymgulynyň ömri we döredijiligi Türkmen halkynyň beýik şahyr ogly Magtymguly Pyragy gökleň türkmenlerindendir. Pyragy onuň edebi lakamydyr. Ol takmynan, 1724-nji ýylda Gürgen derýasynyň boýunda, Hajygowşan diýen ýerde eneden dogulýar. Ol ömrüniň​ köpüsini​ Etrek, Gürgen, Garrygala sebitlerinde geciripdir. Şahyr "Äleme belgilidir" diýen şygrynda Ýar geler, wagt-da gider, gaflata çykmyş gözlerim. Açaýyn diýsem açylmaz, ne agyr uýkulydyr; Bilmeýen soranlara aýdyň, bu garyb adymyz: Asly-gerkez, ýurdy-Etrek, ady-Magtymgulydyr diýip, öz adyny we niredendigini, kimlerdendigini aýdýar.Magtymgulynyň kakasy Döwletmämmet Azady, ejesi Orazgül bolupdyr.
        </div>
        <div className='text-lg font-semibold'>
          Magtymguly başlangyç terbiýäni kakasy Döwletmämmet Azadydan alýar. Ol bu barada: "Ylym öwreden ussat-kyblam pederdir" - diýip ýazýar. Magtymguly ilki oba mekdebinde okaýar. Onuň ilkinji mugallymyna Nyýazsalyh diýer ekenler. Magtymguly örän zehinli we ýiti akylly bolupdyr. Ol dürli kitaplary çakdan- aşa köp we irginsiz okapdyr. Magtymguly ýaş wagty kakasyndan, ejesinden we obanyň garry adamlaryndan köp-köp halk rowaýatlary, goşgy-gazallary, erteki we nakyllary höwes bilen diňleýär eken. Ol kakasy Döwletmämmet Azadynyň döreden eserleriniň köpüsini ýatdan öwrenipdir.
        </div>
        <div>
          Magtymgulynyň zehinliligine, okuwa höwesliligine göz ýetiren Döwletmämmet onuň ylymly adam bolup ýetişmeginiň aladasyny edipdir. XVIII asyrda Etrek, Ahal, Mary sebilerinde güýçli medreseler bolmandyr. Şonuň üçin Döwletmämmet Azady öz oglyny ilki Halajyň Gyzylaýak obasynda ýerlesýän, ol wagt güýcli hasap edilen Idris babanyň medresesine okuwa iberýär. <div className=' w-3/4 my-5 mx-auto'><img src="https://turkmenportal.com/images/uploads/blogs/webp/f0d4c69cade4a6f99552e01e241ece38.webp" alt="" /></div> Magtymguly bu medresede birnäçe wagt okaýar. Soňra ol Buhara gidýär, Buharada Gögeldaş atly medresä okuwa gidýär we onda iki ýyl okaýar. Şahyr hem medresede ders berýän şiraly türkmen Nury Kazym ibn Bahr bilen hem tanyşýar we onuň bilen dostlaşýar. Emma medresedäki talyplaryň tertip-düzgüniniň bozuklygy Magtymgulynyň bu medresäni taşlamagyna sebäp bolýar.<div className=' w-3/4 my-5 mx-auto'><img src="https://micm.gov.tm/media/news_spec/images_crop/59d92f7f-b82c-4c7b-9d9a-370a162a90b7.jpg" alt="" /></div>
        </div>
        <div>
          Magtymguly esasy bilimi Hywadaky «Sirgazy» medresesinde alýar. Ol «Sirgazy» medresesinde 3 ýyl okaýar. Medresede berilýän dersleriň daşynda hem Gündogaryň görnükli şahyrlary: Nyzamynyň, Nesiminiň, Fizulynyň, Nowaýynyň we başgalaryň eserlerini irginsiz okaýar. Ol medresede okaýanlaryň arasynda özuni derrew tanadyp, zehinli talyplaryň hataryna goşulýar. Okuwyň ilkinji ýylynda Magtymguly talyplaryň halypasy bolýar. Soňky ýylda bolsa, mugallym özi ýok wagty ders geçirmegi-de Magtymgula ynanýar ekeni. <div className=' w-3/4 my-5 mx-auto'><img src="https://admin.turkmenmetbugat.gov.tm/storage/articles/72681/MoHA0tGvJCFFW2noltkKiQnSKbGdPLEKWA57sy4fXN32Y6cCpC9l7St66ASI.jpg" alt="" /></div>  Emma kakasynyň ýarawsyzlanandygy üçin medresäni doly tamamlap bilmändir. Magtymguly öz döwrüniň iň bilimli we düşünjeli adamy bolup ýetişipdir. Magtymguly jahankeşde adam bolupdyr. Dünýäniň köp ýerlerine syýahat etmek duýgusy onda ýaşlykda döreýär. Bu syýahatlar şahyryň dünýägaraýşyny giňeldipdir. Magtymguly oglan okatmakdan başga tanymal zergär bolupdyr we kümüşden, altyndan dürli bezeg şaýlaryny ýasapdyr. Magtymgulynyň maşgala ýagdaýy jedelli meseleleriň biri bolup durýar. Goşgularyna esaslanyp, onuň Meňli diýen gyzy söýendigini, ýöne käbir sebäplere görä alyp bilmändigi hakda alymlar netijä gelýärler. Magtymgula Akgyz diýen ýeňňesi dakylýar.
        </div>
        <div>
        Ondan iki ogul bolup, olar hem ýaşlykda ýogalýarlar. Şahyr ogullarynyň ölümine gynanyp, "Yzlamaýan bolarmy", "Mübtela kyldy“ eserleri döredipdir.

Magtymguly örän parasatly, gepe çeper, märekesöýen adamdy. Ol özüniň gowy häsiýetleri bilen halka görelde görkezipdir, akyl-paýhasy bilen köp adamlary terbiýeläpdir.

Magtymguly, takmynan, 1807-nji ýylda Atasary diýilýän çeşmäniň boýunda, Soňudagyň ýanynda aradan çykýar. Ony kakasynyň ýanynda "Garry molla" (Eýranda) gonamçylygynda jaýlapdyrlar.

MAGTYMGULY(1724-1807)ýasap gecipdir
        </div>
        <div>
        Magtymguly döredijilik işine ýaşka başlapdyr.Magtymguly goşgularyny köpçüligiň üýşen ýerinde, toý-meýlislerde okap berip, adamlary gahrymançylyga, ar-namysly, hüşgär bolmaklyga çagyrypdyr. Onuň ylham çeşmesi halk we onuň güzerany bolupdyr.

Şahyryň döredijiligi dürli temalarda bolan köp sanly şygyrlardan we poemalardan ybaratdyr. Onuň öz golýazmalary bize gelip ýetmändir.

Magtymguly köp şygyrlaryny Pyragy lakamy bilen düzüpdir Onuň döredijiligi XVIII asyr türkmen durmuşyny öwrenmäge örän köp material berýär. Magtymgulynyň şygyrlary, esasan, watançylyk, gahrymançylyk, öwüt-nesihat, sosial-deňsizlik, yşky-liriki, dostluk barada gumanistik ideýalary öňe sürýär.
        </div>
       
        
        
        <div className='container mt-20 pt-10 grid grid-cols-2 gap-3'>
            <NavLink to={`/doredijiligi/`} className='bg-[#E3FFD9] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-[#477139] font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>
                  Doredijiligi
                    {/* {t('youthPolicy')} */}
                </div>
            </NavLink   >
            <NavLink to={`/yyly/`} className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-goldColor font-semibold aspect-video'>
                <div className='w-1/2  text-[30px] gap-8'>
                {/* {t('makala')} */}
                300 Yyllygy 
                <div className='mt-2'>
                Mynasybetli
                </div>
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
       
      </div>
    
  )
}

export default App
