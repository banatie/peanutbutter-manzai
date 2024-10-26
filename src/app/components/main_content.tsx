import classes from "./main_content.module.css";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className={classes["main-content"]}>
      <h1 className={classes["key-title"]}>
        PeanutButter
        <br />
        Official Website
      </h1>
      <div className={classes["hero-image-container"]}>
        <Image src="/assets/hero.png" alt="" width={500} height={500} />
      </div>

      <div className={classes["anchor-links"]}>
        {/* Anchor Link x3 */}
        <a href="#profile">
          <Image src="/assets/shooting_2.png" alt="" width={200} height={200} />
        </a>
        <a href="#job-offer">
          <Image src="/assets/shaved_ice_2.png" alt="" width={200} height={200} />
        </a>
        <a href="#sns-links">
          <Image src="/assets/kingyo_2.png" alt="" width={200} height={200} />
        </a>
      </div>

      <div id="profile" className={classes["profiles"]}>
        <h2 className={classes["profile-title"]}>プロフィール</h2>

        {/* Toyoda */}
        <span>
          <span className={classes["profile-name"]}>豊田</span> / ボケ担当
        </span>
        <h3>出身、育ち</h3>
        <ul>
          <li>ハワイ、ホノルル</li>
          <li>カリフォルニア、サンフランシスコ</li>
        </ul>
        <h3>特技</h3>
        <ul>
          <li>腕相撲</li>
          <li>ボクシング</li>
          <li>バスケットボール</li>
          <li>スキー</li>
          <li>スノーボード</li>
          <li>英会話</li>
        </ul>
        <h3>趣味</h3>
        <ul>
          <li>新聞配達</li>
          <li>漫画(スラムダンク、こち亀、GTO)</li>
          <li>島田紳助</li>
        </ul>
        <h3>資格</h3>
        <ul>
          <li>SAJスキー検定2級</li>
          <li>JSBAスノーボード検定2級</li>
          <li>英語検定2級</li>
          <li>救命技能認定証</li>
        </ul>

        {/* Eiji */}
        <span>
          <span className={classes["profile-name"]}>入山</span> / ツッコミ担当
        </span>
        <h3>出身、育ち</h3>
        <ul>
          <li>香港・上海</li>
          <li>東京</li>
          <li>ペンシルバニア</li>
        </ul>
        <h3>特技</h3>
        <ul>
          <li>全スポーツ</li>
          <li>パソコン</li>
          <li>英会話</li>
        </ul>
        <h3>趣味</h3>
        <ul>
          <li>全スポーツ</li>
          <li>アニメ鑑賞</li>
        </ul>
        <h3>資格</h3>
        <ul>
          <li>自動車免許</li>
          <li>Azure Fundamentals</li>
        </ul>
      </div>

      <div id="job-offer" className={classes["job-offer"]}>
        <h2 className={classes["job-offer-title"]}>お仕事</h2>
        {/* Key visual */}
        <div className={classes["job-offer-key-visual"]}>
          <Image src="/assets/drug.jpg" alt="" width={537} height={345} />
        </div>
        {/* Form link */}
        <p className={classes["job-offer-message"]}>
          ご連絡の際は、XのDMをご活用ください。
        </p>
      </div>

      <div id="sns-links" className={classes["sns-links"]}>
        {/* X */}
        <a href="https://x.com/YankeeManzai?t=6dIsmbWooim3hmsXL9aKrg&s=09">
          <Image src="/assets/sns/X.png" alt="" width={100} height={100} />
        </a>
        {/* Youtube */}
        <a href="https://www.youtube.com/@CHINPIRA-MANZAI">
          <Image src="/assets/sns/youtube.webp" alt="" width={100} height={100} />
        </a>
        {/* Wiki */}
        <a href="https://ja.wikipedia.org/wiki/%E3%83%94%E3%83%BC%E3%83%8A%E3%83%83%E3%83%84%E3%83%90%E3%82%BF%E3%83%BC_(%E3%81%8A%E7%AC%91%E3%81%84%E3%82%B3%E3%83%B3%E3%83%93)">
          <Image src="/assets/sns/wiki.png" alt="" width={100} height={100} />
        </a>
      </div>
    </div>
  );
};

export default MainContent;
