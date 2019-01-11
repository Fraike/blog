<template>
    <div class="weatherIconWrapper">
        <div class="sunny" v-if="type === '晴'"></div>

        <div class="partly_cloudy" v-else-if="type === '多云'">
            <div class="partly_cloudy__sun"></div>
            <div class="partly_cloudy__cloud"></div>
        </div>

        <div class="cloudy" v-else-if="type === '阴'"></div>

        <div class="rainy" v-else-if="type === '雨'">
            <div class="rainy__cloud"></div>
            <div class="rainy__rain"></div>
        </div>

        <div class="thundery" v-else-if="type === '雷雨'">
            <div class="thundery__cloud"></div>
            <div class="thundery__rain"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            type: '晴'
        }
    },
    props:{
        num:[Object]
    },
    mounted() {
        let key = parseInt(this.num.wratherCode)
        if(0<key<3)
        if( 0 < key && key < 3){
             this.type = '晴'
        }else if(4 <= key && key <=8){
            console.log('多云');
            this.type = '多云'
        }else if(key === 9|| 26<=key && key<=33){
            this.type = '阴'
        }else if(key === 10|| 13<=key && key<=15){
             this.type = '雨'
        }else if( 11<=key && key<=12||16<=key && key<=18 ){
            this.type = '雷雨'
        }
        // switch(true){
        //     case 0<key<3:
        //         console.log('晴');
        //         console.log(key)
               
        //         break;
        //     case 4<key<8:
        //         console.log('多云');
        //         this.type = '多云'
        //         break;
        //     case key === 9|| 26<key< 33:
        //         console.log('阴');
        //          this.type = '阴'
        //         break;
        //     case key === 10|| 13<=key<=15:
        //         console.log('雨');
        //         this.type = '雨'
        //         break;
        //     case 11<=key<=12|| 16<=key<=18:
        //         console.log('雷雨');
        //          this.type = '雷雨'
        //         break;
        //     default:
        //         console.log('defa')
        // }
    },
}
</script>

<style lang='stylus' scoped>

$iconWidth = 3rem
.weatherIconWrapper{
    padding .5rem
    display flex
    justify-content center
    align-items center
}

    .sunny {
	position: relative;
	width: $iconWidth;
	height: $iconWidth;
}

.sunny,
.partly_cloudy__sun {
	&:before {
		content: "";
		position: absolute;
		height: 80%;
		width: 80%;
		top: 10%;
		right: 10%;
		border-radius: 50%;
		z-index: 2;
		background-color: #f1c40f;
		background-image: radial-gradient(#f1c40f, #f39c12);
		box-shadow: 0 0 25px #917508;
	}
	&:after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
        left: 0;
		border-radius: 50%;
		z-index: 1;
		background-color: #f39c12;
		will-change: opacity, transform;
		animation: fadeIn 2s linear infinite reverse,
			scaleDown 2s linear infinite reverse;
	}
}

.cloudy {
	position: relative;
	width: $iconWidth;
	height:$iconWidth;
}
.cloudy,
.partly_cloudy__cloud,
.rainy__cloud,
.thundery__cloud {
	&:before {
		content: "";
		position: absolute;
		height: 40%;
		width: 40%;
		top: 30%;
		right: 0%;
		border-radius: 50%;
		border-bottom-left-radius: 0;
		z-index: 2;
		background-color: #f1c40f;
		background-image: radial-gradient(#ecf0f1, #bdc3c7);
		box-shadow: 0 0 25px rgba(0,0,0,0.3);
	}
	&:after {
		content: "";
		position: absolute;
		height: 60%;
		width: 70%;
		top: 10%;
		right: 30%;
		border-radius: 50%;
		border-bottom-right-radius: 0;
		z-index: 1;
		background-color: #f39c12;
		background-image: radial-gradient(#ecf0f1, #bdc3c7);
		box-shadow: 0 0 25px rgba(0,0,0,0.3);
	}
}

.partly_cloudy {
	position: relative;
	width: $iconWidth;
	height: $iconWidth;
	&__sun {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	&__cloud {
		position: absolute;
		width: 60%;
		height: 60%;
		top: 40%;
		z-index: 2;
		will-change: transform;
		animation: translateUp 2s linear infinite alternate;
	}
}

.rainy,
.thundery {
	position: relative;
	width: $iconWidth;
	height: $iconWidth;
	&__cloud {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 2;
		&:before {
			background-image: radial-gradient(#95a5a6, #7f8c8d);
		}
		&:after {
			background-image: radial-gradient(#95a5a6, #7f8c8d);
		}
	}
	&__rain {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 1;
		overflow: hidden;
		&:before {
			content: "";
			position: absolute;
			height: 80%;
			width: 20%;
			top: 20%;
			right: 50%;
			z-index: 1;
			background-image: linear-gradient(transparent, #94cdd1);
			will-change: opacity, transform;
			animation: fadeIn 1s ease-out infinite reverse,
				scaleUp 1s ease-out infinite;
		}
		&:after {
			content: "";
			position: absolute;
			height: 60%;
			width: 20%;
			top: 40%;
			right: 20%;
			z-index: 1;
			opacity: 0;
			background-image: linear-gradient(transparent, #94cdd1);
			will-change: opacity, transform;
			animation: fadeIn 2s ease-out .4s infinite reverse,
				scaleUp 2s ease-out .4s infinite;
		}
	}
}

.thundery {
	&__cloud {
		&:before {
			background-image: radial-gradient(#4d5656, #393c3c);
			animation: thunder 4s linear .02s infinite alternate;
		}
		&:after {
			background-image: radial-gradient(#4d5656, #393c3c);
			animation: thunder 4s linear infinite alternate;
		}
	}
	&__rain {
		&:before {
			animation: fadeIn .5s ease-out infinite reverse,
				scaleUp .5s ease-out infinite;
		}
		&:after {
			animation: fadeIn .75s ease-out .2s infinite reverse,
				scaleUp .75s ease-out .2s infinite;
		}
	}
}


// Animations
@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@keyframes scaleDown {
	0% { transform: scale(1); }
	100% { transform: scale(.8); }
}

@keyframes translateUp {
	0% { transform: translatey(15%); }
	100% { transform: translatey(0); }
}

@keyframes scaleUp {
	0% { transform: scaley(0); }
	100% { transform: scaley(1); }
}

@keyframes thunder {
	0% { box-shadow: 0 0 25px #fff; }
	2% { box-shadow: 0 0 25px #303636; }
	49% { box-shadow: 0 0 25px #303636; }
	50% { box-shadow: 0 0 25px #fff; }
	52% { box-shadow: 0 0 25px #f7db6e; }
	53% { box-shadow: 0 0 25px #303636; }
	69% { box-shadow: 0 0 25px #303636; }
	70% { box-shadow: 0 0 25px #fff; }
	71% { box-shadow: 0 0 25px #303636; }
	75% { box-shadow: 0 0 25px #303636; }
	76% { box-shadow: 0 0 25px #fff; }
	77% { box-shadow: 0 0 25px #a8d3f0; }
	78% { box-shadow: 0 0 25px #303636; }
	100% { box-shadow: 0 0 25px #303636; }
}
</style>