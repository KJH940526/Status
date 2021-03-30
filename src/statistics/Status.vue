<template lang="">
    <div>
        

        <h2 id="title">처리 현황 통계</h2>

<div>검색 기간 </div>
<br/>

<div>
    <h4>CCTV</h4> 

</div> 

<br/> 
<div>관제사 </div> 
<br/> 

<div> 
    <button>조회</button>
    <button>내보내기</button>
</div>

<br/> 
<table>
    <td>CCTV</td>
    <td>관제사</td>
    <td>이벤트 타입</td>
    <td>처리 상황</td>
    <td>차트</td>
    <tr v-for="Item in Items">
            <td>{{ Item.CCTV}}</td>
            <td>{{ Item.관제사}}</td>
            <td>{{ Item.이벤트타입}}</td>
            <td>{{ Item.처리상황}}</td>               
    </tr>

</table>


<br/>
    <!-- <ul>
        <li v-for="Item in Items"> {{ Item}}</li>
    </ul>
        asdasd
     <ul>
          <li v-for="Item in chart1"> {{ Item }}</li>
    </ul>
         <ul>
          <li v-for="Item in chart2"> {{ Item }}</li>
    </ul>
         <ul>
          <li v-for="Item in chart3"> {{ Item }}</li>
    </ul> -->
    <div id = "app">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    <p>통계</p>
    </div>
</div>
</template>
<script>
import data from '../data/data'
import PieChart from './PieChart'

//cctv 추가버튼을 누르면 드롭박스!!
//드롭박스를 눌러서 cctv를 선택하면 그 값이 저장!!

export default {
    name: "Status",
    components:{
        PieChart
    },
    data(){
       return  {
           Items: [], 
           count1: [],
           count2: [],
           count3: [],

           chart1: [],
           chart2: [],
           chart3: [],
           
           TimeStart: [], //시작시간
           TimeEnd: [],   //끝난시간
           CCTVItmes: [], //CCTV 리스트
           UserItems: [], //User Item

           //chart.js
           chartOptions: {
               hoverBorderWidth: 10,
           },
           chartData:{
               hoverBackgroundColor: "red",
               hoverBorderWidth: 10,
               labels: ["이상없음", "미처리", "오탐"],
               datasets: [
                   {
                       label: "Data One",
                       backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                       data: [],
                   }
               ]
           }
       }
    },
    created(){
        for(var i=0; i < data.length; i++){     
            this.Items.push(data[i])        
            // console.log(data[i])
            // console.log(data[i].처리상황)
            if(data[i].처리상황=="이상없음"){           
                // console.log(num1);
                this.count1.push(data[i])
                // console.log(this.count1)
            }else if(data[i].처리상황=="미처리"){              
                // console.log(num2);
                this.count2.push(data[i])
                //  console.log(this.count2)
            }else {           
                // console.log(num3);
                this.count3.push(data[i])
                // console.log(this.count3)
            }     
        }
        
    },
    beforeMount(){
        // length를 차트 1에 다가 넣고
        // for문 돌리면 될듯 ㅇㅇ


        var num1 = this.count1.length;
        this.chart1.push(num1)

        // console.log(this.chart1);

        var num2 = this.count2.length;
        this.chart2.push(num2)
        
        var num3 = this.count3.length;
        this.chart3.push(num3)

        console.log(this.chart1[0]); 

        this.chartData.datasets[0].data.push(num1)
        this.chartData.datasets[0].data.push(num2)
        this.chartData.datasets[0].data.push(num3)
        
        console.log(this.chartData.datasets[0].data[0]);

    },
    mounted(){

    },
    beforeUpdate(){

    },
    updated(){

    },
    beforeDestroy(){

    },
    methods:{

    }
}
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


    
</style>