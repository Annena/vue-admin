<!-- 所有的公共组件需要放在components下面 -->
<template>
	<div class="footer fixed">
		<ul id="dev">
		<!-- router-link该标签主要实现跳转链接功能 -->
		<!-- 属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由） -->
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/manage">人员管理</router-link></li>
		</ul>
	</div>
</template>
<!-- scoped是表示下面的样式只在本页面生效，不影响全局的样式 -->
<style type="text/css" scoped>
	.footer{width: 100%;height: 50px;bottom: 0}
	ul{display: flex;height: 100%;line-height: 50px;}
	li{flex: 1;background: #f1f1f1;}
	li a{display: inline-block; width: 100%; height:100%;}
	.isIndex li:first-child{background-color:#d3d3d3;}
	.isIndex li:first-child a{color:#41b883;}
	.isManage li:last-child{background-color:#d3d3d3;}
	.isManage li:last-child a{color:#41b883;}

</style>