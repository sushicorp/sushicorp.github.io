<template>
	<div class="hero">
		<div class="hero__inner" v-class="hero__inner-display">
			<p class="hero__message" v-text="message" v-if="message.length > 0" v-transition></p>
		</div>
	</div>
	<main>
		<article>
			<h3>Topic</h3>
			
			<ul>
				<li>2015.01.02 上場廃止しました</li>
				<li>2015.01.01 上場しました</li>
			</ul>
			
		</article>
	</main>
</template>

<script>
	module.exports = {
		data: function(){
			return {
				message: ""
			}
		},
		ready: function(){
			var messages = [
				"No.1 Sushitem Integrator",
				"ITで世の中を変革する",
				"お客様から選ばれ続ける信頼と実力",
				"顧客満足度、圧倒的No.1",
				"グローバル化時代において、チャレンジし続ける",
				"コラボレーションで新たなステージへ",
				"圧倒的貢献",
				"Web 2.0",
				"クラウド",
				"コンテナ",
				"鮨",
				"肉",
				"ビール",
				"ピザ",
				"海鮮丼",
				"温泉旅行"
			];
			var messageIdx = 0;
			var self = this;
			var change = function(){
				self.message = messages[messageIdx];
				setTimeout(function(){
					self.message = "";
				}, 3000);
				messageIdx = (messageIdx + 1) % messages.length;
			};
			
			change();
			setInterval(change, 5000);
		}
	}
	

</script>

<style>
	.hero{
		background-color: white;
		background-image: url(hero.jpg);
		background-size: cover;
		height: 400px;
	}
	.hero__inner{
		height: 400px;
		text-align: center;
	}
	
	.hero__message{
		line-height: 400px;
		height: 400px;
		color: white;
		font-size: 4rem;
		text-shadow: 0px 1px 3px #555;
	}
	
	.hero__message.v-enter{
		opacity: 0;
		transform: translate(-500px, 0);
	}
	.hero__message.v-leave{
		opacity: 0;
		transform: translate(500px, 0);
	}
	
	.hero__message.v-transition{
		transition: all 1s ease;
	}
	
</style>