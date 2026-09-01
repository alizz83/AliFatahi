import "./NewsSection.css";

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";


const newsData = [

  {
    image: image1,
    title: "موسیقی کلاسیک چیست؟",
    desc:
      "موسیقی کلاسیک ریشه در سنت اروپایی دارد و با ساختار دقیق، نت‌نویسی حرفه‌ای و اجرای گروه‌های بزرگ شناخته می‌شود.",
    author: "علی فتاحی",
    views: "۲۸۰ بازدید",
  },


  {
    image: image3,
    title: "آکورد چیست؟",
    desc:
      "آکورد از ترکیب چند نت هم‌زمان ساخته می‌شود و برای ایجاد هماهنگی و زیبایی بیشتر در موسیقی استفاده می‌شود.",
    author: "علی فتاحی",
    views: "۲۸۰ بازدید",
  },


  {
    image: image2,
    title: "موسیقی مدرن چیست؟",
    desc:
      "موسیقی مدرن با نوآوری، تغییر در ساختارهای سنتی و استفاده از سبک‌های متنوع شناخته می‌شود.",
    author: "علی فتاحی",
    views: "۲۸۰ بازدید",
  },

];


function NewsCard({item}) {

  return (

    <article className="news-card">


      <img
        src={item.image}
        alt={item.title}
      />


      <div className="news-overlay"></div>


      <button className="heart">
        ♡
      </button>



      <div className="news-content">


        <h3>
          {item.title}
        </h3>


        <p>
          {item.desc}
        </p>



        <div className="divider"></div>



        <div className="news-footer">

          <span>
            ✎ {item.author}
          </span>


          <span>
            ◉ {item.views}
          </span>

        </div>



        <button className="more-btn">
          بیشتر بخوانید
        </button>


      </div>


    </article>

  );

}




function NewsSection(){


return (

<section className="news-section">


<h2>
خبر های داغ دریچه ای به دنیای تازه ها
</h2>



<div className="news-grid">


{
newsData.map((item,index)=>(

<NewsCard
key={index}
item={item}
/>

))
}


</div>



<button className="all-news">
بیشتر ببین
</button>


</section>

);


}


export default NewsSection;