<template>
<div id="app">
    <head>
        <meta charset="UTF-8">
    <link rel="stylesheet" href="master.css" type="text/css">
    <title>PASS EXPRESS</title>
    </head>

    <body>
    <div class="gradient">
        <header>
        <h3>PASS EXPRESS</h3>
        </header>
        <main>
        <p>問題数  
            <select class="textbox-two" name=”選択”>
                <option value=”10”>10</option>
                <option value=”30”>30</option>
                <option value=”60”>60</option>
            </select>
        </p>

        <div>
            <p>問題カテゴリ   
            <select class="textbox-two" name=”問題カテゴリ”>
                <option value=”Apex”>Apex</option>
                <option value=”.Net”>.Net</option>
                <option value=”データ管理”>データ管理</option>
                <option value=”ランダム”>ランダム</option>
            </select>
            </p>

            <p>出題形式</p>
            <div>
                <input class="button" type="radio" name="Select" value="">順に
                <input class="button" type="radio" name="Select" value="">ランダム
            </div>

            <p>問題</p>
            <div>
                <input class="button" type="radio" name="Select" value="">全て
                <input class="button" type="radio" name="Select" value="">誤った問題のみ
            </div>

            <div>
                    <input class="button-one" type="submit" name="" value="問題を解く">
                <router-link to="/Menu">
                    <input class="button-three" type="submit" name="" value="戻る">
                </router-link>
            </div>
        </div>
        </main>
    </div>
    </body>
</div>
</template>

<style>

</style>

<script>

</script>