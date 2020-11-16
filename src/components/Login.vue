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
    <div class="center">
        <img class="icon" src="@/assets/aicon2.png">
        <h1>PASS EXPRESS</h1>
    </div>
</header>
<main>
    
        <form action="./input.html" method="post">
                <p class="center">
                <!--  <label class="login">ID</label>     -->
                    <input class="loginText-one" type="text" name="loginText" placeholder=" ID">
                </p>
                <p class="center">
                <!--   <label class="login">PASS</label>    -->
                    <input class="loginText-one" type="password" name="loginText" placeholder=" PASS">
                </p>
            <div class="center clear">
                <router-link to="/Menu">
                <input class="button-one" type="submit" name="Login" value="Login">
                </router-link>
                
            </div>
        </form>
    
</main>
    </div>
</body>
</div>
</template>


<style>

</style>

<script>

</script>