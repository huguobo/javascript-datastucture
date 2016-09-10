// var line;
// var data=[];

// while(line = read_line()){
//   data.push(line);
// }

var data=["abcda","ab","c"];
var c=data.length;
var n=0;

while(n<c){
    
    var path=data[n]+'';
    n+=1;
    var f=data[n]+'';
    n+=1;
    var  s=data[n]+'';
    var ff=0;
    var bf=0;
    var match1=path.indexOf(f);
    console.log("match1:"+match1);
    
    if(match1>=0){
    	var begin=parseInt(match1, 10)+f.length;
        console.log("begin:"+begin)
    	if(path.slice(begin).indexOf(s)>=0){
    		ff=1;
    	}
    }
    var bpath=path.split('').reverse().join("")+'';
    console.log("bpath:"+bpath);
    var match2=bpath.indexOf(f);
    console.log("match2:"+match2);
    if(match2>=0){
    	var begin=parseInt(match2, 10)+f.length;
    	if(bpath.slice(begin).indexOf(s)>=0){
    		bf=1;
    	}
    }
    console.log("bf:"+bf+",FF:"+ff);
    if(ff>0&&bf>0){
    	console.log("result:both");
    }
    else if(ff>0){
    	console.log("result:forward");
    }
    else if(bf>0){
    	console.log("result:backward");
    }
    else{
    	console.log("result:invalid");
    }
    n+=1;
   }
