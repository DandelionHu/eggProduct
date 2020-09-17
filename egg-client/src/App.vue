<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="stylus">
</style>
