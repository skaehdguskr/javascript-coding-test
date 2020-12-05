function solution(s){
    var answer = false,
          p_arr = s.toLowerCase().split("p"),
          y_arr = s.toLowerCase().split("y");
    if(p_arr.length == y_arr.length)
        answer = true;
    return answer;

}
