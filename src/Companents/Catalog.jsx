import React from "react";
import { NavLink } from "react-router-dom";
import bars from "../images/catalogBar.png";
import desktop from "../images/computer.png";
import laptop from "../images/laptop.png";
import monitor from "../images/monitor.png";
import motherboard from "../images/motherboard.png";
import cpu from "../images/cpu.png";
import cooler from "../images/cooler.png";
import ram from "../images/ram.png";
import hdd from "../images/hdd.png";
import vga from "../images/graphicCard.png";
import opticalDrive from "../images/opticalDrive.png";
import mouse from "../images/mouse.png";
import keyboard from "../images/keyboard.png";
import speaker from "../images/speaker.png";
import cable from "../images/cable.png";
import printer from "../images/printer.png";
import headphone from "../images/headphone.png";

import hyper from "../images/Partners/hyper.png";
import steel from "../images/Partners/steel.png";
import razer from "../images/Partners/razer.png";
import corsair from "../images/Partners/corsair.png";
import geforce from "../images/Partners/geforce.png";
import zow from "../images/Partners/zow.png";
import asus from "../images/Partners/asus.png";
import anda from "../images/Partners/anda.png";
import msi from "../images/Partners/msi.png";
import keen from "../images/Partners/keen.png";
import nzxt from "../images/Partners/nzxt.jpg";
import { FaHeadset } from "react-icons/fa";

// software images
import eset from "../images/software/eset.jpg";
import office from "../images/software/office.jpg";
import corel from "../images/software/corel.jpg";
import photoshop from "../images/software/photoshop.jpg";
import windows from "../images/software/windows.jpg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";

function Catalog() {
  return (
    <>
      <div className="catalog">
        <div className="catalogHead ">
          <i className="fas fa-bars"></i>
          <h2>Mağaza Kataloqu</h2>
        </div>
        <ul className="catalogBody">
          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="/category/pc">
              <img src={desktop} />
              <p>Masaüstü Kompüter</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/pc/acer">Acer PC</NavLink>
              </li>
              <li>
                <NavLink to="category/pc/gigabyte">Gigabyte PC</NavLink>
              </li>
              <li>
                <NavLink to="category/pc/lenovo">Lenovo PC</NavLink>
              </li>
              <li>
                <NavLink to="category/pc/hp">HP PC</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/laptop">
              <img src={laptop} />
              <p>Noutbuklar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/laptop/apple">Apple Macbook</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/acer">Acer</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/dell">Dell</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/msi">Msi</NavLink>
              </li>
              <li>
                <NavLink to="category/laptop/microsoft">
                  MicroSoft noutbukları
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/monitor">
              <img src={monitor} />
              <p>Monitorlar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/monitor/acer">Acer Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/aoc">AOC Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/asus">Asus Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/benq">Benq Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/dell">Dell Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/hp">HP Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/lenovo">
                  Lenovo Monitorlar
                </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/lg">LG Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/msi">Msi Monitorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/samsung">
                  Samsung Monitorlar
                </NavLink>
              </li>
              <li>
                <NavLink to="category/monitor/rampage">
                  Rampage Monitorlar
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/mainboard">
              <img src={motherboard} />
              <p>Ana Platalar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/mainboard/asrock">
                  ASRock Plataları
                </NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/asus">Asus Plataları</NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/biostar">
                  Biostar Plataları
                </NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/msi">MSI Plataları</NavLink>
              </li>
              <li>
                <NavLink to="category/mainboard/gigabyte">
                  Gigabyte Plataları
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/cpu">
              <img src={cpu} />
              <p>Prosessorlar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/cpu/intel">Intel Prosessorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/cpu/amd">AMD Prosessorlar</NavLink>
              </li>
              <li>
                <NavLink to="category/cpu/cooler">Soyuducu qurğular</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/cooler">
              <img src={cooler} />
              <p>Soyuducu qurğular</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/cooler/deepcool">DeepCool</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/rampage">Rampage</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/evga">EVGA</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/thermaltake">Thermaltake</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/asus">ASUS</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/arctic">ARCTIC</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/aerocool">AeroCool</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/aerdeepcool">AerDeepCool</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/be quiet">Be Quiet</NavLink>
              </li>
              <li>
                <NavLink to="category/cooler/nzxt">NZXT</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/ram">
              <img src={ram} />
              <p>Operativ yaddaş</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/ram/crucial">Crucial</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/g.skill">G.SKILL</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/klevv">Klevv</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/lexar">Lexar</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/kingston">Kingston</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/corsair">Corsair</NavLink>
              </li>
              <li>
                <NavLink to="category/ram/adata">Adata</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/storage">
              <img src={hdd} />
              <p>Yaddaş qurğuları</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/storage/hdd toshiba">
                  HDD
                </NavLink>
              </li>
              <li>
                <NavLink to="category/storage/ssd">
                  SSD yaddaş qurğuları
                </NavLink>
              </li>
              <li>
                <NavLink to="category/storage">USB fləşkartlar</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/vga">
              <img src={vga} />
              <p>Videokartlar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/vga/asus">Asus videokartları</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/galaxy">GALAXY videokartları</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/msi">MSI videokartları</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/nvidia">NVidia videokartları</NavLink>
              </li>
              <li>
                <NavLink to="category/vga/zotac">Zotac videokartları</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/optic">
              <img src={opticalDrive} />
              <p>Optik qurğular</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/optic/dwd-rw">DWD-RW</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/mouse">
              <img src={mouse} />
              <p>Kompüter siçanları</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/mouse/a4tech">A4tech</NavLink>
              </li>
              <li>
                <NavLink to="category/mouse/apple">Apple</NavLink>
              </li>
              <li>
                <NavLink to="category/mouse/logitech">Logitech</NavLink>
              </li>
              <li>
                <NavLink to="category/mouse/razer">Razer</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/keyboard">
              <img src={keyboard} />
              <p>Klaviaturalar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/keyboard/a4tech">A4tech</NavLink>
              </li>
              <li>
                <NavLink to="category/keyboard/corsair">Corsair</NavLink>
              </li>
              <li>
                <NavLink to="category/keyboard/gigabyte">Gigabyte</NavLink>
              </li>
              <li>
                <NavLink to="category/keyboard/razer">Razer</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/speaker">
              <img src={speaker} />
              <p>Səs ucaldıcılar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/speaker/edifier">Edifier</NavLink>
              </li>
              <li>
                <NavLink to="category/speaker/mikado">Mikado</NavLink>
              </li>
              <li>
                <NavLink to="category/speaker/rampage">Rampage</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/headphones">
              <img src={headphone} />
              <p>Qulaqlıqlar</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/headphones/steelseries">SteelSeries</NavLink>
              </li>
              <li>
                <NavLink to="category/headphones/rampage">Rampage</NavLink>
              </li>
              <li>
                <NavLink to="category/headphones/razer">Razer</NavLink>
              </li>
              <li>
                <NavLink to="category/headphones/Hyperx">HyperX</NavLink>
              </li>
              <li>
                <NavLink to="category/headphones/gamenote">Gamenote</NavLink>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/cables">
              <img src={cable} />
              <p>Kabel və ucluqlar</p>
            </NavLink>
          </li>

          <li className="has-child">
            <i className="fa-solid fa-chevron-down"></i>
            <NavLink to="category/office">
              <img src={printer} />
              <p>Ofis avadanlıqları</p>
            </NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="category/office/canon">Canon</NavLink>
              </li>
              <li>
                <NavLink to="category/office/epson">Epsoncd </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="partners">
          <div className="partnersHead">
            <h2>Partnyorlarımız</h2>
          </div>
          <div className="partnersImages">
            <img src={hyper} />
            <img src={steel} />
            <img src={razer} />
            <img src={corsair} />
            <img src={geforce} />
            {/* <img src={zow} /> */}
            {/* <img src={asus} /> */}
            <img src={anda} />
            <img src={msi} />
            {/* <img src={nzxt} /> */}
          </div>
        </div>

        <div className="Offers">
          <div className="offersHead">
            <p>Günün təklifi</p>
          </div>
          <div className="offer">
            <div className="offerImg">
              <img src="https://asset.msi.com/resize/image/global/product/product_6_20180612110658_5b1f38d2cf530.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" />
            </div>
            <div className="offerName">
              <p>MSİ Optix MAG241C 144Hz 27-inch Gaming Monitor</p>
            </div>
            <div className="offerPrice">
              <p id="oldPrice">720 ₼</p>
              <p id="newPrice">664 ₼</p>
            </div>
          </div>
        </div>

        <div className="softWare">
          <p>Proqram təminatı</p>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={eset} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={office} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={corel} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={photoshop} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={windows} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Catalog;
