$(document).ready(function () {
    // アルファベットボタンクリックイベント
    $('.alphabet-button').on('click', function () {
        const letter = $(this).text();
        console.log(`Button ${letter} clicked`);
        // ここにフィルタリング処理を追加
    });

    // 検索ボタンクリックイベント
    $('#search-button').on('click', function () {
        const query = $('#search-box').val();
        console.log(`Search for: ${query}`);
        // ここに検索処理を追加
    });
});
