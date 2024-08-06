// JavaScript 文件内容
document.addEventListener("DOMContentLoaded", function() {
    // 获取图片元素
    var bilibiliImg = document.querySelector('img[src="bilibili.jpg"]');
    var cloudmusicImg = document.querySelector('img[src="cloudmusic.jpg"]');
    var githubImg = document.querySelector('img[src="github.jpg"]');

    // 添加点击事件监听器
    bilibiliImg.addEventListener("click", function() {
        window.location.href = "https://space.bilibili.com/37959643?spm_id_from=333.1007.0.0"; // 跳转到哔哩哔哩网站
    });

    cloudmusicImg.addEventListener("click", function() {
        window.location.href = "https://music.163.com/#/user/home?id=409192898"; // 跳转到网易云音乐网站
    });
    githubImg.addEventListener("click", function() {
        window.location.href = "https://nzxnzx666.github.io/"; // 跳转到网易云音乐网站
    });
});