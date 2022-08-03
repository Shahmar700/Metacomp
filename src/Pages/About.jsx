import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="aboutCotainer">
      <div className="aboutHeader" data-aos="fade-right">
        <h1>Mağazamız haqqında</h1>
      </div>
      <div className="aboutBody" data-aos="flip-down" data-aos-duration="1500">
        <p>
          "MetaComp" kompüter dükanının əsas məqsədi kompüter bazarında ən
          müasir texnologiyaları istifadəçilərə münasib qiymətə satışını təşkil
          etməkdir. Əsas prinsiplərimizdən biri, yalnız orijinal və yeni
          avadanlıqları müştərilərimizin istifadəsinə verməkdir. Dükanımızdan
          alınan hər bir kompüter və ya texnika rəsmi zəmanətlidir. Saytımız
          dükanımızın vitrin saytıdır. Saytımızda olan hər bir qurğunu canlı
          olaraq dükanımızda görə və ala bilərsiniz. İstədiyiniz an online
          olaraq sifariş verib ünvanınızda təslim ala bilərsiniz. Dükanımız
          həftə içi hər gün (Bazar günündən başqa) 10.00 - 19.00 dək fəaliyyət
          göstərir.
        </p>
        <br />
        <ul>
          <li>
            <i className="fa-solid fa-check"></i> Dükanımızdan kompüter və digər
            texnikanı nəğd və ya rəsmi köçürmə yolu ilə ala bilərsiniz.
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Rəsmi dövlət qurumları və ya
            şirkətlərlə əməkdaşlıq etməyə daha maraqlıyıq.
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Koorporativ müştərilərimizə
            xüsusi olaraq daimi bir menecer ayıra bilərik.
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Daimi müştərilərimizə xüsusi
            olaraq güzəştli qiymətlər və endirimlər edirik.
          </li>
        </ul>
        <br />
        <p>
          Sizi maraqlandıran sual və ya təklif olarsa o zaman dükanımızla əlaqə
          saxlayın. Email: admin@metacomp.az
        </p>
        <br />
        <ul>
          <li>* Sifariş 100 manatdan yuxarı olduqda pulsuz çatdırılır.</li>
          <li>
            * Sifariş 100 manatdan aşağı olduqda şəhərin istənilən yerinə
            razılaşma yolu ilə çatdırılma xidməti movcuddur.
          </li>
          <li>* Qiymətlər ƏDV siz göstərilmişdir!</li>
          <li>
            * Köçürmə ilə ödəmə edilərkən məbləğin üzərinə əlavə 18% ƏDV əlavə
            olunur.
          </li>
          <li>
            * Dövlət qurumları, Özəl şirkətlər və s. rəsmi qaydada köçürmə ilə
            bizim dükanımızdan istənilən malı əldə edə bilər.
          </li>
        </ul>
        <div className="contact">
          <i className="fa-regular fa-phone"></i>
          <p>+994 77 605 77 75</p>
        </div>
      </div>

      <div className="ourValues" data-aos="fade-right">
        {/* <img src="https://www.iconpacks.net/icons/1/free-target-icon-777-thumb.png" alt="" /> */}
        <div className="ovHeader">
          <h1>DƏYƏRLƏRİMİZ</h1>
        </div>
        <div className="ovContainer">
          <div
            className="box box1"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h2>Biz bir komandayıq</h2>
            <p>
              Uğurumuzun sirri komanda işidir. Komandamız bir-birini
              dəstəkləyir, eyni məqsədlər üçün çalışır və hər addımda
              konstruktiv rəy verir.
            </p>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <h2>Biz müştərilərimiz üçün buradayıq</h2>
            <p>
              Müştərilərimizə mümkün olan ən yaxşı təcrübəni təqdim etmək bizim
              əsas prioritetimizdir və həmişə belə olacaq!
            </p>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h2>Biz səmimi və təvazökarıq</h2>
            <p>
              Biz iyerarxiyaya, titullara və özünü tanıtmağa dəyər vermirik. Biz
              aydın və effektiv ünsiyyət qururuq. Biz fərziyyələr etmədən
              bir-birimizə güvənirik və dinləyirik
            </p>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <h2>Biz daimi dəyişiklik və tərəqqi qəbul edirik</h2>
            <p>
              Dəyişiklikləri və rəyləri tərəqqinin əsas sürücüsü kimi qəbul
              edirik. Biz daima hər gün daha yaxşı çıxış etmək üçün yeni yollar
              axtarırıq
            </p>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="700"
          >
            <h2>Biz nəticəyönümlüyük və biznesinizin sahibiyik</h2>
            <p>
              İndi deyilsə, nə vaxt? Biz deyiliksə, kim? Bu təfəkkür bizə
              səhvlərindən dərs alan və məqsədlərinə çatmaq üçün davamlı olaraq
              çalışan fəal komanda olmağımıza kömək edir.
            </p>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            <h2>Biz məlumatlara inanırıq</h2>
            <p>
              Yaxşı qərarlar yalnız dəqiq, obyektiv və aktual məlumatlardan
              istifadə etməklə əldə edilə bilər. Mürəkkəblik dərəcəsindən asılı
              olmayaraq, hər bir qərarın qəbul edilməsində bizə yol göstərən
              aydın məlumatlar axtarırıq.
            </p>
          </div>
        </div>
      </div>

      <div
        className="descBottomItems"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" 
        data-aos-duration="2000"
      >
        <div className="descBottomWrapper">
          <div className="dbTop">
            <Link className="pcImg" to="/category/pc">
              <div className=" categories" data-text="Masaüstü Kompüterlər">
                <img
                  src="https://images.unsplash.com/photo-1593640495390-1ff7c3f60e9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                  alt=""
                />
              </div>
            </Link>
            <Link className="lpImg" to="/category/laptop">
              <div className="categories" data-text="Laptoplar">
                <img
                  src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="dbBottom">
            <Link className="mainboardImg" to="/category/mainboard">
              <div className="categories" data-text="Ana platalar">
                <img
                  src="https://www.asus.com/Microsite/motherboard/AMD-AM4-Ryzen-5000/websites/img/amd/zen3.jpg"
                  alt=""
                />
              </div>
            </Link>

            <Link className="monitorImg" to="/category/monitor">
              <div className="categories" data-text="Monitorlar">
                <img
                  src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
