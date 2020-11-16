
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
                <div style="float:left; width:80%; margin:5px auto;">

                        <div style="float:left; width:30%;"><strong>結果一覧</strong></div>
                        <div style="float:right; width:30%;"><strong>ユーザー名:</strong><span>坂田翔梧※ユーザー名が表示</span></div>
                    </div>

                    <div class="box3">
                        <router-link to="/Menu">
                            <a href ="" class="button-two">メニュー</a> 
                        </router-link>
                        <router-link to="/PastResult">
                            <a href ="" class="button-two">過去成績</a>
                        </router-link>
                    </div>

                    <div class="box4">
                        <p>問題文</p>
                        <p>問題文が表示されます。問題文が表示されます。問題文が表示されます。問題文が表示されます。問題文が表示されます。問題文が表示されます。問題文が表示されます。問題文が表示されます。</p>      
                    </div>

                    <div class="box5">
                        <div>
                            <p>選択肢</p>
                            <ol>
                                <li>AAAAAAAAA</li>
                                <li>BBBBBBBBB</li>
                                <li>CCCCCCCCC</li>
                                <li>DDDDDDDDD</li>
                            </ol>   
                        </div>
                    <div>
                        <p>解答</p>
                        <ol>
                            <li><input type="radio" name="radio" class="radio-input" id="radio-01">
                            <label for="radio-01"></label></li>
                            <li><input type="radio" name="radio" class="radio-input" id="radio-02">
                            <label for="radio-02"></label></li>
                            <li><input type="radio" name="radio" class="radio-input" id="radio-03">
                            <label for="radio-03"></label></li>
                            <li><input type="radio" name="radio" class="radio-input" id="radio-04">
                            <label for="radio-04"></label></li>  
                        </ol>
                    </div>
                    <div>
                        <p>自分の解答</p>
                        <ol>
                        <li><input type="radio" name="radio" class="radio-input" id="radio-01">
                        <label for="radio-01"></label></li>
                        <li><input type="radio" name="radio" class="radio-input" id="radio-02">
                        <label for="radio-02"></label></li>
                        <li><input type="radio" name="radio" class="radio-input" id="radio-03">
                        <label for="radio-03"></label></li>
                        <li><input type="radio" name="radio" class="radio-input" id="radio-04">
                        <label for="radio-04"></label></li> 
                        </ol>
                    </div>
                </div>

            <div class = "box3">
                <router-link to="/Menu">
                    <a href ="" class=button-two style="width:100px;height:50px">メニュー</a>
                </router-link>
                <router-link to="/PastResult">
                    <a href ="" class=button-two style="width:100px;height:50px">過去成績</a>
                </router-link>
            </div>
    </div>
</body>   
</div>
</template>

<style>

</style>

<script>

</script>