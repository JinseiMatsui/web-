// 4秒後にヘッダーを表示する関数
function showHeader() {
    document.getElementById("head").style.display = "flex";
}

// 4秒後にshowHeader関数を呼び出す
setTimeout(showHeader, 4000);


$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });


// 悩みを抱えた人間のフェードイン
$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".imgcontent").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});


// セクション5
// スライドショーの画像要素を取得
const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByTagName('img');
const slideCount = slides.length;
let currentIndex = 0;

// 最初の画像にactiveクラスを追加
slides[currentIndex].classList.add('active');

// 一定の時間間隔で画像を切り替えるタイマーを設定
setInterval(() => {
  // 現在の画像を非表示にする
  slides[currentIndex].classList.remove('active');
  // 次の画像のインデックスを計算
  currentIndex = (currentIndex + 1) % slideCount;
  // 次の画像を表示する
  slides[currentIndex].classList.add('active');
}, 3000); // 3秒ごとに切り替える（適宜時間を調整