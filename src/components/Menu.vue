<template>
<div id="app">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="master.css" type="text/css">
    <title>PASS EXPRESS</title>
</head>
<body>
    <div class="gradient">
        <header class="float-two">
            <h3>PASS EXPRESS</h3>
        </header>
        <h2>メニュー</h2>
        <main>
            <body>
                <div class="float-one">
                    <router-link to="/Login">
                        <button class="button-three" @click="logout">
                            ログアウト
                        </button>
                    </router-link>
                </div>
                <div class = "centerClear">
                    <p>ユーザー名</p>
                </div>
            </body>

            <body>
                <div class=center>
                    <router-link to="/SelectPage">
                        <button class="button-two" v-on:click="quiz" >
                            問題を解く
                        </button>
                    </router-link>
                    <router-link to="/PastResult">
                        <button class="button-two" v-on:click="result">
                            過去成績
                        </button>
                    </router-link>
                </div>
            </body>
        </main>
    </div>
</body>
</div>
</template>

<style>

</style>

<script>
// var app = new vue({
//     el:'#app'
//     ,data:{
//     } ,
//     methods:{
//         logout(){
//         window.sessionStorage.removeItem(['login']);
//           window.confirm("これが確認ダイアログです。");
//         }
//     }
// })
</script>
