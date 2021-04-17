import React from "react";
import "./goods.css";
const Goods = () => {
  return (
    <div>
      <div className="book">
        <div className="book-img">
          <img
            src="https://d17lzgq6gc2tox.cloudfront.net/product/three_d_cover_image/original/9781616207861_3D.png?1585368153"
            alt="book"
          />
        </div>
        <div className="book-des">
          <div className="book-des_title blockquote">
            Site Reliability Engineering
          </div>
          <div className="book-des_writen">by Mihael T.Nygard</div>
          <div className="book-des_cost">$34</div>
          <div className="book-des_btn btn btn-info"> Add to Cart</div>
        </div>
      </div>
      <div className="book">
        <div className="book-img">
          <img
            src="https://d17lzgq6gc2tox.cloudfront.net/product/three_d_cover_image/original/9781616207861_3D.png?1585368153"
            alt="book"
          />
        </div>
        <div className="book-des">
          <div className="book-des_title blockquote ">
            Site Reliability Engineering
          </div>
          <div className="book-des_writen">by Mihael T.Nygard</div>
          <div className="book-des_cost">$34</div>
          <div className="book-des_btn btn btn-info"> Add to Cart</div>
        </div>
      </div>
    </div>
  );
};
export default Goods;
